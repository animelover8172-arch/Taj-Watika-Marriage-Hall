import React from 'react';
import { MapPin, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';
import venueStoryImg from '../assets/images/regenerated_image_1788808347341.png';

interface VenueStoryProps {
  onPlanClick: () => void;
}

export const VenueStory: React.FC<VenueStoryProps> = ({ onPlanClick }) => {
  return (
    <section
      id="venue-story"
      className="relative bg-[#0E0E0E] py-20 sm:py-28 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Architectural Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={venueStoryImg}
                alt="Taj Watika Venue Architecture and Celebration Setting"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/75 backdrop-blur-md border border-[#D6B56C]/30 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wide-luxury text-[#D6B56C] font-medium">
                    Architectural Destination
                  </p>
                  <p className="font-serif text-base text-[#FAF8F3] tracking-wide">
                    Taj Watika Banquet Hall
                  </p>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-[#FAF8F3]/70">
                  <Clock className="w-3.5 h-3.5 text-[#D6B56C]" />
                  <span>24 Hours</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative background accent line */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-[#D6B56C]/30 -z-10" />
          </div>

          {/* Right Column: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Location Label */}
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-medium mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hetampur • Kochas • Bihar</span>
            </div>

            {/* Heading */}
            <h2
              id="venue-story-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] leading-[1.18] tracking-tight mb-6"
            >
              The Taj Watika Experience
            </h2>

            {/* Champagne Gold Accent Line */}
            <div className="w-12 h-[1px] bg-[#D6B56C] mb-8" />

            {/* Narrative Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-[#FAF8F3]/80 font-light leading-relaxed">
              <p>
                Rooted in the timeless warmth of Indian hospitality, TAJ WATIKA was envisioned as a premier destination for significant milestones. Located conveniently on Sasaram Road near New Block in Kochas, it offers a seamless blend of grandeur and heartfelt celebration.
              </p>
              <p>
                From sacred wedding occasions to cherished family celebrations and vibrant social events, our venue provides an expansive, gracious ambiance. Here, thoughtful hospitality and beautiful surroundings ensure every guest feels welcomed and every gathering becomes a lasting memory.
              </p>
            </div>

            {/* Experience Highlights Pillar Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-[#FAF8F3] font-medium">
                    Elegant Celebrations
                  </h4>
                  <p className="text-xs text-[#FAF8F3]/60 mt-0.5">
                    Traditional warmth and grandeur.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-[#FAF8F3] font-medium">
                    Comfortable Hospitality
                  </h4>
                  <p className="text-xs text-[#FAF8F3]/60 mt-0.5">
                    Attentive, courteous care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-[#FAF8F3] font-medium">
                    Memorable Gatherings
                  </h4>
                  <p className="text-xs text-[#FAF8F3]/60 mt-0.5">
                    Spaces tailored for joyous unions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-[#FAF8F3] font-medium">
                    Beautiful Surroundings
                  </h4>
                  <p className="text-xs text-[#FAF8F3]/60 mt-0.5">
                    Spacious & peaceful setting.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-10">
              <button
                type="button"
                id="venue-story-cta-btn"
                onClick={onPlanClick}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-medium text-[#D6B56C] hover:text-[#E8D39E] transition-colors border-b border-[#D6B56C] pb-1 hover:border-[#E8D39E]"
              >
                <span>Plan Your Event at Taj Watika</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
