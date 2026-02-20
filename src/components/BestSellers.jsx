import React from 'react';
import { ShoppingCart, Eye, Heart, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data'; 
import { useCart } from '../context/CartContext'; 
import { useWishlist } from '../context/WishlistContext';

const BestSellers = () => {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart(); 
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Get exactly 4 products
  const bestSellers = products.slice(0, 4);

  // Assign custom badges
  const getBadgeText = (index) => {
    const badges = ['BEST SELLER', 'HEART HEALTH', 'ACTIVE ACNE', 'SUMMER'];
    return badges[index];
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault(); 
    e.stopPropagation();
    addToCart(product);
    setIsCartOpen(true);
  };

  const handleWishlistClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    // Responsive padding: smaller on mobile, larger on desktop
    <div className="bg-[#FBFBFB] py-16 md:py-24 relative select-none">
      
      {/* --- RESPONSIVE HEADER --- */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-8 md:mb-12">
        {/* Stacks on mobile, aligns side-by-side on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-2 tracking-tight">
              Curated Best Sellers
            </h2>
            <p className="text-sm md:text-base text-gray-500 font-light">Curated essentials for your daily routine.</p>
          </div>
          <Link 
            to="/view-all" 
            className="border border-gray-300 text-gray-900 px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-colors w-full md:w-auto text-center mt-2 md:mt-0"
          >
            View All
          </Link>
        </div>
      </div>

      {/* --- RESPONSIVE GRID --- */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Mobile: 2 columns, small gap
          Tablet (md): 2 columns, standard gap (prevents squishing on iPad)
          Desktop (lg): 4 columns 
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {bestSellers.map((product, index) => (
            <BestSellerCard 
              key={product.id} 
              product={product} 
              badge={getBadgeText(index)}
              navigate={navigate} 
              handleAddToCart={handleAddToCart}
              handleWishlistClick={handleWishlistClick}
              isInWishlist={isInWishlist}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

// --- EXTRACTED COMPONENT ---
const BestSellerCard = ({ product, badge, navigate, handleAddToCart, handleWishlistClick, isInWishlist }) => {
  const isSaved = isInWishlist(product.id);

  return (
    <div className="w-full bg-transparent flex flex-col group/card h-full">
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden block rounded-sm flex-shrink-0">
        
        {/* Responsive Badge */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-white text-black text-[7px] md:text-[9px] font-black uppercase tracking-widest px-2 py-1 z-20 shadow-sm max-w-[70%] truncate">
          {badge}
        </div>

        {/* Responsive Heart Icon */}
        <button 
          onClick={(e) => handleWishlistClick(e, product)}
          className="absolute top-2 right-2 md:top-3 md:right-3 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center z-20 shadow-sm transition-transform hover:scale-110"
        >
          <Heart size={12} className={`md:w-3.5 md:h-3.5 ${isSaved ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover/card:scale-105 pointer-events-none"
        />

        {/* Hover Action Buttons (Hidden on touch devices, visible on desktop hover) */}
        <div className="hidden md:flex absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 items-center justify-center gap-4 z-10">
           <button 
              onClick={(e) => { e.preventDefault(); navigate(`/product/${product.id}`); }} 
              className="bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors transform translate-y-4 group-hover/card:translate-y-0 duration-300"
           >
              <Eye size={16} />
           </button>
           <button 
              onClick={(e) => handleAddToCart(e, product)} 
              className="bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors transform translate-y-4 group-hover/card:translate-y-0 duration-500"
           >
              <ShoppingCart size={16} />
           </button>
        </div>
      </Link>

      {/* Details Container - flex-1 pushes button to bottom evenly */}
      <div className="pt-3 flex-1 flex flex-col">
        {/* Stars */}
        <div className="flex items-center gap-0.5 md:gap-1 mb-1.5">
           {[...Array(5)].map((_, i) => (
             <Star key={i} size={10} className="text-[#FFC107] fill-[#FFC107]" />
           ))}
           <span className="text-[9px] md:text-[10px] text-gray-400 ml-1">(42)</span>
        </div>

        {/* Vendor */}
        <p className="text-[8px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1 line-clamp-1">
          {product.vendor || "ALDAY"}
        </p>

        {/* Product Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-snug mb-2 hover:text-[#C5A059] transition-colors line-clamp-2 md:line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          {product.price < product.mrp && (
            <span className="text-[10px] md:text-xs text-gray-400 line-through font-light">₹{product.mrp}</span>
          )}
          <span className="text-xs md:text-sm font-black text-gray-900">₹{product.price}</span>
        </div>

        {/* Add To Cart Button - Forced to bottom of card */}
        <button 
           onClick={(e) => handleAddToCart(e, product)} 
           className="w-full mt-auto bg-black text-white py-2 md:py-3 text-[9px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all rounded-sm"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default BestSellers;