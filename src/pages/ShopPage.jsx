import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Filter, ChevronDown, Check, Heart, Eye, ArrowRight, ShoppingBag } from 'lucide-react';
import { products } from '../data'; 
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ShopPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // --- STATES ---
  const [category, setCategory] = useState("All");
  const [sortType, setSortType] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- 1. SYNC URL PARAMS ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('cat');
    const searchParam = params.get('search');

    if (catParam) setCategory(catParam.charAt(0).toUpperCase() + catParam.slice(1));
    if (searchParam) {
      setSearchQuery(searchParam);
      setCategory("All"); 
    }
  }, [location]);

  // --- 2. THE HIGH-PERFORMANCE FILTERING ENGINE ---
  const filteredData = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (category !== "All" && !searchQuery) {
      result = result.filter(p => {
        const prodCat = p.category || p.concern || ""; 
        return prodCat.toLowerCase().includes(category.toLowerCase());
      });
    }

    result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

    // Sorting
    if (sortType === "low-high") result.sort((a, b) => a.price - b.price);
    else if (sortType === "high-low") result.sort((a, b) => b.price - a.price);
    else if (sortType === "a-z") result.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortType === "z-a") result.sort((a, b) => b.name.localeCompare(a.name));

    return result;
  }, [category, sortType, searchQuery, priceRange]);

  // Pagination Logic
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // --- HANDLERS ---
  const handleAddToCart = (product) => {
    addToCart(product); 
    setIsCartOpen(true);
    setQuickViewProduct(null);
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
      {/* --- PAGE HEADER --- */}
      <div className="bg-[#F8F9FA] py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {searchQuery ? `Results for "${searchQuery}"` : "Our Collection"}
          </h1>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Experience 100% natural nutrition with our zero-dilution clinical formulations.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- SIDEBAR (Desktop) / DRAWER (Mobile) --- */}
          <aside className={`fixed inset-0 z-[100] lg:z-10 lg:static bg-white lg:bg-transparent p-6 lg:p-0 transition-transform lg:w-64 shrink-0 ${showMobileFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="flex justify-between items-center mb-8 lg:hidden">
              <span className="font-bold uppercase tracking-widest">Filters</span>
              <button onClick={() => setShowMobileFilters(false)}><X size={24}/></button>
            </div>

            <div className="sticky top-24 space-y-10">
              {/* Category Filter */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Categories</h4>
                <div className="flex flex-col gap-3">
                  {['All', 'Hair Growth', 'Hair Fall', 'Dandruff', 'Skin Brightening'].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setCategory(cat)}
                      className={`text-left text-sm transition-colors ${category === cat ? 'text-[#C5A059] font-bold' : 'text-gray-500 hover:text-black'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">Price Range</h4>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    className="w-full border border-gray-200 rounded-sm p-2 text-xs outline-none focus:border-black"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                    placeholder="Min"
                  />
                  <span className="text-gray-300">-</span>
                  <input 
                    type="number" 
                    className="w-full border border-gray-200 rounded-sm p-2 text-xs outline-none focus:border-black"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                    placeholder="Max"
                  />
                </div>
              </div>

              <button onClick={resetFilters} className="w-full py-3 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Reset All
              </button>
            </div>
          </aside>

          {/* --- PRODUCT GRID AREA --- */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray-100">
              <button onClick={() => setShowMobileFilters(true)} className="lg:hidden flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Filter size={14} /> Filter
              </button>
              <span className="text-xs text-gray-400 hidden lg:block">{filteredData.length} Products Found</span>
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sort By</span>
                <select 
                  className="text-xs font-bold outline-none bg-transparent cursor-pointer"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="low-high">Price: Low-High</option>
                  <option value="high-low">Price: High-Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12">
              {currentItems.map(product => (
                <div key={product.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] bg-[#FBFBFB] overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button onClick={() => setQuickViewProduct(product)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all">
                        <Eye size={18} />
                      </button>
                      <button onClick={() => handleAddToCart(product)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                    {/* Wishlist */}
                    <button onClick={() => toggleWishlist(product)} className="absolute top-3 right-3 z-10">
                      <Heart size={18} className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"} />
                    </button>
                  </div>

                  <div className="text-center px-2">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{product.vendor || "ALDAY"}</p>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#C5A059] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex justify-center items-center gap-3">
                       {product.mrp > product.price && <span className="text-xs text-gray-400 line-through font-light">₹{product.mrp}</span>}
                       <span className="text-sm font-bold">₹{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-20">
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full text-xs font-bold transition-all ${currentPage === i + 1 ? 'bg-black text-white' : 'border border-gray-200 hover:border-black'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;