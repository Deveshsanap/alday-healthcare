import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, ShoppingBag, Star } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Success = () => {
  const { width, height } = useWindowSize();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate a random order number
  const orderId = `ALDAY-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
     
      
      {/* Celebration Confetti */}
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        recycle={false}
        colors={['#2B4C3B', '#C5A059', '#12221A', '#F9F5F1']}
      />

      <main className="flex-1 flex items-center justify-center py-20 px-6 mt-16">
        <div className="max-w-2xl w-full text-center">
          
          {/* Success Icon */}
          <div className="mb-8 relative inline-block">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <div className="absolute -top-2 -right-2 bg-[#C5A059] text-white p-2 rounded-full animate-pulse">
              <Star size={16} fill="currentColor" />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-500 mb-8 font-light">
            Thank you for choosing <span className="font-bold text-black">ALDAY HEALTH</span>. 
            Your journey to clinical efficacy starts now.
          </p>

          {/* Order Details Card */}
          <div className="bg-[#F9F9F9] border border-gray-100 rounded-sm p-8 mb-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Package size={120} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Order Number</p>
                <p className="text-lg font-bold text-black">{orderId}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Estimated Delivery</p>
                <p className="text-lg font-bold text-black">3 - 5 Business Days</p>
              </div>
              <div className="md:col-span-2 border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  A confirmation email has been sent to your registered address. 
                  You can track your order status in your account dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/account" 
              className="flex-1 bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
            >
              Track Order <ArrowRight size={16} />
            </Link>
            <Link 
              to="/view-all" 
              className="flex-1 border border-black text-black px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} /> Keep Shopping
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Success;