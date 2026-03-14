import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle admin logout logic here
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Alday Admin
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className="block p-3 rounded hover:bg-slate-800 transition">
            Dashboard
          </Link>
          <Link to="/admin/products" className="block p-3 rounded hover:bg-slate-800 transition">
            Manage Products
          </Link>
          <Link to="/admin/bestsellers" className="block p-3 rounded hover:bg-slate-800 transition">
            Best Sellers
          </Link>
          <Link to="/admin/orders" className="block p-3 rounded hover:bg-slate-800 transition">
            Orders
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold text-gray-800">Admin Control Panel</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {/* Outlet renders the specific admin page based on the route */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;