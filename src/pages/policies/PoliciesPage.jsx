import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, RefreshCcw, Printer, ThumbsUp, ThumbsDown, Mail } from 'lucide-react';

const PoliciesPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('privacy');
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  // Read URL hash to open the correct tab automatically (e.g., /policies#refund)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (['privacy', 'terms', 'refund'].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location]);

  const handlePrint = () => {
    window.print();
  };

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: <ShieldCheck size={20} /> },
    { id: 'terms', label: 'Terms & Conditions', icon: <FileText size={20} /> },
    { id: 'refund', label: 'Cancellation & Refund', icon: <RefreshCcw size={20} /> },
  ];

  // --- CONTENT BLOCKS ---
  const content = {
    privacy: (
      <div className="space-y-6 text-gray-600 leading-relaxed print:text-black">
        <p>At Alday Healthcare, your privacy is our priority. This policy outlines how we collect, use, and protect your personal information.</p>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#12221A]">1. Information We Collect</h3>
          <p>We collect information you provide directly, such as when you create an account, make a purchase, or contact support. This includes your name, email, shipping address, and secure payment tokens.</p>
          
          <h3 className="text-lg font-bold text-[#12221A]">2. Medical Data & Privacy</h3>
          <p>If you use our Derma Analyser, the images and results are processed securely and are never used for marketing purposes or sold to third parties without explicit consent.</p>

          <h3 className="text-lg font-bold text-[#12221A]">3. Cookies & Tracking</h3>
          <p>We use essential cookies to maintain your cart and session. Analytics cookies are used strictly to improve website performance.</p>
        </div>
      </div>
    ),
    terms: (
      <div className="space-y-6 text-gray-600 leading-relaxed print:text-black">
        <p>By accessing Alday Healthcare, you agree to be bound by these Terms and Conditions.</p>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#12221A]">1. Medical Disclaimer</h3>
          <p className="bg-[#C5A059]/10 border-l-4 border-[#C5A059] p-4 text-[#12221A] rounded-r-lg">
            The products and claims on this site are not evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease. Always consult a healthcare professional.
          </p>
          
          <h3 className="text-lg font-bold text-[#12221A]">2. Account Responsibilities</h3>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

          <h3 className="text-lg font-bold text-[#12221A]">3. Pricing & Availability</h3>
          <p>Prices are subject to change without notice. We reserve the right to limit quantities of products available for sale.</p>
        </div>
      </div>
    ),
    refund: (
      <div className="space-y-6 text-gray-600 leading-relaxed print:text-black">
        <p>We want you to be completely satisfied with your Alday Healthcare purchase.</p>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#12221A]">1. Cancellation Policy</h3>
          <p>Orders can only be cancelled before they are dispatched. Once an order receives a tracking number, it cannot be cancelled.</p>
          
          <h3 className="text-lg font-bold text-[#12221A]">2. Returns on Health Products</h3>
          <p>For hygiene and safety reasons, <strong>we do not accept returns on opened skincare or haircare products</strong> unless the product arrived damaged or defective.</p>

          <h3 className="text-lg font-bold text-[#12221A]">3. Refund Processing</h3>
          <p>Approved refunds will be processed to your original payment method within 5-7 business days. Bank processing times may vary.</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#12221A] mb-4">Legal & Policies</h1>
          <p className="text-gray-500">Everything you need to know about how we operate and protect you.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0 print:hidden">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <nav className="flex flex-col p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all font-medium ${
                      activeTab === tab.id 
                        ? 'bg-[#12221A] text-[#C5A059] shadow-md' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>

              {/* Support Card in Sidebar */}
              <div className="p-6 bg-slate-50 border-t border-gray-100 mt-2">
                <h4 className="font-bold text-[#12221A] mb-2">Need Help?</h4>
                <p className="text-sm text-gray-500 mb-4">Our support team is available Mon-Fri, 9am - 6pm.</p>
                <a href="mailto:support@alday.com" className="flex items-center gap-2 text-sm font-semibold text-[#C5A059] hover:text-[#12221A] transition-colors">
                  <Mail size={16} /> Contact Support
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 relative">
            
            {/* Header Actions (Print & Date) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#12221A]">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h2>
                <p className="text-sm text-gray-400 mt-1">Last Updated: March 15, 2026</p>
              </div>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors print:hidden"
              >
                <Printer size={16} /> Print Document
              </button>
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[400px]">
              {content[activeTab]}
            </div>

            {/* Feedback Widget */}
            <div className="mt-12 pt-8 border-t border-gray-100 print:hidden">
              {!feedbackGiven ? (
                <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-50 p-6 rounded-xl">
                  <span className="font-medium text-gray-700 mb-4 sm:mb-0">Was this information helpful?</span>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setFeedbackGiven(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#12221A] hover:text-[#12221A] transition-colors"
                    >
                      <ThumbsUp size={16} /> Yes
                    </button>
                    <button 
                      onClick={() => setFeedbackGiven(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#12221A] hover:text-[#12221A] transition-colors"
                    >
                      <ThumbsDown size={16} /> No
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center p-6 bg-green-50 text-green-700 rounded-xl font-medium">
                  Thank you for your feedback! It helps us improve.
                </div>
              )}
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PoliciesPage;