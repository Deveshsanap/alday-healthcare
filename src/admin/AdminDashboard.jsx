import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here's what's happening with your store today.</p>
      </div>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Total Revenue</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">₹ 1,24,500</span>
          <span className="text-sm text-green-500 mt-2 font-medium">↑ 12% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Active Orders</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">142</span>
          <span className="text-sm text-green-500 mt-2 font-medium">↑ 5% from last month</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Total Products</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">84</span>
          <span className="text-sm text-gray-400 mt-2 font-medium">12 Low in stock</span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Customers</span>
          <span className="text-3xl font-bold text-slate-800 mt-2">1,204</span>
          <span className="text-sm text-green-500 mt-2 font-medium">↑ 18 new this week</span>
        </div>
      </div>

      {/* Recent Orders Preview (Static) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Total</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-slate-800">#ORD-001</td>
                <td className="p-4 text-gray-600">Sarah Jenkins</td>
                <td className="p-4 text-gray-500">Today, 10:24 AM</td>
                <td className="p-4 font-medium text-slate-800">₹1,240.00</td>
                <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">Processing</span></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-slate-800">#ORD-002</td>
                <td className="p-4 text-gray-600">Michael Chen</td>
                <td className="p-4 text-gray-500">Yesterday, 4:30 PM</td>
                <td className="p-4 font-medium text-slate-800">₹450.00</td>
                <td className="p-4"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">Shipped</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;