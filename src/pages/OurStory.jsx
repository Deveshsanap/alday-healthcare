import React, { useState } from 'react';
import { 
  Leaf, FlaskConical, ShieldCheck, Droplets, HeartPulse, CheckCircle2, 
  Play, Activity, Recycle, ChevronRight, Sparkles 
} from 'lucide-react';

const OurStory = () => {
  // State for the Interactive Ingredient Tab
  const [activeIngredient, setActiveIngredient] = useState('bakuchiol');

  const ingredients = {
    bakuchiol: {
      name: "Bakuchiol",
      title: "The Natural Retinol Alternative",
      desc: "A 100% plant-derived powerhouse that delivers all the anti-aging, collagen-boosting benefits of retinol without the harsh irritation, redness, or sun sensitivity.",
      benefits: ["Boosts Collagen", "Reduces Fine Lines", "Safe for Sensitive Skin"]
    },
    rosemary: {
      name: "Clinical Rosemary",
      title: "Cellular Scalp Stimulant",
      desc: "Extracted at peak potency, our rosemary active increases microcirculation in the scalp, extending the hair growth cycle and preventing follicle miniaturization.",
      benefits: ["DHT Blocker", "Stimulates Follicles", "Improves Density"]
    },
    vitaminc: {
      name: "Stabilized Vitamin C",
      title: "The Brightening Catalyst",
      desc: "We use a highly stable, lipid-soluble form of Vitamin C that penetrates deeper into the dermis to neutralize free radicals and inhibit melanin production.",
      benefits: ["Fades Pigmentation", "Evens Skin Tone", "Antioxidant Shield"]
    }
  };

  return (
    <div className="bg-[#FBFBFB] min-h-screen font-sans text-gray-900">
      
      {/* --- HERO SECTION (Fixed Spacing) --- */}
      <section className="bg-gradient-to-b from-[#12221A] to-[#1A2E24] text-white py-16 md:py-24 px-6 text-center relative overflow-hidden">
        {/* Abstract Gold Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
           <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#C5A059] rounded-full blur-[150px]"></div>
           <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#C5A059] rounded-full blur-[120px] opacity-50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">The Genesis</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
            Redefining <br className="hidden md:block" />Clinical Nutrition.
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            We started Alday Healthcare with a simple, rebellious idea: What if your skincare and supplements contained exactly what they promised, with absolutely zero dilution?
          </p>
          <button className="inline-flex items-center gap-3 border border-[#C5A059] text-[#C5A059] px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-[#C5A059] hover:text-[#12221A] transition-all duration-300">
            <Play size={16} /> Watch Brand Film
          </button>
        </div>
      </section>

      {/* --- QUICK STATS BANNER --- */}
      <section className="bg-[#C5A059] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-[#12221A]/20">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-[#12221A] mb-1">0%</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12221A]/80">Added Water</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-[#12221A] mb-1">100%</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12221A]/80">Plant-Based Actives</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-[#12221A] mb-1">50+</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12221A]/80">Clinical Trials</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-[#12221A] mb-1">24hr</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#12221A]/80">Cellular Absorption</p>
          </div>
        </div>
      </section>

      {/* --- THE PROBLEM VS SOLUTION SECTION (Fixed Image Size) --- */}
      <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Custom CSS Graphic - Now Restricted in Size for a Premium Look */}
          <div className="flex justify-center lg:justify-end lg:pr-35">
            <div className="relative w-full max-w-[340px] aspect-[4/5] bg-[#12221A] rounded-3xl overflow-hidden p-8 flex flex-col justify-between shadow-2xl border border-gray-200/50 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#12221A] to-[#1A2E24] z-0"></div>
              <div className="absolute -top-24 -right-24 w-60 h-64 bg-[#C5A059]/20 rounded-full blur-[60px] z-0 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <FlaskConical size={32} className="text-[#C5A059]" strokeWidth={1} />
                <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Fig. 01 / Dilution</span>
              </div>
              
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-black uppercase tracking-widest text-sm">The Formula</h4>
                    <Sparkles size={16} className="text-[#C5A059]" />
                  </div>
                  <div className="space-y-4">
                    {/* Thinner, more elegant progress bar */}
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                      <div className="h-full bg-red-400 w-[70%]"></div>
                      <div className="h-full bg-yellow-400 w-[20%]"></div>
                      <div className="h-full bg-[#C5A059] w-[10%]"></div>
                    </div>
                    <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-gray-400">
                      <span className="text-red-300">70% Water</span>
                      <span className="text-yellow-300">20% Fillers</span>
                      <span className="text-[#C5A059]">10% Actives</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">The Industry Truth</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#12221A] mb-6">
              Water is not a <br/>skincare ingredient.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Look at the back of most premium skincare or health products. The first ingredient is almost always "Aqua" (Water), often making up to 70-80% of the bottle. You are paying premium prices for diluted formulas.
              </p>
              <p>
                We refused to accept this standard. Alday Healthcare was born from the desire to extract the purest, most potent forms of nature and deliver them directly to your cells—without a single drop of added water or chemical fillers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <span className="text-red-500 font-bold text-lg">✗</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#12221A] text-[11px] uppercase tracking-wider mb-1">Standard Market</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">70% Water, Synthetic Chemicals, Minimal Actives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#12221A]/5 p-4 rounded-xl border border-[#C5A059]/20 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#12221A] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#12221A] text-[11px] uppercase tracking-wider mb-1">The Alday Way</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">100% Natural Actives, Clinical Dosages, Zero Water.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="bg-white border-y border-gray-100 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">Evolution</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#12221A]">The Journey</h2>
            <div className="w-12 h-1 bg-[#C5A059] mx-auto mt-6"></div>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#12221A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-[10px] font-bold">2023</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#12221A] uppercase tracking-widest text-sm mb-2">The Realization</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Frustrated by ineffective products filled with water, our founders began researching concentrated botanical extraction methods.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#C5A059] text-[#12221A] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-[10px] font-bold">2024</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#12221A] uppercase tracking-widest text-sm mb-2">Clinical Formulation</h4>
                <p className="text-sm text-gray-500 leading-relaxed">Partnering with top dermatologists and herbalists, we successfully stabilized Bakuchiol and Vitamin C without synthetic preservatives.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#12221A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-[10px] font-bold">2025</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#12221A] p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] opacity-10 blur-[40px] pointer-events-none"></div>
                <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2 relative z-10">The Launch</h4>
                <p className="text-sm text-gray-300 leading-relaxed relative z-10">Alday Healthcare goes live, introducing the Zero Dilution standard to the market and changing skincare routines forever.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- OUR PILLARS (DARK THEME GRID) --- */}
      <section className="bg-[#12221A] py-24 px-6 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">The 3 Pillars of Efficacy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-3xl hover:bg-white/10 hover:border-[#C5A059]/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#1A2E24] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#C5A059] transition-colors duration-300 shadow-lg">
                <FlaskConical size={28} className="text-[#C5A059] group-hover:text-[#12221A] transition-colors" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Clinical Science</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every formulation is backed by rigorous clinical data. We use precise concentrations of active ingredients proven to deliver visible results at a cellular level.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-3xl hover:bg-white/10 hover:border-[#C5A059]/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#1A2E24] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#C5A059] transition-colors duration-300 shadow-lg">
                <Leaf size={28} className="text-[#C5A059] group-hover:text-[#12221A] transition-colors" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">100% Plant-Based</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We believe nature holds the ultimate cure. Our ingredients are ethically sourced, 100% vegan, and completely free from synthetic fragrances, parabens, and sulfates.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-3xl hover:bg-white/10 hover:border-[#C5A059]/50 hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#1A2E24] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#C5A059] transition-colors duration-300 shadow-lg">
                <Droplets size={28} className="text-[#C5A059] group-hover:text-[#12221A] transition-colors" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Zero Dilution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                No added water. No empty fillers. Just pure, concentrated nutrition. A single drop of our formula contains more active power than a handful of standard products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE INGREDIENT SPOTLIGHT --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Transparency</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#12221A]">Core Actives</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
          {/* Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {Object.keys(ingredients).map((key) => (
              <button
                key={key}
                onClick={() => setActiveIngredient(key)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 font-bold uppercase tracking-widest text-xs flex justify-between items-center ${
                  activeIngredient === key 
                    ? 'bg-[#12221A] text-[#C5A059] shadow-md scale-[1.02]' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {ingredients[key].name}
                {activeIngredient === key && <ChevronRight size={18} />}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
             {/* Decorative Background Icon */}
             <Activity className="absolute -bottom-10 -right-10 text-gray-200 w-64 h-64 opacity-50 pointer-events-none" strokeWidth={0.5} />
             
             <div className="relative z-10">
               <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-[#12221A] mb-2">
                 {ingredients[activeIngredient].name}
               </h3>
               <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-6">
                 {ingredients[activeIngredient].title}
               </h4>
               <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                 {ingredients[activeIngredient].desc}
               </p>
               
               <h5 className="font-bold text-[#12221A] uppercase tracking-widest text-[10px] mb-4 border-b border-gray-200 pb-2 inline-block">Key Clinical Benefits</h5>
               <ul className="space-y-4">
                 {ingredients[activeIngredient].benefits.map((benefit, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                     <div className="w-6 h-6 rounded-full bg-[#12221A]/5 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-[#C5A059]" /> 
                     </div>
                     {benefit}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* --- SUSTAINABILITY & QUALITY --- */}
      <section className="bg-white py-24 px-6 border-t border-gray-100 text-center">
        <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">The Standard</span>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#12221A] mb-16">
          Uncompromising Quality
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-[#12221A] transition-all duration-300 border border-gray-100">
              <ShieldCheck size={32} strokeWidth={1.5} className="text-[#12221A] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <h4 className="font-bold text-[#12221A] uppercase tracking-widest text-xs mb-2 leading-relaxed">Dermatologically<br/>Tested</h4>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-[#12221A] transition-all duration-300 border border-gray-100">
              <HeartPulse size={32} strokeWidth={1.5} className="text-[#12221A] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <h4 className="font-bold text-[#12221A] uppercase tracking-widest text-xs mb-2 leading-relaxed">Toxin<br/>Free</h4>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-[#12221A] transition-all duration-300 border border-gray-100">
              <Leaf size={32} strokeWidth={1.5} className="text-[#12221A] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <h4 className="font-bold text-[#12221A] uppercase tracking-widest text-xs mb-2 leading-relaxed">Cruelty<br/>Free</h4>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-[#12221A] transition-all duration-300 border border-gray-100">
              <Recycle size={32} strokeWidth={1.5} className="text-[#12221A] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <h4 className="font-bold text-[#12221A] uppercase tracking-widest text-xs mb-2 leading-relaxed">Recyclable<br/>Packaging</h4>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-[#12221A] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Experience the difference</h2>
          <p className="text-gray-400 mb-10 text-lg">Stop paying for water. Start investing in real, clinical nutrition for your body and skin.</p>
          <a href="/view-all" className="inline-block bg-[#C5A059] text-[#12221A] font-black uppercase tracking-widest px-10 py-5 rounded-none hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
            Explore Collections
          </a>
        </div>
      </section>

    </div>
  );
};

export default OurStory;