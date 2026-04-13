import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://aldey-backend.vercel.app/api';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use((req) => {
  const adminToken = localStorage.getItem('adminToken');
  const userToken = localStorage.getItem('alday_auth_token');
  
  const token = req.url.startsWith('/admin') ? adminToken : (userToken || adminToken);
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
}, (error) => {
  return Promise.reject(error);
});

API.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.warn("Session expired or unauthorized. Logging out to protect user data.");
      
      localStorage.removeItem('adminToken');
      localStorage.removeItem('alday_active_user');
      localStorage.removeItem('alday_auth_token');
      
      const currentPath = window.location.pathname;

      // Only redirect if the user is NOT already on the login page
      if (currentPath.startsWith('/admin')) {
         if (currentPath !== '/admin/login') {
             window.location.href = '/admin/login';
         }
      } else {
         if (currentPath !== '/login') {
             window.location.href = '/login';
         }
      }
    }
    return Promise.reject(error);
  }
);

export default API;