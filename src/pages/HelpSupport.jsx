import React, { useState } from 'react';
import { 
  MessageCircle, Mail, Search, ChevronDown, ChevronUp, 
  Send, Check, FileText, MapPin, Globe, Clock, Download, ExternalLink
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HelpSupport = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [faqTab, setFaqTab] = useState('general');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // --- FAQS DATA ---
  const faqData = {
    general: [
      { q: "What does 'Clinical Nutrition' mean?", a: "It refers to formulations backed by clinical data that deliver specific nutrients in high concentrations to address root causes." },
      { q: "Are the products 100% vegan?", a: "Yes, every single Alday Health product is 100% plant-based and cruelty-free." }
    ],
    shipping: [
      { q: "How long does delivery take?", a: "Standard shipping takes 3-5 business days. Express shipping is available for select metro cities." },
      { q: "Do you ship internationally?", a: "Currently, we only ship within India, but we are expanding to the UAE and UK soon." }
    ],
    rituals: [
      { q: "Can I mix different serums?", a: "We recommend layering them. Apply water-based serums first, followed by oil-based formulations for maximum absorption." },
      { q: "What is the best time to apply hair oil?", a: "For clinical efficacy, leave it on for at least 4 hours or overnight." }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FBFBFB] min-h-screen font-sans text-gray-900">

      <main className="mt-16">
        {/* --- DYNAMIC HERO --- */}
        <section className="bg-gradient-to-b from-[#12221A] to-[#1A2E24] text-white py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Support Center</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">We're here to help.</h1>
            <div className="relative max-w-xl mx-auto group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search products, orders, or concerns..." 
                className="w-full bg-white text-black py-5 pl-14 pr-6 rounded-full outline-none text-sm font-medium shadow-2xl transition-all focus:ring-2 focus:ring-[#C5A059]"
              />
            </div>
          </div>
        </section>

        <div className="max-w-[1300px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* --- LEFT: FAQ & RESOURCES (8 cols) --- */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* FAQ Section */}
              <div>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-gray-100 pb-6">
                  <h2 className="text-2xl font-black uppercase tracking-widest">Common Questions</h2>
                  <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                    {['general', 'shipping', 'rituals'].map(tab => (
                      <button 
                        key={tab}
                        onClick={() => {setFaqTab(tab); setActiveFaq(null);}}
                        className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all whitespace-nowrap ${faqTab === tab ? 'bg-black text-white border-black shadow-md' : 'border-gray-200 text-gray-400 hover:border-black hover:text-black'}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {faqData[faqTab].map((faq, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-sm hover:border-gray-300 transition-colors">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-6 text-left"
                      >
                        <span className="font-bold text-sm uppercase tracking-wide pr-8">{faq.q}</span>
                        <div className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>
                          <ChevronDown size={18} className="text-gray-400" />
                        </div>
                      </button>
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-96 border-t border-gray-50' : 'max-h-0'}`}>
                        <p className="p-6 text-sm text-gray-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resource Library */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white border border-gray-100 p-8 rounded-sm group hover:border-[#C5A059] transition-colors">
                    <FileText size={32} className="text-[#C5A059] mb-4" />
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Clinical Whitepaper</h4>
                    <p className="text-xs text-gray-500 mb-6">Understand the science behind our zero-dilution formulations.</p>
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#C5A059] transition-colors">
                       <Download size={14}/> Download PDF
                    </button>
                 </div>
                 <div className="bg-white border border-gray-100 p-8 rounded-sm group hover:border-[#C5A059] transition-colors">
                    <Clock size={32} className="text-[#C5A059] mb-4" />
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">The Ritual Guide</h4>
                    <p className="text-xs text-gray-500 mb-6">Step-by-step routines for hair growth and skin clarity.</p>
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#C5A059] transition-colors">
                       <Download size={14}/> Download PDF
                    </button>
                 </div>
              </div>
            </div>

            {/* --- RIGHT: INTERACTIVE CONTACT (4 cols) --- */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Status Card */}
              <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Support is Online</span>
                </div>
                <h3 className="font-black uppercase tracking-widest text-lg mb-6">Get in touch</h3>
                
                <div className="space-y-6">
                  <a href="https://wa.me/919876543210" className="flex items-center justify-between p-4 bg-gray-50 rounded-sm hover:bg-green-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <MessageCircle size={20} className="text-green-600" />
                      <span className="text-xs font-bold uppercase tracking-widest">WhatsApp Support</span>
                    </div>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="mailto:care@aldayhealth.com" className="flex items-center justify-between p-4 bg-gray-50 rounded-sm hover:bg-blue-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <Mail size={20} className="text-blue-600" />
                      <span className="text-xs font-bold uppercase tracking-widest">Email Response</span>
                    </div>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-[#12221A] text-white p-8 rounded-sm shadow-xl">
                <h3 className="font-bold uppercase tracking-widest text-sm mb-6">Clinical Inquiry</h3>
                {formSubmitted ? (
                  <div className="text-center py-6 animate-fade-in">
                    <div className="w-12 h-12 bg-white/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={24} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest">Inquiry Received</p>
                    <p className="text-[10px] text-gray-400 mt-2">Expect a response within 12 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <select className="w-full bg-white/5 border border-white/10 p-3 rounded-sm text-[10px] uppercase font-bold tracking-widest outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer">
                       <option className="bg-[#12221A]">General Inquiry</option>
                       <option className="bg-[#12221A]">Recent Order Issue</option>
                       <option className="bg-[#12221A]">Product Feedback</option>
                       <option className="bg-[#12221A]">Clinical Consultation</option>
                    </select>
                    <input type="text" placeholder="SUBJECT" className="w-full bg-white/5 border border-white/10 p-3 rounded-sm text-[10px] font-bold uppercase tracking-widest outline-none focus:border-[#C5A059] transition-colors" required />
                    <textarea placeholder="DESCRIBE YOUR CONCERN..." rows="4" className="w-full bg-white/5 border border-white/10 p-3 rounded-sm text-[10px] font-bold uppercase tracking-widest outline-none focus:border-[#C5A059] transition-colors resize-none" required></textarea>
                    <button type="submit" className="w-full bg-[#C5A059] text-black py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                      Submit Case <Send size={14} />
                    </button>
                  </form>
                )}
              </div>

              {/* Store Locator Mini */}
              <div className="border border-dashed border-gray-300 p-6 rounded-sm">
                 <div className="flex items-center gap-3 mb-4">
                    <MapPin size={18} className="text-gray-400"/>
                    <h5 className="text-[10px] font-bold uppercase tracking-widest">Physical Clinics</h5>
                 </div>
                 <p className="text-[10px] text-gray-500 mb-4 leading-relaxed uppercase">Visit our experience centers in Mumbai, Delhi & Bangalore.</p>
                 <button className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] hover:text-black transition-colors underline underline-offset-4">Find Near Me</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpSupport;