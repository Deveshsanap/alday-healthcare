import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      
      {/* Backdrop (Click to close) */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
          <h2 className="text-lg font-bold uppercase tracking-widest flex items-center gap-2">
            <ShoppingBag size={20} /> Your Bag ({cartItems.length})
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Items Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
               <ShoppingBag size={48} strokeWidth={1} />
               <p className="text-lg font-medium">Your bag is empty.</p>
               <button onClick={() => setIsCartOpen(false)} className="underline text-sm uppercase font-bold tracking-widest">
                  Continue Shopping
               </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                {/* Product Image */}
                <div className="w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden rounded-sm relative">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                       <h3 className="font-bold text-sm leading-tight mb-1">{item.name}</h3>
                       <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.category || "Care"}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex justify-between items-end mt-auto">
                     {/* Quantity Controls */}
                     <div className="flex items-center border border-gray-200 rounded-sm h-8">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 h-full hover:bg-gray-100 disabled:opacity-50" disabled={item.quantity <= 1}><Minus size={12}/></button>
                        <span className="px-2 text-xs font-bold w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 h-full hover:bg-gray-100"><Plus size={12}/></button>
                     </div>
                     {/* Price */}
                     <p className="font-bold text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer (Subtotal & Checkout) */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
               <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Subtotal</span>
               <span className="text-xl font-bold">₹{getCartTotal().toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <Link 
              to="/checkout" 
              onClick={() => setIsCartOpen(false)}
              className="w-full bg-black text-white py-4 uppercase text-xs font-bold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors rounded-sm"
            >
              Checkout <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;