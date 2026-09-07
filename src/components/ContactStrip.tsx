import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

interface ContactStripProps {
  onEnquireClick: () => void;
}

export const ContactStrip: React.FC<ContactStripProps> = ({ onEnquireClick }) => {
  return (
    <section
      id="contact-strip"
      className="relative bg-[#0B0B0B] py-16 sm:py-20 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-3">
          START YOUR JOURNEY
        </p>

        <h2
          id="contact-strip-heading"
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] tracking-tight leading-tight max-w-3xl mx-auto mb-8"
        >
          Your Celebration Deserves a Beautiful Beginning.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Enquire Now */}
          <button
            type="button"
            id="strip-enquire-btn"
            onClick={onEnquireClick}
            className="px-7 py-3.5 bg-[#D6B56C] hover:bg-[#E8D39E] text-[#0B0B0B] text-xs uppercase tracking-luxury font-semibold transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4 text-[#0B0B0B]" />
            <span>Enquire Now</span>
          </button>

          {/* Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="strip-call-btn"
            className="px-7 py-3.5 border border-white/25 hover:border-[#D6B56C] hover:text-[#D6B56C] bg-white/[0.02] text-[#FAF8F3] text-xs uppercase tracking-luxury font-medium transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#D6B56C]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="strip-whatsapp-btn"
            className="px-7 py-3.5 bg-[#25D366]/90 hover:bg-[#25D366] text-black text-xs uppercase tracking-luxury font-semibold transition-all duration-300 shadow-xl inline-flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
