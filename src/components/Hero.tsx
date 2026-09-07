import React from 'react';
import { Star, ChevronDown, Calendar, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

interface HeroProps {
  onEnquireClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnquireClick, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Cinematic Venue Hero Background with Subtle Parallax Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=85&w=2000&auto=format&fit=crop"
          alt="Taj Watika Luxury Wedding Banquet and Celebration Venue"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] duration-[10000ms]"
          style={{ animationDuration: '24s' }}
          fetchPriority="high"
        />
        {/* Layered Cinematic Vignette & Dark Overlay for Crisp Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.7)_80%)]" />
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Rating Badge */}
        <div
          id="hero-rating-badge"
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D6B56C]/30 backdrop-blur-md mb-6 shadow-xl"
        >
          <div className="flex items-center text-[#D6B56C]">
            <Star className="w-3.5 h-3.5 fill-[#D6B56C]" />
          </div>
          <span className="text-[11px] sm:text-xs tracking-wider uppercase text-[#FAF8F3]/90 font-medium">
            <strong className="text-[#D6B56C] font-semibold">{BUSINESS_INFO.googleRating}</strong> Google Rating • {BUSINESS_INFO.googleReviewsCount} Reviews
          </span>
        </div>

        {/* Eyebrow */}
        <p
          id="hero-eyebrow"
          className="text-xs sm:text-sm uppercase tracking-wide-luxury text-[#D6B56C] font-medium mb-4"
        >
          TAJ WATIKA • KOCHAS
        </p>

        {/* Main Heading */}
        <h1
          id="hero-main-heading"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FAF8F3] leading-[1.12] tracking-tight max-w-4xl mb-6"
        >
          Where Grand Celebrations Become Timeless Memories
        </h1>

        {/* Supporting Text */}
        <p
          id="hero-supporting-text"
          className="text-sm sm:text-base md:text-lg text-[#FAF8F3]/80 max-w-2xl font-light leading-relaxed mb-10 text-balance"
        >
          A refined destination for weddings, celebrations and unforgettable moments in Hetampur, Kochas.
        </p>

        {/* Buttons */}
        <div
          id="hero-action-buttons"
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            id="hero-enquire-btn"
            onClick={onEnquireClick}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-luxury font-semibold text-[#0B0B0B] bg-[#D6B56C] hover:bg-[#E8D39E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D6B56C]/25 active:scale-[0.98] inline-flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4 text-[#0B0B0B]" />
            <span>Enquire Now</span>
          </button>

          <button
            type="button"
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-luxury font-medium text-[#FAF8F3] border border-white/25 hover:border-[#D6B56C] hover:text-[#D6B56C] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Venue</span>
          </button>
        </div>

        {/* Subtle Luxury Coordinates & Service Tag */}
        <div className="mt-12 flex items-center justify-center space-x-3 text-[11px] uppercase tracking-wide-luxury text-[#FAF8F3]/50">
          <span>Hetampur, Kochas</span>
          <span className="text-[#D6B56C]">•</span>
          <span>Open 24 Hours</span>
          <span className="text-[#D6B56C]">•</span>
          <span>Banquet & Marriage Hall</span>
        </div>
      </div>

      {/* Subtle Golden Scroll Indicator */}
      <a
        href="#about"
        id="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#D6B56C]/80 hover:text-[#D6B56C] transition-colors group cursor-pointer"
        aria-label="Scroll to venue narrative"
      >
        <span className="text-[9px] uppercase tracking-wide-luxury font-light mb-1 text-[#FAF8F3]/60 group-hover:text-[#D6B56C]">
          Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-[#D6B56C]/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#D6B56C] animate-bounce" />
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#D6B56C] mt-0.5 animate-pulse" />
      </a>
    </section>
  );
};
