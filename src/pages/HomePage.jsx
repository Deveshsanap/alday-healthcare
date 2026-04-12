import React from 'react';

// Components
import Hero from '../components/Hero';
import ShopByConcern from '../components/ShopByConcern';
import BestSellers from '../components/BestSellers'; // <-- Added new component
import ProductSection from '../components/ProductSection';
import BundleSection from '../components/BundleSection';
import IngredientSpotlight from '../components/IngredientSpotlight';
import BlogSection from '../components/BlogSection';
import SocialProof from '../components/SocialProof';
import Reviews from '../components/Reviews';
import DiscoverMore from '../components/DiscoverMore';

const HomePage = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-[#FBFBFB]">
      
      {/* 1. Hero Section: The Hook */}
      <Hero />
      
      {/* 2. Shop By Concern: Immediate navigation based on user's pain points */}
      <div className="pt-20 pb-10">
        <ShopByConcern />
      </div>

      {/* 3. Best Sellers: High conversion, curated grid (with Wishlist & Badges) */}
      <BestSellers />
      
      {/* 4. Brand Philosophy Statement: Upgraded to look premium and clinical */}
      <section className="bg-[#12221A] text-white py-24 px-6 text-center mt-12 mb-12 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">
            The Alday Promise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight tracking-tight">
            Better Ingredients.<br className="md:hidden" /> Better Results.
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg font-light max-w-2xl mx-auto">
            We meticulously select high-performance, natural ingredients for our products, 
            ensuring they are free from harmful chemicals, parabens, and synthetic fillers. 
            Pure clinical nutrition for your hair and skin.
          </p>
        </div>
      </section>

      {/* 5. Just Arrived (ProductSection): Infinite smooth auto-scroll to show catalog depth */}
      <ProductSection />
      
      {/* 6. Bundles & Rituals: Upselling complementary products */}
      <BundleSection />

      {/* 7. Ingredient Education: Building authority and showing the science */}
      <div className="bg-white py-16">
        <IngredientSpotlight />
      </div>
      <DiscoverMore />

      {/* 8. Trust & Reviews: Consolidating social proof before the footer */}
      <div className="py-12 bg-[#FBFBFB]">
        <Reviews />
      </div>
      
      <SocialProof />
      
      {/* 9. Blog/Articles: SEO and lifestyle integration */}
      <div className="pb-20">
        <BlogSection />
      </div>

    </div>
  );
};

export default HomePage;