import React from 'react';
import { Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

interface SignatureShowcaseProps {
  onPlanClick: () => void;
}

export const SignatureShowcase: React.FC<SignatureShowcaseProps> = ({ onPlanClick }) => {
  return (
    <section
      id="showcase"
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5"
    >
      {/* Background Architectural Venue Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=85&w=2000&auto=format&fit=crop"
          alt="Taj Watika Signature Venue Showcase"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/60 to-[#0B0B0B]/70" />
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        <span className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-3">
          SIGNATURE VENUE
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F3] tracking-tight leading-tight mb-4">
          TAJ WATIKA
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#FAF8F3]/90 font-light mb-6">
          A Setting Worth Celebrating
        </p>

        <div className="w-16 h-[1.5px] bg-[#D6B56C] mb-8" />

        <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-wide-luxury text-[#FAF8F3]/75 mb-10 px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/10">
          <span>Banquet Hall</span>
          <span className="text-[#D6B56C]">•</span>
          <span>Hetampur</span>
          <span className="text-[#D6B56C]">•</span>
          <span>Kochas</span>
          <span className="text-[#D6B56C]">•</span>
          <span>Open 24 Hours</span>
        </div>

        <button
          type="button"
          id="signature-plan-celebration-btn"
          onClick={onPlanClick}
          className="px-8 py-3.5 text-xs uppercase tracking-luxury font-semibold text-[#0B0B0B] bg-[#D6B56C] hover:bg-[#E8D39E] transition-all duration-300 shadow-2xl hover:shadow-[#D6B56C]/30 active:scale-[0.98] inline-flex items-center space-x-2"
        >
          <Calendar className="w-4 h-4 text-[#0B0B0B]" />
          <span>Plan Your Celebration</span>
        </button>

        <p className="text-[11px] text-[#FAF8F3]/50 mt-4 tracking-wider">
          Direct Inquiries: {BUSINESS_INFO.phone}
        </p>
      </div>
    </section>
  );
};
