import API from './axiosInstance';

const orderService = {
  // 📦 Get all orders for the admin dashboard
  getAllOrders: async (queryString = '') => {
    // Point this to your standard order controller route
    const response = await API.get(`/order/all${queryString}`); 
    return response.data;
  },

  // ✏️ Update an order's status
  updateOrderStatus: async (id, status) => {
    // Changed from /order to /admin/order
    const response = await API.patch(`/admin/order/${id}/status`, { status });
    return response.data;
  },
  
  // 🔍 Get a single order's details
  // 🔍 Get a single order's details
  getOrderById: async (id) => {
    const response = await API.get(`/order/${id}`);
    return response.data;
  }
};

export default orderService;