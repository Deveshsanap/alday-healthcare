import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { reviews } from '../data'; 

const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      
      {/* Hide native scrollbar for mobile swipeable menu */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* --- RESPONSIVE HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight max-w-md">
            Real Reviews from Real Customers
          </h2>
          
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-wide">
             <div className="flex text-green-500">
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
             </div>
             <span className="text-gray-600 border-l border-gray-300 pl-3">8,190 Reviews</span>
          </div>
        </div>

        {/* --- RESPONSIVE REVIEW CARDS --- */}
        {/* Mobile/Tablet: Horizontal scroll | Desktop: 3-column Grid */}
        <div className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible hide-scrollbar snap-x snap-mandatory pb-4 lg:pb-0">
          
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              // Fixed width for mobile swiping, full width for grid cells
              className="w-[85vw] sm:w-[320px] lg:w-full flex-shrink-0 snap-start p-5 md:p-8 bg-[#FBFBFB] border border-gray-100 rounded-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
               {/* Star Rating */}
               <div className="flex text-green-500 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
               </div>
               
               {/* Review Title */}
               <h3 className="font-bold text-sm md:text-base text-gray-900 mb-4 leading-snug">
                 "{review.title}"
               </h3>
               
               {/* Body Content */}
               <div className="flex gap-4 md:gap-5 mb-6 flex-1">
                 {/* Product Thumbnail Placeholder */}
                 <div className="w-14 h-16 md:w-16 md:h-20 bg-gray-200 flex-shrink-0 rounded-sm overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200" 
                      alt="Product" 
                      className="w-full h-full object-cover mix-blend-multiply opacity-90" 
                    />
                 </div>
                 <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed italic">
                   "{review.body}"
                 </p>
               </div>

               {/* Footer: Name & Verified Badge */}
               <div className="flex flex-wrap justify-between items-center mt-auto pt-4 md:pt-5 border-t border-gray-200 gap-2">
                 <div className="flex flex-col">
                   <span className="text-[11px] md:text-xs font-bold text-gray-900 tracking-wide">{review.name}</span>
                   <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">on {review.product}</span>
                 </div>
                 <span className="flex items-center text-[9px] md:text-[10px] uppercase tracking-wider text-green-700 font-bold bg-green-50 px-2.5 py-1.5 rounded-full border border-green-100/50">
                   <CheckCircle size={12} className="mr-1.5" strokeWidth={2.5}/> Verified
                 </span>
               </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;