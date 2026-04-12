import React from 'react';
import { Droplets, ShieldCheck, Leaf } from 'lucide-react';
import { pressLogos } from '../data'; 

const SocialProof = () => {
  return (
    <div className="bg-[#FBFBFB] overflow-hidden"> 
      
      {/* 1. CELEBS FAVORITE */}
      <section className="py-16 md:py-24 text-center">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-8 md:mb-12">
          Celebs Favorite
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-10 md:mb-12 px-4">
          {[1,2,3,4,5].map((i) => (
            <div 
              key={i} 
              className={`rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-500 ${
                i === 3 
                  ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-[#C5A059] scale-110 shadow-xl' 
                  : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border-transparent opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt={`Celeb ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 relative mt-4">
          {/* Responsive decorative quote mark */}
          <span className="text-5xl md:text-8xl text-gray-200 font-serif absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 -z-10 leading-none">
            “
          </span>
          <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-6 relative z-10 font-light px-4 md:px-0">
            The wide range of products available in the personal care segment confuses consumers. 
            I am happy to be the face of this home grown brand that is making it easier 
            for consumers to choose 100% natural products with a zero dilution promise.
          </p>
          <p className="font-bold text-gray-900 uppercase tracking-[0.2em] text-[10px] md:text-xs">
            — Vaani Kapoor
          </p>
        </div>
      </section>

      {/* 2. INFINITE SCROLLING PRESS LOGOS */}
      {/* Added internal CSS animation for foolproof infinite scrolling */}
      <style>
        {`
          @keyframes slideLogos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logo-scroll {
            animation: slideLogos 30s linear infinite;
            width: max-content;
          }
          .logo-wrapper:hover .animate-logo-scroll {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="border-y border-gray-100 bg-white py-10 md:py-16 relative flex overflow-hidden logo-wrapper">
        <div className="flex animate-logo-scroll">
          
          {/* Set 1: Original List */}
          <div className="flex items-center px-10 gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {pressLogos.map((logo, idx) => (
               <h3 key={`set1-${idx}`} className={`text-2xl md:text-4xl whitespace-nowrap font-bold text-gray-800 ${logo.style}`}>
                 {logo.name}
               </h3>
             ))}
          </div>

          {/* Set 2: Duplicate List (For Seamless Loop) */}
          <div className="flex items-center px-10 gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" aria-hidden="true">
             {pressLogos.map((logo, idx) => (
               <h3 key={`set2-${idx}`} className={`text-2xl md:text-4xl whitespace-nowrap font-bold text-gray-800 ${logo.style}`}>
                 {logo.name}
               </h3>
             ))}
          </div>

        </div>
      </div>

      {/* 3. BRAND VALUES */}
      <div className="py-16 md:py-24 bg-[#FBFBFB]">
        <div className="text-center mb-12 md:mb-16">
           <span className="text-[10px] md:text-xs font-bold text-[#C5A059] uppercase tracking-[0.2em] mb-3 md:mb-4 block">Our Promise</span>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gray-900">Brand Values</h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-6 text-center">
          
          <div className="flex flex-col items-center group">
            <div className="mb-5 md:mb-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-500 shadow-sm">
              <Droplets strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8 text-gray-900 group-hover:text-white transition-colors duration-500"/>
            </div>
            <h4 className="font-bold uppercase tracking-wider mb-2 md:mb-3 text-base md:text-lg">Transparency</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs font-light">
              We believe in declaring all our ingredients upfront, so you know exactly what's inside the product.
            </p>
          </div>
          
          <div className="flex flex-col items-center group">
             <div className="mb-5 md:mb-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-500 shadow-sm">
              <Leaf strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8 text-gray-900 group-hover:text-white transition-colors duration-500"/>
            </div>
            <h4 className="font-bold uppercase tracking-wider mb-2 md:mb-3 text-base md:text-lg">Results</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs font-light">
              Made with super potent ingredients at required levels for high-grade clinical performance.
            </p>
          </div>

          <div className="flex flex-col items-center group">
             <div className="mb-5 md:mb-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-black transition-colors duration-500 shadow-sm">
              <ShieldCheck strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8 text-gray-900 group-hover:text-white transition-colors duration-500"/>
            </div>
            <h4 className="font-bold uppercase tracking-wider mb-2 md:mb-3 text-base md:text-lg">Safety</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xs font-light">
              Our products are made with a high percentage of natural ingredients, without any harmful chemicals.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SocialProof;