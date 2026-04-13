import React, { createContext, useContext, useState, useEffect } from 'react';
import orderService from '../api/orderService'; 

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  // Change initial loading state to false, so it doesn't spin forever for guests
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const data = await orderService.getAllOrders(); 
      const fetchedOrders = data.data || data.orders || data || [];
      setOrders(Array.isArray(fetchedOrders) ? fetchedOrders : []);
      setError('');
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setError('Failed to load orders. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // 🔥 FIX: Only fetch orders if the user has a valid token
    const userToken = localStorage.getItem('alday_auth_token');
    const adminToken = localStorage.getItem('adminToken');

    if (userToken || adminToken) {
      fetchOrders();
    }
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders, isLoading, error, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};