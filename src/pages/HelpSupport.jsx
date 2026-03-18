import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, 
  Twitter, Instagram, Facebook, MessageCircle 
} from 'lucide-react';

const HelpSupport = () => {
  // Backend Integration States
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  
  // Form State matching the design's specific fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Limit message to 500 characters
    if (name === 'message' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- BACKEND SUBMISSION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Format payload to match your backend's expected structure based on previous context
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone, // Added from the new design
        subject: 'General Inquiry', // Fallback subject for the backend
        message: formData.message
      };

      const response = await fetch('https://aldey-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus('error');
      setErrorMessage('Server connection error. Please try again later.');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <div className="bg-[#FBFBFB] min-h-screen font-sans text-gray-900 pb-20 pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Grid Layout matching the provided design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: Contact Info --- */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#12221A] mb-4">
              Let's connect
            </h1>
            <p className="text-gray-500 mb-12 text-sm md:text-base max-w-md">
              We're here to help you with any questions, clinical inquiries, or support needs you might have. Reach out to us through any of the channels below.
            </p>

            <div className="space-y-8 mb-12">
              {/* Phone Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#12221A]/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#12221A] mb-1">Call us</h3>
                  <a href="tel:+918000000000" className="text-gray-600 hover:text-[#C5A059] transition-colors block text-sm">
                    +91 80000 00000
                  </a>
                  <span className="text-xs text-gray-400">Mon-Sat, 9am to 6pm</span>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#12221A]/5 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#12221A] mb-1">Chat with us</h3>
                  <a href="mailto:info@alday.com" className="text-gray-600 hover:text-[#C5A059] transition-colors block text-sm">
                    info@alday.com
                  </a>
                  <a href="mailto:support@alday.com" className="text-gray-600 hover:text-[#C5A059] transition-colors block text-sm">
                    support@alday.com
                  </a>
                </div>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#12221A]/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#C5A059]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#12221A] mb-1">Visit us</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                    Alday Healthcare HQ,<br />
                    123 Clinical Avenue, Bio-Tech Park,<br />
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Follow Section */}
            <div>
              <h4 className="font-bold text-[#12221A] mb-4 uppercase tracking-widest text-xs">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#12221A] text-white rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#12221A] text-white rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#12221A] text-white rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                  <MessageCircle size={18} /> {/* Represents Discord/Community */}
                </a>
                <a href="#" className="w-10 h-10 bg-[#12221A] text-white rounded-full flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: The Form --- */}
          <div className="bg-[#12221A] p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
            
            {/* Subtle background decoration to keep it premium */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] opacity-5 blur-[100px] pointer-events-none"></div>

            <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>

            {status === 'success' ? (
              <div className="text-center py-16 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-red-200">{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      required disabled={status === 'loading'}
                      value={formData.firstName} onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      required disabled={status === 'loading'}
                      value={formData.lastName} onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required disabled={status === 'loading'}
                      value={formData.email} onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      disabled={status === 'loading'}
                      value={formData.phone} onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Message</label>
                    <span className={`text-[10px] ${formData.message.length >= 490 ? 'text-red-400 font-bold' : 'text-gray-500'}`}>
                      {formData.message.length}/500
                    </span>
                  </div>
                  <textarea 
                    name="message" 
                    required rows="4" disabled={status === 'loading'}
                    value={formData.message} onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all resize-none"
                    placeholder="Leave us a message..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#C5A059] text-[#12221A] font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;