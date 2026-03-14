import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, MapPin, Search, ChevronRight, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  // Mock tracking data
  const trackingSteps = [
    { status: 'Order Placed', date: 'Feb 18, 2026', time: '10:30 AM', completed: true, icon: <Package size={20}/> },
    { status: 'Processing', date: 'Feb 18, 2026', time: '02:15 PM', completed: true, icon: <Clock size={20}/> },
    { status: 'In Transit', date: 'Feb 19, 2026', time: '09:00 AM', completed: true, icon: <Truck size={20}/> },
    { status: 'Out for Delivery', date: 'Pending', time: '-', completed: false, icon: <MapPin size={20}/> },
    { status: 'Delivered', date: 'Pending', time: '-', completed: false, icon: <CheckCircle size={20}/> },
  ];

  const handleTrack = (e) => {
    e.preventDefault();
    if(orderId.trim()) setShowStatus(true);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
  

      <main className="max-w-[1200px] mx-auto px-6 py-20 mt-16">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-4">Track Your Journey</h1>
            <p className="text-gray-500 font-light">Enter your order ID to see exactly where your clinical nutrition is.</p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleTrack} className="flex gap-2 mb-16 bg-gray-50 p-2 rounded-sm border border-gray-100 shadow-sm">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Order ID (e.g. ALDAY-123456)" 
                className="w-full bg-white border border-gray-200 py-4 pl-12 pr-4 text-sm font-bold uppercase tracking-widest outline-none focus:border-black transition-colors"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-black text-white px-8 md:px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg">
              Track
            </button>
          </form>

          {showStatus ? (
            <div className="animate-fade-in-up">
              {/* Order Meta Info */}
              <div className="flex flex-wrap justify-between items-center bg-[#12221A] text-white p-6 rounded-t-sm">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-green-300 mb-1">Tracking Number</p>
                  <p className="text-lg font-bold"># {orderId.toUpperCase()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-green-300 mb-1">Expected Arrival</p>
                  <p className="text-lg font-bold text-[#C5A059]">Feb 22, 2026</p>
                </div>
              </div>

              {/* Timeline Container */}
              <div className="border border-gray-100 border-t-0 p-8 md:p-12 relative">
                <div className="space-y-12">
                  {trackingSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-6 relative group">
                      {/* Vertical Connector Line */}
                      {idx !== trackingSteps.length - 1 && (
                        <div className={`absolute left-[19px] top-10 w-[2px] h-12 ${step.completed ? 'bg-black' : 'bg-gray-200'}`}></div>
                      )}

                      {/* Icon Circle */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-colors ${step.completed ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {step.icon}
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-1 justify-between items-start pt-1">
                        <div>
                          <h4 className={`text-sm font-bold uppercase tracking-widest mb-1 ${step.completed ? 'text-black' : 'text-gray-400'}`}>{step.status}</h4>
                          <p className="text-xs text-gray-500 font-light">{step.completed ? 'Successfully updated' : 'Pending update'}</p>
                        </div>
                        <div className="text-right">
                          <p className={`text-[10px] font-bold uppercase tracking-widest ${step.completed ? 'text-black' : 'text-gray-300'}`}>{step.date}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{step.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
                   <Link to="/view-all" className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:text-[#C5A059] transition-colors">
                      Continue Shopping <ChevronRight size={16} />
                   </Link>
                </div>
              </div>
            </div>
          ) : (
             <div className="text-center py-10 opacity-30">
                <Package size={80} className="mx-auto mb-4" strokeWidth={0.5} />
                <p className="text-xs uppercase tracking-widest">Enter a valid ID to begin tracking</p>
             </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default TrackOrder;