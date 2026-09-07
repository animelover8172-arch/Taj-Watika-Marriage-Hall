import React from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

export const VisitTajWatika: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0E0E0E] py-24 sm:py-32 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Verified Business Information & Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>LOCATION & ACCESS</span>
            </div>

            <h2
              id="visit-us-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] tracking-tight mb-4"
            >
              Visit Us
            </h2>

            <div className="w-12 h-[1px] bg-[#D6B56C] mb-8" />

            {/* Address Card */}
            <div className="space-y-6 text-sm text-[#FAF8F3]/80">
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-black/60 border border-[#D6B56C]/30 text-[#D6B56C] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#FAF8F3] mb-1">
                    {BUSINESS_INFO.name}
                  </h4>
                  <p className="text-xs text-[#D6B56C] font-light mb-1">
                    {BUSINESS_INFO.hindiName}
                  </p>
                  <p className="text-sm text-[#FAF8F3]/75 leading-relaxed">
                    Sasaram Rd, near NEW BLOCK<br />
                    Kochas, Hetampur, Bihar 821112
                  </p>
                  <p className="text-xs text-[#FAF8F3]/50 mt-1">
                    Google Plus Code: <strong className="text-[#FAF8F3]/80">{BUSINESS_INFO.plusCode}</strong>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-black/60 border border-[#D6B56C]/30 text-[#D6B56C] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-[#FAF8F3]/60 mb-0.5 font-medium">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="font-sans text-base text-[#FAF8F3] font-semibold hover:text-[#D6B56C] transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#FAF8F3]/50 mt-0.5">
                    Direct line for bookings & visits
                  </p>
                </div>
              </div>

              {/* Opening & Rating */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 p-3 bg-black/40 border border-white/5">
                  <Clock className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] uppercase tracking-wider text-[#FAF8F3]/60">Opening</h5>
                    <p className="text-xs font-semibold text-[#FAF8F3] mt-0.5">
                      {BUSINESS_INFO.opening}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-black/40 border border-white/5">
                  <Star className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5 fill-[#D6B56C]" />
                  <div>
                    <h5 className="text-[11px] uppercase tracking-wider text-[#FAF8F3]/60">Rating</h5>
                    <p className="text-xs font-semibold text-[#FAF8F3] mt-0.5">
                      {BUSINESS_INFO.googleRating} ★ ({BUSINESS_INFO.googleReviewsCount})
                    </p>
                  </div>
                </div>
              </div>

              {/* Available Services */}
              <div className="pt-2">
                <h5 className="text-[11px] uppercase tracking-luxury text-[#FAF8F3]/60 mb-2">
                  Available Services
                </h5>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS_INFO.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/40 border border-white/10 text-xs text-[#FAF8F3]/80 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#D6B56C]" />
                      <span>{service}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Directions Button */}
            <div className="mt-8">
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#D6B56C] hover:bg-[#E8D39E] text-[#0B0B0B] text-xs uppercase tracking-luxury font-semibold transition-all duration-300 shadow-xl"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Rounded Map Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#D6B56C]/30 shadow-2xl bg-[#141414] aspect-[4/3] sm:aspect-[16/10]">
              <iframe
                title="Taj Watika Location in Kochas Sasaram Rd Bihar"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[30%] contrast-[110%] hover:grayscale-0 transition-all duration-700"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 bg-[#0B0B0B]/90 backdrop-blur-md border border-white/15 text-xs shadow-xl rounded-lg pointer-events-none">
                <p className="font-serif text-sm text-[#FAF8F3] font-semibold">
                  TAJ WATIKA MARRIAGE HALL
                </p>
                <p className="text-[11px] text-[#D6B56C] mt-0.5 font-light">
                  Sasaram Rd, near NEW BLOCK, Kochas
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
