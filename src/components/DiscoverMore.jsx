import React, { useState, useEffect } from 'react';
import { ShoppingCart, Eye, Heart, Star, RefreshCw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data'; 
import { useCart } from '../context/CartContext'; 
import { useWishlist } from '../context/WishlistContext';

const DiscoverMore = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [addingState, setAddingState] = useState({}); // Tracks loading state per product
  
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Initial Load
  useEffect(() => {
    shuffleProducts();
  }, []);

  // Premium Shuffle Function with fade animation
  const shuffleProducts = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, 4));
      setIsRefreshing(false);
    }, 400); // 400ms delay to allow CSS fade-out to complete
  };

  // Premium Add to Cart with Micro-Interaction
  const handleAddToCart = (e, product) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    // Set this specific product's button to "loading"
    setAddingState(prev => ({ ...prev, [product.id]: true }));
    
    // Artificial delay for a premium, processed feel
    setTimeout(() => {
      addToCart(product);
      setIsCartOpen(true);
      setAddingState(prev => ({ ...prev, [product.id]: false }));
    }, 600); 
  };

  const handleWishlistClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  if (randomProducts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FBFBFB] border-t border-gray-100 select-none overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* --- PREMIUM HEADER --- */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative">
          <span className="text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em] mb-3 block">
            Curated For You
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight flex items-center justify-center gap-4">
            Discover More
          </h2>
          <div className="w-16 md:w-20 h-[2px] bg-[#C5A059] mt-6"></div>
          
          {/* Shuffle Button - Positioned absolutely on desktop, relatively on mobile */}
          <button 
            onClick={shuffleProducts}
            disabled={isRefreshing}
            className="mt-6 md:mt-0 md:absolute md:right-0 md:bottom-0 flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors disabled:opacity-50"
          >
            <RefreshCw size={14} className={`${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* --- RESPONSIVE GRID WITH FADE ANIMATION --- */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 transition-opacity duration-500 ease-in-out ${isRefreshing ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
          {randomProducts.map((product) => (
            <div 
              key={product.id} 
              className="w-full bg-white flex flex-col group/card h-full rounded-sm border border-gray-100/50 hover:border-gray-200 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500"
            >
              
              {/* Image Container */}
              <Link to={`/product/${product.id}`} className="relative w-full aspect-[4/5] bg-[#F8F9FA] overflow-hidden block rounded-t-sm flex-shrink-0">
                
                {/* Sale Badge */}
                {product.sale && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-600 text-white text-[7px] md:text-[9px] font-black uppercase tracking-widest px-2 md:px-2.5 py-1 z-20 shadow-sm">
                    Sale
                  </div>
                )}

                {/* Wishlist Heart */}
                <button 
                  onClick={(e) => handleWishlistClick(e, product)}
                  className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center z-20 shadow-sm transition-transform hover:scale-110"
                >
                  <Heart size={14} className={`md:w-3.5 md:h-3.5 transition-colors ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-black"}`} />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-[1.5s] group-hover/card:scale-105 pointer-events-none mix-blend-multiply"
                />

                {/* Desktop Hover Action Buttons */}
                <div className="hidden lg:flex absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 z-10">
                   <button 
                      onClick={(e) => { e.preventDefault(); navigate(`/product/${product.id}`); }} 
                      className="bg-white p-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover/card:translate-y-0 duration-300"
                      title="Quick View"
                   >
                      <Eye size={16} />
                   </button>
                   <button 
                      onClick={(e) => handleAddToCart(e, product)} 
                      disabled={addingState[product.id]}
                      className="bg-white p-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover/card:translate-y-0 duration-500 disabled:opacity-75 disabled:hover:bg-white disabled:hover:text-black"
                      title="Add to Cart"
                   >
                      {addingState[product.id] ? <RefreshCw size={16} className="animate-spin" /> : <ShoppingCart size={16} />}
                   </button>
                </div>
              </Link>

              {/* Details Container */}
              <div className="p-4 md:p-5 flex-1 flex flex-col items-center text-center">
                {/* Stars */}
                <div className="flex items-center gap-0.5 md:gap-1 mb-2.5">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={10} className="text-[#FFC107] fill-[#FFC107] md:w-3 md:h-3" />
                   ))}
                   <span className="text-[9px] md:text-[10px] text-gray-400 ml-1.5">(128)</span>
                </div>

                {/* Vendor / Category */}
                <p className="text-[8px] md:text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1.5">
                  {product.category || "ALDAY"}
                </p>

                {/* Product Title */}
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-snug mb-3 hover:text-[#C5A059] transition-colors line-clamp-2 md:line-clamp-1">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
                  {product.price < product.mrp && (
                    <span className="text-[10px] md:text-xs text-gray-400 line-through font-light">₹{product.mrp}</span>
                  )}
                  <span className="text-xs md:text-sm font-black text-gray-900">₹{product.price}</span>
                </div>

                {/* Interactive Add To Cart Button */}
                <button 
                   onClick={(e) => handleAddToCart(e, product)} 
                   disabled={addingState[product.id]}
                   className="w-full mt-auto bg-transparent border border-gray-200 text-gray-900 py-2.5 md:py-3 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-sm disabled:opacity-75 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {addingState[product.id] ? (
                    <>
                      <RefreshCw size={12} className="animate-spin" /> Adding...
                    </>
                  ) : (
                    "Add To Cart"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 md:mt-16 text-center">
          <Link 
            to="/view-all" 
            className="inline-flex items-center gap-3 border border-gray-900 text-gray-900 px-8 md:px-10 py-3 md:py-3.5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 group"
          >
            Explore Full Collection
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DiscoverMore;