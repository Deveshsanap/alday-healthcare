import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp, 
  ShieldCheck, Leaf, Droplet, CheckCircle, Heart, Share2, 
  Truck, Lock, MapPin, Play, X, ZoomIn, Check
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data'; 
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext'; // 1. IMPORT WISHLIST HOOK

const ProductDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  // 2. INITIALIZE CONTEXTS
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  // 1. Find Product & Related
  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);
  const upsellProduct = products.find(p => p.id !== id) || products[0]; // Simple mock upsell

  // 2. Scroll Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 3. States
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('desc');
  const [pincode, setPincode] = useState('');
  const [deliveryMsg, setDeliveryMsg] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [upsellSelected, setUpsellSelected] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
  const [toastMsg, setToastMsg] = useState(null); // Added Toast State

  // 4. Calculations
  const shippingThreshold = 999;
  const mainTotal = product ? product.price * qty : 0;
  const upsellTotal = upsellSelected ? upsellProduct.price : 0;
  const finalTotal = mainTotal + upsellTotal;
  const progress = Math.min((finalTotal / shippingThreshold) * 100, 100);

  // 5. Handlers
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const checkPincode = () => {
    if(pincode.length === 6) setDeliveryMsg("Delivery available! Est: 3-5 Days");
    else setDeliveryMsg("Please enter a valid 6-digit pincode");
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${product.images ? product.images[activeImg] : product.image})`
    });
  };

  // 6. ADD TO CART LOGIC
  const handleAddToCart = () => {
    addToCart(product, qty);
    
    if (upsellSelected) {
      addToCart(upsellProduct, 1);
    }
    showToast(`Added to Cart successfully!`);
  };

  // 7. WISHLIST LOGIC
  const handleToggleWishlist = () => {
    toggleWishlist(product);
    if (isInWishlist(product.id)) {
      showToast("Removed from Wishlist");
    } else {
      showToast("Added to Wishlist");
    }
  };

  if (!product) return <div className="p-20 text-center font-bold">Product Not Found</div>;

  return (
    <div className="bg-white font-sans text-gray-900 pb-20 md:pb-0 relative">
      

      {/* --- TOAST NOTIFICATION --- */}
      {toastMsg && (
        <div className="fixed top-24 right-6 bg-black text-white px-6 py-3 rounded-sm shadow-xl z-[100] animate-fade-in-up flex items-center gap-3">
          <Check size={16} className="text-green-400" />
          <span className="text-sm font-bold uppercase tracking-wide">{toastMsg}</span>
        </div>
      )}

      {/* --- VIDEO MODAL --- */}
      {showVideo && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 animate-fade-in">
           <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 text-white z-10 hover:text-gray-300 transition-colors"><X size={32}/></button>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
                title="Product Video" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
           </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-6 py-6 mt-10">
        
        {/* --- BREADCRUMBS --- */}
        <div className="text-[10px] md:text-xs text-gray-500 mb-6 uppercase tracking-widest flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-black transition-colors">Home</Link> / 
          <Link to={`/view-all?cat=${product.category}`} className="hover:text-black cursor-pointer transition-colors">{product.category || product.concern}</Link> / 
          <span className="text-black font-bold border-b border-black pb-0.5">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT: STICKY GALLERY + ZOOM --- */}
          <div className="lg:sticky lg:top-28 h-fit self-start">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible w-full md:w-20 flex-shrink-0 hide-scrollbar py-1">
                {product.images?.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 md:w-20 md:h-20 border rounded-sm overflow-hidden flex-shrink-0 transition-all ${activeImg === i ? 'border-black ring-1 ring-black opacity-100' : 'border-gray-200 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt="thumb" />
                  </button>
                ))}
              </div>
              
              {/* Main Image with Zoom */}
              <div 
                className="flex-1 bg-[#F9F9F9] rounded-sm relative group aspect-[4/5] md:h-[500px] flex items-center justify-center overflow-hidden cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setZoomStyle({ display: 'none' })}
              >
                 <img 
                   src={product.images ? product.images[activeImg] : product.image} 
                   alt={product.title} 
                   className="max-h-full max-w-full object-contain mix-blend-multiply p-8" 
                 />
                 
                 {/* Zoom Lens Overlay */}
                 <div 
                   className="absolute inset-0 pointer-events-none bg-no-repeat bg-[length:200%] z-20"
                   style={zoomStyle}
                 />

                 {product.sale && (
                   <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider z-10 rounded-sm">Sale</span>
                 )}
                 
                 <div className="absolute top-4 right-4 flex flex-col gap-3 z-30">
                    <button onClick={handleToggleWishlist} className="bg-white p-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-black hover:text-white transition-all">
                      <Heart size={20} fill={isInWishlist(product.id) ? "currentColor" : "none"} className={isInWishlist(product.id) ? "text-red-500" : ""} />
                    </button>
                    <button className="bg-white p-2.5 rounded-full shadow-sm hover:shadow-md hover:bg-black hover:text-white transition-all">
                      <Share2 size={20} />
                    </button>
                 </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="flex flex-col gap-6">
             
             {/* Header */}
             <div>
               <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-500">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-500 underline cursor-pointer hover:text-black transition-colors">{product.reviewCount || 124} Reviews</span>
               </div>
               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-gray-900 mb-2 leading-tight">
                 {product.title || product.name}
               </h1>
               <p className="text-lg text-gray-500 font-light">{product.subtitle || "Zero Dilution Formulation"}</p>
             </div>

             {/* Scarcity Tactic */}
             <div className="text-red-600 text-xs font-bold animate-pulse flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span> Only 4 units left at this price!
             </div>

             {/* Price & Offers */}
             <div className="border-y border-gray-100 py-6">
                <div className="flex items-end gap-3 mb-4">
                   <span className="text-4xl font-black">₹{product.price}</span>
                   {product.mrp && product.mrp > product.price && (
                     <>
                       <span className="text-xl text-gray-400 line-through mb-1">₹{product.mrp}</span>
                       <span className="text-green-700 text-xs font-bold bg-green-50 px-2 py-1 mb-2 rounded-sm uppercase">
                          Save {(100 - (product.price/product.mrp)*100).toFixed(0)}%
                       </span>
                     </>
                   )}
                </div>

                {/* Free Shipping Bar */}
                <div className="bg-gray-50 p-4 rounded-sm mb-6 border border-gray-100">
                   <div className="flex justify-between text-xs font-bold uppercase mb-2">
                      <span className="text-gray-600">{progress < 100 ? `Add ₹${shippingThreshold - finalTotal} for Free Shipping` : "Free Shipping Unlocked!"}</span>
                      <span className="text-[#C5A059]">{Math.round(progress)}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                   </div>
                </div>

                {/* Pincode Checker */}
                <div className="flex gap-2 mb-6">
                   <div className="relative flex-1">
                      <MapPin size={16} className="absolute left-3 top-3.5 text-gray-400"/>
                      <input 
                        type="text" 
                        placeholder="Enter Pincode" 
                        maxLength="6"
                        className="w-full border border-gray-300 rounded-sm py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-black transition-colors"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                   </div>
                   <button onClick={checkPincode} className="text-xs font-bold bg-black text-white px-6 rounded-sm hover:bg-gray-800 transition-colors uppercase tracking-widest">CHECK</button>
                </div>
                {deliveryMsg && <p className={`text-xs font-bold mb-4 flex items-center gap-1 ${deliveryMsg.includes('available') ? 'text-green-600' : 'text-red-600'}`}><Check size={14}/> {deliveryMsg}</p>}

                {/* Frequent Bought Together (Upsell) */}
                <div className="border border-gray-200 p-4 rounded-sm mb-6 bg-gray-50/50 hover:border-gray-300 transition-colors">
                   <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-500">Frequently Bought Together</h4>
                   <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white border border-gray-200 rounded-sm p-1 flex-shrink-0">
                         <img src={upsellProduct.image} className="w-full h-full object-contain" alt="upsell" />
                      </div>
                      <div className="flex-1">
                         <p className="text-sm font-bold line-clamp-1">{upsellProduct.name}</p>
                         <p className="text-xs text-gray-500 mt-0.5">₹{upsellProduct.price} <span className="line-through text-[10px] ml-1">₹{upsellProduct.mrp}</span></p>
                      </div>
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 accent-black cursor-pointer"
                        checked={upsellSelected}
                        onChange={() => setUpsellSelected(!upsellSelected)}
                      />
                   </div>
                </div>

                {/* Add to Cart Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-gray-300 rounded-sm w-full sm:w-32 justify-between px-4 h-12 bg-white">
                      <button onClick={() => setQty(Math.max(1, qty-1))} className="text-gray-500 hover:text-black transition-colors"><Minus size={16}/></button>
                      <span className="font-bold text-sm">{qty}</span>
                      <button onClick={() => setQty(qty+1)} className="text-gray-500 hover:text-black transition-colors"><Plus size={16}/></button>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-black text-white h-12 font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg flex justify-center items-center gap-3 text-xs md:text-sm rounded-sm"
                  >
                      <ShoppingBag size={18} /> Add To Cart - ₹{finalTotal}
                  </button>
                </div>
             </div>

             {/* Feature Icons */}
             <div className="grid grid-cols-3 gap-4">
                <FeatureIcon icon={<ShieldCheck size={20}/>} label="100% Natural" />
                <FeatureIcon icon={<Leaf size={20}/>} label="Vegan Formulation" />
                <FeatureIcon icon={<Droplet size={20}/>} label="Zero Dilution" />
             </div>

             {/* Accordions */}
             <div className="border-t border-gray-200">
                <Accordion title="Description" isOpen={openAccordion==='desc'} onClick={() => setOpenAccordion(openAccordion==='desc'?'':'desc')}>
                   <p className="text-sm text-gray-600 leading-relaxed pb-4">
                     {product.description || "Formulated with clinical precision, this product delivers active ingredients directly to the source for maximum efficacy."}
                   </p>
                </Accordion>
                <Accordion title="How to Use" isOpen={openAccordion==='use'} onClick={() => setOpenAccordion(openAccordion==='use'?'':'use')}>
                   <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 pb-4 marker:text-[#C5A059]">
                     <li>Apply directly to the target area.</li>
                     <li>Massage gently for 3-5 minutes until fully absorbed.</li>
                     <li>Leave overnight for best results. Use daily for clinical efficacy.</li>
                   </ul>
                </Accordion>
             </div>
          </div>
        </div>
      </div>

      {/* --- VIDEO BANNER --- */}
      <section className="w-full h-[400px] md:h-[500px] relative overflow-hidden bg-black flex items-center justify-center cursor-pointer group my-12" onClick={() => setShowVideo(true)}>
         <img 
           src="https://images.unsplash.com/photo-1556228720-191738e4a2e5?auto=format&fit=crop&w=1600&q=80" 
           alt="Banner" 
           className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
         />
         <div className="relative z-10 text-center text-white px-6">
            <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center mb-6 mx-auto group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300 shadow-xl backdrop-blur-sm">
               <Play size={32} fill="currentColor" className="ml-1"/>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-3 drop-shadow-md">Real Results</h2>
            <p className="text-sm font-light tracking-widest uppercase text-gray-300">Watch the efficacy story</p>
         </div>
      </section>

      {/* --- TRANSPARENCY TABLE --- */}
      {product.fullIngredients && (
        <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
           <div className="max-w-[1000px] mx-auto px-6">
              <div className="text-center mb-12">
                 <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.2em] mb-3 block">Pure Ingredients</span>
                 <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-3">Transparency Table</h2>
                 <p className="text-gray-500 text-sm max-w-2xl mx-auto">We declare 100% of our ingredients. No hidden chemicals, no false claims.</p>
              </div>
              <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                       <tr className="border-b border-gray-200 text-[10px] md:text-xs uppercase tracking-widest text-gray-900 font-bold">
                          <th className="py-4 px-6">Ingredient</th>
                          <th className="py-4 px-6 hidden md:table-cell">Source</th>
                          <th className="py-4 px-6">Function</th>
                          <th className="py-4 px-6 text-right">Type</th>
                       </tr>
                    </thead>
                    <tbody>
                       {product.fullIngredients.map((row, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 text-xs md:text-sm text-gray-600 last:border-0 transition-colors">
                             <td className="py-4 px-6 font-bold text-gray-900">{row.name}</td>
                             <td className="py-4 px-6 hidden md:table-cell">{row.source}</td>
                             <td className="py-4 px-6">{row.function}</td>
                             <td className="py-4 px-6 text-right">
                                <span className={`text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider ${row.type === 'Natural' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                   {row.type}
                                </span>
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>
      )}

      {/* --- REVIEWS WITH FILTERS --- */}
      <section className="py-20 bg-white border-t border-gray-100">
         <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-12 text-center">Real Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               {/* Summary */}
               <div className="bg-[#F9F9F9] p-8 text-center rounded-sm h-fit border border-gray-100">
                  <div className="text-6xl font-black text-gray-900 mb-2">{product.rating || "4.8"}</div>
                  <div className="flex justify-center text-yellow-500 mb-4 text-xl">
                     {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Based on {product.reviewCount || 124} Reviews</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-8">
                     {[5,4,3,2,1].map(star => (
                        <button key={star} className="text-xs border border-gray-300 px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors font-medium">
                           {star} ★
                        </button>
                     ))}
                  </div>
                  <button className="w-full bg-black text-white py-4 uppercase text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors rounded-sm">Write a Review</button>
               </div>
               
               {/* List */}
               <div className="md:col-span-2 space-y-6">
                  {[1, 2, 3].map((r) => (
                     <div key={r} className="border border-gray-100 p-6 md:p-8 rounded-sm hover:shadow-sm transition-shadow bg-white">
                        <div className="flex justify-between items-start mb-4">
                           <div className="flex text-yellow-500 text-sm">
                              {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={14} />)}
                           </div>
                           <span className="text-[10px] text-green-700 bg-green-50 px-2 py-1 font-bold uppercase tracking-widest rounded-sm">Verified Purchase</span>
                        </div>
                        <h4 className="font-bold text-base text-gray-900 mb-2">My hair feels amazing!</h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                           "I was skeptical at first, but after 2 weeks I can see real improvement. The zero-dilution formula means you only need a few drops. The smell is a bit strong but natural."
                        </p>
                        <div className="flex items-center gap-2 pt-4 border-t border-gray-50">
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-900">Sneha K.</span>
                           <CheckCircle size={14} className="text-[#C5A059]" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- RELATED PRODUCTS --- */}
      <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
         <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
               {relatedProducts.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id} className="bg-white p-4 md:p-5 rounded-sm hover:shadow-xl transition-shadow border border-transparent hover:border-gray-100 group">
                     <div className="aspect-[4/5] bg-[#F9F9F9] mb-5 overflow-hidden relative rounded-sm">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply p-4"/>
                     </div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{item.concern || "Care"}</p>
                     <h3 className="font-bold text-sm mb-2 truncate group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
                     <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-gray-900">₹{item.price}</span>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* --- MOBILE STICKY BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 flex items-center gap-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
         <div className="flex-1">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest truncate">{product.name}</p>
            <p className="text-lg font-black leading-none mt-1">₹{finalTotal}</p>
         </div>
         <button 
           onClick={handleAddToCart} 
           className="bg-black text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs rounded-sm shadow-md active:scale-95 transition-transform"
         >
            Add To Cart
         </button>
      </div>
      
    </div>
  );
};

// Sub-components
const FeatureIcon = ({ icon, label }) => (
   <div className="flex flex-col items-center justify-center gap-3 p-4 border border-gray-200 rounded-sm bg-gray-50/50 hover:bg-white transition-colors hover:shadow-sm">
      <span className="text-[#C5A059]">{icon}</span>
      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-600 text-center leading-tight">{label}</span>
   </div>
);

const Accordion = ({ title, isOpen, onClick, children }) => (
  <div className="border-b border-gray-100">
    <button onClick={onClick} className="w-full flex justify-between items-center py-5 text-left group">
      <span className="font-bold uppercase text-xs tracking-widest text-gray-900 group-hover:text-[#C5A059] transition-colors">{title}</span>
      <div className={`text-gray-400 group-hover:text-[#C5A059] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
         <ChevronDown size={16} />
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
      {children}
    </div>
  </div>
);

export default ProductDetails;