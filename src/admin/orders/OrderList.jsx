import React, { useState } from 'react';

const initialOrders = [
  { id: 'ORD-7821', customer: 'Emma Watson', date: '2026-03-13', total: 899.00, status: 'Processing' },
  { id: 'ORD-7822', customer: 'John Doe', date: '2026-03-12', total: 1450.00, status: 'Shipped' },
  { id: 'ORD-7823', customer: 'Alice Smith', date: '2026-03-10', total: 325.00, status: 'Delivered' },
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Orders</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-semibold text-gray-600">Order ID</th>
              <th className="p-4 font-semibold text-gray-600">Customer</th>
              <th className="p-4 font-semibold text-gray-600">Date</th>
              <th className="p-4 font-semibold text-gray-600">Total</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium text-slate-800">{order.id}</td>
                <td className="p-4 text-gray-600">{order.customer}</td>
                <td className="p-4 text-gray-500">{order.date}</td>
                <td className="p-4 font-medium text-gray-800">₹{order.total.toFixed(2)}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-slate-900 hover:text-blue-600 font-medium text-sm">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;