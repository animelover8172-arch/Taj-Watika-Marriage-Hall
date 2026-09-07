import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="floating-actions-container"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2.5"
    >
      {/* Back to Top */}
      {showBackToTop && (
        <button
          type="button"
          id="floating-back-to-top-btn"
          onClick={scrollToTop}
          className="p-3 bg-[#121212]/90 border border-white/20 hover:border-[#D6B56C] text-[#FAF8F3] hover:text-[#D6B56C] rounded-full shadow-2xl transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:scale-95"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Call Now Floating Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        id="floating-call-btn"
        className="group flex items-center space-x-2 pl-3.5 pr-4 py-2.5 bg-[#0B0B0B]/90 hover:bg-[#151515] border border-[#D6B56C]/40 hover:border-[#D6B56C] rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        title="Call +91 99347 81245"
      >
        <div className="p-1 rounded-full bg-[#D6B56C]/15 text-[#D6B56C]">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs uppercase tracking-luxury text-[#FAF8F3] font-medium hidden sm:inline">
          Call Now
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group flex items-center space-x-2 pl-3.5 pr-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-[#25D366]/20"
        title="Chat with Taj Watika on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-black" />
        <span className="text-xs uppercase tracking-luxury text-black font-semibold hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
