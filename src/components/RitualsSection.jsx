import React from 'react';
import { ritualKits } from '../data'; 
import { useCart } from '../context/CartContext'; 

const RitualsSection = () => {
  // Destructure setIsCartOpen for instant feedback
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = (e, kit) => {
    e.preventDefault();
    const productToAdd = {
      ...kit,
      name: kit.name || kit.title,
      price: typeof kit.price === 'string' ? parseFloat(kit.price.replace(/[^\d.-]/g, '')) : kit.price,
      category: "Ritual Kit" // Explicitly define category
    };
    
    addToCart(productToAdd);
    setIsCartOpen(true); // Auto-open cart drawer
  };

  return (
    // Responsive background & padding
    <section className="bg-[#F8F9FA] py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* --- RESPONSIVE HEADER --- */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em] mb-3 block">
            Curated Regimens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
            Complete Rituals
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-light">
            Science-backed regimens for faster, more visible results.
          </p>
        </div>

        {/* --- RESPONSIVE GRID --- */}
        {/* 1 Column on Mobile/Tablet | 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          
          {ritualKits.map((kit, index) => (
            <div 
              key={index} 
              // flex-col on mobile, flex-row on md+
              className="bg-white p-5 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-300 group"
            >
              
              {/* Image Side */}
              <div className="w-full sm:w-[45%] md:w-1/2 relative bg-gray-50 aspect-square flex items-center justify-center rounded-sm overflow-hidden flex-shrink-0">
                <img 
                  src={kit.image} 
                  alt={kit.title} 
                  className="max-h-[85%] object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Save Badge */}
                {kit.save && (
                  <span className="absolute top-3 left-3 bg-black text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 z-10 shadow-sm">
                    {kit.save}
                  </span>
                )}
              </div>

              {/* Text Side */}
              <div className="w-full sm:w-[55%] md:w-1/2 flex flex-col justify-center text-center sm:text-left">
                
                {/* Dynamic Subtitle/Tag if it exists in data, otherwise fallback to Brand Name */}
                <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1.5 md:mb-2">
                  {kit.vendor || "ALDAY"}
                </p>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-snug group-hover:text-[#C5A059] transition-colors">
                  {kit.title}
                </h3>
                
                {/* Description Snippet (Optional: if your data has descriptions, this looks great) */}
                {kit.desc && (
                   <p className="text-xs md:text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed font-light">
                     {kit.desc}
                   </p>
                )}

                {/* Price Block */}
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-5 md:mb-6 mt-auto">
                  {kit.mrp && (
                    <span className="text-xs md:text-sm text-gray-400 line-through font-light">
                      {typeof kit.mrp === 'number' ? `₹${kit.mrp}` : kit.mrp}
                    </span>
                  )}
                  <span className="text-base md:text-lg font-black text-gray-900">
                    {typeof kit.price === 'number' ? `₹${kit.price}` : kit.price}
                  </span>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={(e) => handleAddToCart(e, kit)}
                  className="w-full bg-black text-white py-3 md:py-3.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors rounded-sm shadow-md flex items-center justify-center gap-2"
                >
                  Add Kit To Cart
                </button>
              </div>

            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default RitualsSection;