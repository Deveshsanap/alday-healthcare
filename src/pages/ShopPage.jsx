import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Change 'lucide-center' to 'lucide-react'
import { X, Filter, ChevronDown, Check, Heart, Eye, ArrowRight, ShoppingBag } from 'lucide-react';
import { products } from '../data'; 
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ShopPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Context Hooks
  const { addToCart, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // --- STATES ---
  const [category, setCategory] = useState("All");
  const [sortType, setSortType] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  
  // UX States
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMsg, setToastMsg] = useState(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- 1. INITIALIZATION (Sync URL Params) ---
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    
    const catParam = params.get('cat');
    if (catParam) {
      const formattedCat = catParam.charAt(0).toUpperCase() + catParam.slice(1);
      setCategory(formattedCat);
    }

    const searchParam = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
      setCategory("All"); 
    }
  }, [location]);

  // --- 2. THE HIGH-PERFORMANCE FILTERING ENGINE ---
  // Using useMemo prevents the "lag" by caching results and only recalculating when filters change.
  const filteredData = useMemo(() => {
    if (!products) return [];

    let result = [...products];

    // Search Filter
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Category Filter
    if (category !== "All" && !searchQuery) {
      result = result.filter(p => {
        const prodCat = p.category || p.concern || ""; 
        return prodCat.toLowerCase().includes(category.toLowerCase());
      });
    }

    // Price Filter
    result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

    // Sorting Engine
    if (sortType === "low-high") result.sort((a, b) => a.price - b.price);
    else if (sortType === "high-low") result.sort((a, b) => b.price - a.price);
    else if (sortType === "a-z") result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortType === "z-a") result.sort((a, b) => b.name.localeCompare(a.name));

    return result;
  }, [category, sortType, searchQuery, priceRange]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // --- HANDLERS ---
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product); 
    setIsCartOpen(true); // Immediate feedback
    showToast(`Added ${product.name} to Cart`);
    if(quickViewProduct) setQuickViewProduct(null);
  };

  const handleToggleWishlist = (product) => {
    toggleWishlist(product);
    showToast(isInWishlist(product.id) ? "Removed from Wishlist" : "Added to Wishlist");
  };

  const resetFilters = () => {
    setCategory("All");
    setSearchQuery("");
    setPriceRange({ min: 0, max: 10000 });
    setSortType("featured");
    navigate('/view-all');
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- TOAST NOTIFICATION --- */}
      {toastMsg && (
        <div className="fixed top-24 right-6 bg-black text-white px-6 py-3 rounded-sm shadow-xl z-[100] animate-fade-in-up flex items-center gap-3">
          <Check size={16} className="text-green-400" />
          <span className="text-sm font-bold uppercase tracking-wide">{toastMsg}</span>
        </div>
      )}

      {/* --- HEADER --- */}
      <section className="bg-[#F8F9FA] py-16 md:py-24 mt-16 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Shop The Collection</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            {searchQuery ? `Results for "${searchQuery}"` : (category === "All" ? "Clinical Formulations" : category)}
          </h1>
          <div className="flex justify-center items-center gap-2 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-black font-bold">Shop</span>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* SIDEBAR FILTERS (Desktop) / DRAWER (Mobile) */}
          <aside className={`fixed inset-0 z-[100] lg:z-10 lg:static bg-white p-6 lg:p-0 transition-transform duration-300 transform ${showMobileFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:w-1/4 lg:block`}>
             <div className="sticky top-24 h-full overflow-y-auto lg:overflow-visible flex flex-col">
                <div className="flex justify-between items-center mb-8 lg:hidden">
                   <span className="text-lg font-bold uppercase tracking-widest">Filters</span>
                   <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button>
                </div>

                <div className="hidden lg:flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
                  <h5 className="font-bold text-sm uppercase tracking-widest">Filters</h5>
                  {(category !== "All" || searchQuery || priceRange.max < 10000) && (
                    <button onClick={resetFilters} className="text-red-500 text-[10px] font-bold uppercase hover:underline">Reset All</button>
                  )}
                </div>

                {/* Categories */}
                <div className="mb-10">
                   <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">Categories</h6>
                   <ul className="space-y-4">
                      {['All', 'Hair Growth', 'Hair Fall', 'Dandruff', 'Skin Brightening', 'Acne Control'].map(cat => (
                        <li key={cat}>
                           <button 
                             onClick={() => {setCategory(cat); setSearchQuery(""); setShowMobileFilters(false); setCurrentPage(1);}}
                             className={`text-sm transition-all text-left w-full ${category === cat ? 'text-[#C5A059] font-bold translate-x-2' : 'text-gray-500 hover:text-black hover:translate-x-1'}`}
                           >
                             {cat}
                           </button>
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Price Filter */}
                <div className="mb-10">
                  <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6">Price Range</h6>
                  <div className="flex items-center gap-3">
                    <input type="number" className="w-full border border-gray-200 rounded-sm py-2 px-3 text-xs outline-none focus:border-black transition-colors" value={priceRange.min} onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})} placeholder="Min" />
                    <span className="text-gray-300">-</span>
                    <input type="number" className="w-full border border-gray-200 rounded-sm py-2 px-3 text-xs outline-none focus:border-black transition-colors" value={priceRange.max} onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})} placeholder="Max" />
                  </div>
                </div>

                <button onClick={resetFilters} className="w-full py-3.5 mt-auto lg:mt-6 border border-gray-900 text-gray-900 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-sm">
                   Reset All Filters
                </button>
             </div>
          </aside>

          {/* PRODUCT GRID AREA */}
          <div className="w-full lg:w-3/4">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
              <button onClick={() => setShowMobileFilters(true)} className="lg:hidden flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-[#F8F9FA] px-4 py-2 rounded-full border border-gray-200">
                <Filter size={14} /> Filter
              </button>
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest hidden lg:block">{filteredData.length} Clinical Essentials Found</span>
              
              <div className="flex items-center gap-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sort By:</label>
                <div className="relative">
                  <select 
                    className="appearance-none bg-transparent text-xs font-bold outline-none cursor-pointer pr-6" 
                    value={sortType} 
                    onChange={(e) => {setSortType(e.target.value); setCurrentPage(1);}}
                  >
                    <option value="featured">Featured</option>
                    <option value="low-high">Price: Low-High</option>
                    <option value="high-low">Price: High-Low</option>
                    <option value="a-z">Name: A-Z</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 min-h-[600px]"> 
              {currentItems.length > 0 ? (
                currentItems.map((product) => (
                  <div className="flex flex-col group/card h-full" key={product.id}>
                    {/* Image Area with Performance Tweaks */}
                    <div className="relative mb-5 bg-[#F9F9F9] aspect-[4/5] overflow-hidden rounded-sm group-hover/card:shadow-xl transition-all duration-500">
                      <div className="absolute top-3 right-3 z-20 flex flex-col gap-2 translate-x-10 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300">
                         <button onClick={() => handleToggleWishlist(product)} className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors">
                            <Heart size={16} fill={isInWishlist(product.id) ? "#EF4444" : "none"} className={isInWishlist(product.id) ? "text-red-500" : ""} />
                         </button>
                         <button onClick={() => setQuickViewProduct(product)} className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors">
                            <Eye size={16} />
                         </button>
                      </div>
                      <Link to={`/product/${product.id}`} className="block h-full">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/card:scale-110 mix-blend-multiply" 
                          loading="lazy" // Optimized Loading
                          decoding="async" // High Performance
                        />
                      </Link>
                      {product.sale && (
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-black px-2.5 py-1 uppercase tracking-widest shadow-sm">Sale</span>
                      )}
                    </div>

                    {/* Info Area */}
                    <div className="text-center flex flex-col flex-1 px-2">
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{product.vendor || "ALDAY"}</p>
                        <Link to={`/product/${product.id}`} className="block group-hover/card:text-[#C5A059] transition-colors mb-2">
                            <h6 className="text-sm md:text-base font-bold text-gray-900 leading-snug line-clamp-1">{product.name}</h6>
                        </Link>
                        <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-4">{product.category || product.concern}</p>
                        
                        <div className="flex justify-center items-center gap-3 mb-6 mt-auto">
                            {product.mrp && product.mrp > product.price && (
                              <span className="text-gray-400 text-xs line-through font-light">₹{product.mrp}</span>
                            )}
                            <span className="text-base md:text-lg font-black text-gray-900">₹{product.price}</span>
                        </div>
                        
                        <button 
                           onClick={() => handleAddToCart(product)} 
                           className="w-full bg-black text-white py-3.5 uppercase text-[10px] font-bold tracking-[0.2em] hover:bg-[#C5A059] transition-all duration-300 rounded-sm flex items-center justify-center gap-2 shadow-sm"
                        >
                          <ShoppingBag size={14} /> Add To Cart
                        </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-24 bg-gray-50 rounded-sm border border-dashed border-gray-200">
                  <h5 className="font-bold text-lg mb-2">No results found</h5>
                  <p className="text-sm text-gray-500 mb-8">Try adjusting your filters or searching for something else.</p>
                  <button onClick={resetFilters} className="bg-black text-white px-10 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest">Clear All Filters</button>
                </div>
              )}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-20 gap-3">
                 {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => {setCurrentPage(i + 1); window.scrollTo({top: 400, behavior: 'smooth'});}} 
                      className={`w-10 h-10 rounded-full border text-xs font-bold transition-all duration-300 ${currentPage === i + 1 ? 'bg-black text-white border-black shadow-lg scale-110' : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'}`}
                    >
                      {i + 1}
                    </button>
                 ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setQuickViewProduct(null)}>
           <div className="bg-white w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-black hover:text-white transition-all" onClick={() => setQuickViewProduct(null)}>
                 <X size={20} />
              </button>
              
              <div className="w-full md:w-1/2 bg-[#FBFBFB] flex items-center justify-center p-8">
                 <img src={quickViewProduct.image} alt={quickViewProduct.name} className="max-w-full max-h-[400px] object-contain mix-blend-multiply transition-transform duration-1000 hover:scale-105" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto flex flex-col justify-center">
                 <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.3em] mb-4 block">{quickViewProduct.category || "Hair Care"}</span>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">{quickViewProduct.name}</h2>
                 <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed font-light">{quickViewProduct.description || "Experience the potency of clinical nutrition formulations for your daily care routine."}</p>
                 
                 <div className="flex items-center gap-5 mb-10">
                    <span className="text-3xl font-black text-gray-900">₹{quickViewProduct.price}</span>
                    {quickViewProduct.mrp && <span className="text-gray-400 line-through text-lg">₹{quickViewProduct.mrp}</span>}
                 </div>
                 
                 <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button onClick={() => handleAddToCart(quickViewProduct)} className="flex-1 bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all shadow-lg rounded-sm">Add To Bag</button>
                    <button onClick={() => navigate(`/product/${quickViewProduct.id}`)} className="flex-1 border border-gray-200 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-black transition-all flex items-center justify-center gap-2 rounded-sm">Full Details <ArrowRight size={16}/></button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;