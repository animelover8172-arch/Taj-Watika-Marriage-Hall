import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { BUSINESS_INFO, REVIEWS_DATA } from '../data/venueData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  return (
    <section
      id="reviews"
      className="relative bg-[#0E0E0E] py-24 sm:py-32 border-b border-white/5 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D6B56C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-3 block">
            VOICES OF OUR GUESTS
          </span>

          <h2
            id="reviews-section-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] tracking-tight mb-6"
          >
            Celebrated by Families
          </h2>

          {/* Large Google Rating Pill */}
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-[#141414] border border-[#D6B56C]/30 shadow-xl rounded-full">
            <div className="flex items-center space-x-1">
              <span className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] font-bold">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex text-[#D6B56C] ml-1.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D6B56C]" />
                ))}
                <Star className="w-4 h-4 fill-[#D6B56C]/30 text-[#D6B56C]" />
              </div>
            </div>
            
            <div className="w-[1px] h-6 bg-white/20" />

            <div className="text-left">
              <p className="text-xs font-semibold text-[#FAF8F3] tracking-wider uppercase">
                Google Verified
              </p>
              <p className="text-[11px] text-[#D6B56C] font-light">
                {BUSINESS_INFO.googleReviewsCount} Reviews & Ratings
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="relative max-w-4xl mx-auto">
          <div
            id={`review-card-${currentReview.id}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="relative bg-[#141414] border border-white/10 p-8 sm:p-14 shadow-2xl transition-all duration-500"
          >
            {/* Large Decorative Quotation Mark */}
            <div className="absolute top-6 right-8 text-[#D6B56C]/15 pointer-events-none">
              <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1]" />
            </div>

            {/* Stars */}
            <div className="flex items-center space-x-1 mb-6 text-[#D6B56C]">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D6B56C]" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="font-serif text-lg sm:text-2xl text-[#FAF8F3] font-normal leading-relaxed italic mb-8 relative z-10">
              "{currentReview.text}"
            </p>

            {/* Review Author & Occasion */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-6 gap-2">
              <div>
                <h4 className="font-sans text-sm sm:text-base font-semibold text-[#FAF8F3] tracking-wide">
                  {currentReview.author}
                </h4>
                <p className="text-xs text-[#D6B56C] font-light tracking-wider mt-0.5">
                  {currentReview.occasion} • <span className="text-[#FAF8F3]/50">{currentReview.date}</span>
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3 self-end sm:self-auto">
                <button
                  type="button"
                  id="review-prev-btn"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#D6B56C] text-[#FAF8F3] hover:text-[#D6B56C] transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#FAF8F3]/50 tracking-wider">
                  {currentIndex + 1} / {REVIEWS_DATA.length}
                </span>
                <button
                  type="button"
                  id="review-next-btn"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/10 hover:border-[#D6B56C] text-[#FAF8F3] hover:text-[#D6B56C] transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                id={`review-dot-${idx}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-8 bg-[#D6B56C]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] text-[#FAF8F3]/40 mt-8 tracking-wider">
          Reviews reflected from Google Maps & visitor feedback for TAJ WATIKA, Kochas, Bihar
        </p>

      </div>
    </section>
  );
};
