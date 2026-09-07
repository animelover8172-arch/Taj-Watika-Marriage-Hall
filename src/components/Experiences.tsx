import React from 'react';
import { EXPERIENCE_BLOCKS } from '../data/venueData';

interface ExperiencesProps {
  onEnquireClick: () => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onEnquireClick }) => {
  return (
    <section
      id="experiences"
      className="relative bg-[#0B0B0B] py-24 sm:py-32 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-medium mb-3">
            CURATED CELEBRATIONS
          </p>
          <h2
            id="experiences-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] tracking-tight leading-tight mb-6"
          >
            Moments Crafted with Grace & Grandeur
          </h2>
          <div className="w-12 h-[1px] bg-[#D6B56C] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#FAF8F3]/70 font-light max-w-xl mx-auto">
            Each celebration at Taj Watika is supported by gracious hospitality and versatile spaces designed for every milestone.
          </p>
        </div>

        {/* Alternating Experience Blocks */}
        <div className="space-y-20 lg:space-y-28">
          {EXPERIENCE_BLOCKS.map((block, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={block.id}
                id={`experience-block-${block.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden shadow-2xl border border-white/10 group">
                    <img
                      src={block.imageUrl}
                      alt={block.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1 lg:pr-6' : 'lg:order-2 lg:pl-6'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-[11px] uppercase tracking-wide-luxury text-[#D6B56C] font-semibold">
                      {block.tag}
                    </span>
                    <div className="w-8 h-[1px] bg-[#D6B56C]/50" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FAF8F3] leading-[1.25] tracking-tight mb-4">
                    {block.title}
                  </h3>

                  <div className="w-10 h-[1px] bg-[#D6B56C] mb-6" />

                  <p className="text-sm sm:text-base text-[#FAF8F3]/80 font-light leading-relaxed mb-8">
                    {block.description}
                  </p>

                  <div>
                    <button
                      type="button"
                      id={`experience-enquire-btn-${block.id}`}
                      onClick={onEnquireClick}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-luxury font-medium text-[#FAF8F3] hover:text-[#D6B56C] transition-colors py-2 border-b border-white/20 hover:border-[#D6B56C]"
                    >
                      <span>Enquire for {block.tag}</span>
                      <span className="text-sm">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
