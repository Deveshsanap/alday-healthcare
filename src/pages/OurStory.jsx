import React from 'react';
import { Sprout, Microscope, Droplet, Globe, ArrowRight, Recycle, Leaf } from 'lucide-react';


const OurStory = () => {
  return (
    <div className="bg-white font-sans text-gray-900">

      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80" 
          alt="Nature Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block text-[#C5A059]">The Philosophy</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Nature doesn't dilute. <br/> Neither do we.
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
            The story of how we replaced "Aqua" with "Actives" to create the world's most potent natural nutrition.
          </p>
        </div>
      </section>

      {/* --- 2. THE PROBLEM VS SOLUTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">The Industry Standard</span>
            <h2 className="text-3xl font-bold mb-6">The "90% Water" Lie</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Turn over your favorite lotion or shampoo. The first ingredient is almost always <strong>Aqua (Water)</strong>. In fact, most personal care products are 80-95% water, with just a pinch of the "herbal extract" shown on the label.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We realized that you were paying for perfumed water in a plastic bottle. We knew there had to be a better way.
            </p>
            <div className="flex gap-4">
               <div className="text-center p-4 bg-gray-50 rounded-sm w-32">
                  <span className="block text-2xl font-bold text-gray-300 line-through">95%</span>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Water</span>
               </div>
               <div className="text-center p-4 bg-gray-50 rounded-sm w-32 border border-black">
                  <span className="block text-2xl font-bold text-black">100%</span>
                  <span className="text-[10px] uppercase font-bold text-black">Active</span>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-[#F3E9E2] rounded-full absolute -top-10 -right-10 w-full h-full -z-10 opacity-50"></div>
             <img 
               src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80" 
               alt="Zero Dilution" 
               className="w-full h-auto rounded-sm shadow-xl"
             />
          </div>

        </div>
      </section>

      {/* --- 3. FARM TO BOTTLE PROCESS --- */}
      <section className="bg-[#F9F9F9] py-24 px-6">
         <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">From Soil to Soul</h2>
               <p className="text-gray-500">Our hyper-transparent supply chain.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { icon: <Sprout size={32}/>, title: "Sourcing", desc: "We source ingredients from their native origins—Lavender from Kashmir, Argan from Morocco." },
                  { icon: <Microscope size={32}/>, title: "Extraction", desc: "Using cold-press technology to retain 99.9% of the plant's nutritional profile." },
                  { icon: <Droplet size={32}/>, title: "Formulation", desc: "Zero dilution. We formulate with oils and butters, avoiding water completely." },
                  { icon: <Globe size={32}/>, title: "Delivery", desc: "Fresh small batches shipped directly to your doorstep within days of making." }
               ].map((step, i) => (
                  <div key={i} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black font-serif group-hover:opacity-20 transition-opacity">0{i+1}</div>
                     <div className="text-[#C5A059] mb-6">{step.icon}</div>
                     <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                     <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 4. SUSTAINABILITY COMMITMENT --- */}
      <section className="py-24 px-6 border-b border-gray-100">
         <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <img 
                 src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" 
                 alt="Sustainability" 
                 className="rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="md:w-1/2">
               <div className="flex items-center gap-2 mb-4 text-[#C5A059]">
                  <Recycle size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Our Footprint</span>
               </div>
               <h2 className="text-4xl font-bold mb-6 font-serif">Good for you. <br/>Good for the planet.</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  Beauty shouldn't create waste. That's why we launched the <strong>#EmptyBottle</strong> initiative. Send us your empty Alday bottles, and we recycle them into building materials for rural schools.
               </p>
               
               <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-bold">
                     <CheckCircleIcon /> 100% Recyclable Glass Packaging
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold">
                     <CheckCircleIcon /> Carbon Neutral Shipping
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold">
                     <CheckCircleIcon /> Plastic-Free Outer Box
                  </li>
               </ul>

               <button className="border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#C5A059] hover:border-[#C5A059] transition-colors flex items-center gap-2">
                  Read Sustainability Report <ArrowRight size={16}/>
               </button>
            </div>
         </div>
      </section>

      {/* --- 5. VALUES BANNER --- */}
      <section className="bg-black text-white py-20">
         <div className="max-w-[1000px] mx-auto px-6 text-center">
            <Leaf size={48} className="mx-auto text-[#C5A059] mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
               "We believe in the power of plants to heal, restore, and rejuvenate."
            </h2>
            <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
               <span>Est. 2020</span>
               <span>•</span>
               <span>Made in India</span>
               <span>•</span>
               <span>Global Standards</span>
            </div>
         </div>
      </section>

    </div>
  );
};

// Helper Icon
const CheckCircleIcon = () => (
   <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700">
      <Leaf size={10} fill="currentColor" />
   </div>
);

export default OurStory;