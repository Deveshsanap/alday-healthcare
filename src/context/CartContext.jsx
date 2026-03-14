import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const API_BASE_URL = 'https://aldey-backend.vercel.app/api/cart';

  const getToken = () => localStorage.getItem('alday_auth_token');

  // --- BULLETPROOF ID HELPER ---
  const getTrueId = (item) => {
    if (!item) return null;
    if (typeof item.productId === 'object') return item.productId._id || item.productId.id;
    return item.productId || item._id || item.id;
  };

  // Load Cart from Backend OR Local Storage
  useEffect(() => {
    const fetchCart = async () => {
      const token = getToken();
      if (token) {
        try {
          const res = await fetch(API_BASE_URL, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            const data = await res.json();
            const fetchedItems = data.items || data.data?.items || data.cart?.items || data.data || []; 
            
            const normalizedCart = fetchedItems.map(item => {
              const productObj = typeof item.productId === 'object' ? item.productId : 
                                 typeof item.product === 'object' ? item.product : null;
              
              if (productObj) {
                return {
                  ...productObj,
                  _id: productObj._id || productObj.id,
                  quantity: Number(item.quantity) || 1
                };
              }
              return {
                ...item,
                _id: getTrueId(item),
                quantity: Number(item.quantity) || 1
              };
            });

            if (normalizedCart.length > 0) {
              setCartItems(normalizedCart);
              return; 
            }
          }
        } catch (error) {
          console.error("Failed to load cart from server", error);
        }
      }
      
      const savedCart = localStorage.getItem('alday_cart');
      if (savedCart) setCartItems(JSON.parse(savedCart));
    };

    fetchCart();
  }, []);

  // Save to Local Storage as backup
  useEffect(() => {
    localStorage.setItem('alday_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product, quantity = 1) => {
    const pId = getTrueId(product);

    // 1. Optimistic UI Update
    setCartItems(prev => {
      const existing = prev.find(item => getTrueId(item) === pId);
      if (existing) {
        return prev.map(item => 
          getTrueId(item) === pId ? { ...item, quantity: Number(item.quantity) + Number(quantity) } : item
        );
      }
      return [...prev, { ...product, _id: pId, quantity: Number(quantity) }];
    });
    
    setIsCartOpen(true);

    // 2. Server Sync
    const token = getToken();
    if (token) {
      try {
        await fetch(`${API_BASE_URL}/add`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          },
          body: JSON.stringify({ productId: pId, quantity: Number(quantity) })
        });
      } catch (error) {
        console.error("Failed to sync add to cart with server", error);
      }
    }
  };

  const removeFromCart = async (id) => {
    setCartItems(prev => prev.filter(item => getTrueId(item) !== id));

    const token = getToken();
    if (token) {
      try {
        await fetch(`${API_BASE_URL}/remove/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch (error) {}
    }
  };

  const updateQuantity = async (id, delta) => {
    let newQuantity = 1;
    
    // 1. Optimistic UI Update
    setCartItems(prev => prev.map(item => {
      const currentId = getTrueId(item);
      
      if (String(currentId) === String(id)) {
        newQuantity = Math.max(1, Number(item.quantity) + Number(delta));
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));

    // 2. Server Sync
    const token = getToken();
    if (token) {
      try {
        await fetch(`${API_BASE_URL}/update`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          },
          body: JSON.stringify({ productId: id, quantity: newQuantity }) 
        });
      } catch (error) {
        console.error("Failed to sync quantity", error);
      }
    }
  };

  const clearCart = async () => {
    setCartItems([]);
    const token = getToken();
    if (token) {
      try {
        await fetch(`${API_BASE_URL}/clear`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } catch (error) {}
    }
  };

  // Safe Math Calculations
  const getCartTotal = () => cartItems.reduce((total, item) => total + (Number(item.price || 0) * Number(item.quantity || 1)), 0);
  const getCartCount = () => cartItems.reduce((count, item) => count + Number(item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      getCartTotal, 
      getCartCount,
      isCartOpen, 
      setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};