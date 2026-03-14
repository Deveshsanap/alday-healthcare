import React, { useState, useEffect } from 'react';
import { ChevronRight, X } from 'lucide-react';

const messages = [
  "FREE SHIPPING ON ORDERS ABOVE ₹999",
  "BUY 2 GET 1 FREE ON ALL OIL SHOTS",
  "100% NATURAL, CHEMICAL-FREE INGREDIENTS"
];

const NotificationBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-[#2C483F] text-white h-10 flex items-center justify-center relative overflow-hidden z-50">
      
      {/* The Text Container */}
      <div 
        className={`transition-all duration-500 ease-in-out transform flex items-center gap-2 cursor-pointer
          ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
        `}
      >
        <p className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">
          {messages[currentIndex]}
        </p>
        
        {/* 'Shop Now' arrow */}
        <ChevronRight size={14} className="hidden sm:block" />
      </div>

      {/* Close button (Optional - enables user to dismiss the bar) */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default NotificationBar;