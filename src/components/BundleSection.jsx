import React, { useState } from 'react';
import { ShoppingBag, Minus, Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bundles } from '../data';
import { useCart } from '../context/CartContext'; 

const BundleSection = () => {
  // 1. Destructure setIsCartOpen to automatically slide out the cart on click
  const { addToCart, setIsCartOpen } = useCart();

  // Initialize state dynamically based on the number of bundles
  const [quantities, setQuantities] = useState(
    bundles.reduce((acc, bundle) => ({ ...acc, [bundle.id]: 1 }), {})
  );

  // Helper to update quantity for a specific bundle ID
  const updateQty = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change), // Prevents dropping below 1
    }));
  };

  // 2. FULLY FUNCTIONAL ADD TO CART HANDLER
  const handleAddBundleToCart = (bundle) => {
    const productToAdd = {
      id: bundle.id,
      name: bundle.title,
      price: bundle.price,
      image: bundle.image,
      category: "Bundle"
    };
    
    addToCart(productToAdd, quantities[bundle.id]);
    setIsCartOpen(true); // Gives the user immediate visual feedback
  };

  return (
    // Responsive vertical padding
    <section className="py-16 md:py-24 bg-white select-none">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {bundles.map((bundle, index) => (
          <div 
            key={bundle.id} 
            // Alternating Layout Logic with responsive gaps and margins
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-20 mb-20 md:mb-32 last:mb-0 border-b last:border-0 border-gray-100 pb-16 md:pb-20 last:pb-0`}
          >
            
            {/* Image Container - Fluid on mobile, fixed height on desktop */}
            <div className="w-full md:w-1/2 relative bg-[#F9F9F9] rounded-xl overflow-hidden aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center p-6 md:p-8 group">
              <img 
                src={bundle.image} 
                alt={bundle.title} 
                className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              />
              {bundle.saveTag && (
                <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-red-600 text-white text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-1 uppercase tracking-wider z-10">
                  {bundle.saveTag}
                </span>
              )}
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className={`font-bold tracking-widest uppercase text-[10px] md:text-xs mb-2 block ${bundle.badgeColor || 'text-[#C5A059]'}`}>
                {bundle.badge}
              </span>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-4 md:mb-6 text-black leading-tight">
                {bundle.title}
              </h2>
              
              <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8 leading-relaxed">
                {bundle.subtitle}
              </p>

              {/* Clickable Product List inside the Bundle */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {bundle.items.map((item, idx) => (
                  <Link 
                    key={idx} 
                    to="/view-all" 
                    className="flex items-center gap-3 md:gap-4 p-2.5 md:p-3 rounded-lg border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all group/item"
                  >
                    {/* Small Product Image */}
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white border border-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    
                    {/* Details - truncate prevents text wrapping on tiny screens */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs md:text-sm font-bold text-gray-900 group-hover/item:text-[#C5A059] transition-colors flex items-center gap-1.5 md:gap-2 truncate">
                        {item.name} <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all flex-shrink-0"/>
                      </h4>
                      <p className="text-[10px] md:text-xs text-gray-500">{item.size}</p>
                    </div>
                    
                    {/* Price */}
                    <span className="text-xs md:text-sm font-bold text-gray-900 flex-shrink-0 whitespace-nowrap">{item.price}</span>
                  </Link>
                ))}
              </div>

              {/* Add to Cart Actions */}
              <div className="flex gap-3 md:gap-4 h-[44px] md:h-12">
                
                {/* Responsive Quantity Selector */}
                <div className="flex items-center border border-gray-300 w-24 md:w-32 justify-between px-3 md:px-4 bg-white rounded-sm shrink-0">
                  <button onClick={() => updateQty(bundle.id, -1)} className="text-gray-500 hover:text-black py-2"><Minus size={14} className="md:w-4 md:h-4" /></button>
                  <span className="font-bold text-xs md:text-sm">{quantities[bundle.id]}</span>
                  <button onClick={() => updateQty(bundle.id, 1)} className="text-gray-500 hover:text-black py-2"><Plus size={14} className="md:w-4 md:h-4" /></button>
                </div>
                
                {/* Main Add Button */}
                <button 
                  onClick={() => handleAddBundleToCart(bundle)}
                  className="flex-1 bg-black text-white flex items-center justify-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-lg rounded-sm"
                >
                  <ShoppingBag size={14} className="md:w-4 md:h-4 hidden sm:block" />
                  <span className="truncate">Add Bundle • ₹{(bundle.price * quantities[bundle.id]).toLocaleString()}</span>
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default BundleSection;