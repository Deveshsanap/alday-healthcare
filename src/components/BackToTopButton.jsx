import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          p-3 rounded-full shadow-2xl transition-all duration-500 ease-in-out
          flex items-center justify-center
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          bg-[#12221A] text-[#C5A059] border border-[#C5A059]/20
          hover:bg-[#C5A059] hover:text-[#12221A] hover:scale-110
        `}
        aria-label="Back to top"
      >
        <ChevronUp size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default BackToTop;