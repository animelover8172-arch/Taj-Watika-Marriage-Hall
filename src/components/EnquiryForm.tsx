import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Calendar, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';
import { EnquiryData } from '../types';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    eventDate: '',
    eventType: 'Wedding Ceremony',
    guestCount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const eventTypes = [
    'Wedding Ceremony',
    'Wedding Reception',
    'Ring Ceremony / Sagun',
    'Family Gathering / Anniversary',
    'Birthday Celebration',
    'Social / Cultural Event',
    'Corporate / Community Meet',
    'Other Special Occasion',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const constructWhatsAppMessage = () => {
    let msg = `*Celebration Enquiry - TAJ WATIKA*\n`;
    msg += `--------------------------------\n`;
    msg += `• *Name*: ${formData.name || 'Guest'}\n`;
    msg += `• *Phone*: ${formData.phone || 'Not provided'}\n`;
    msg += `• *Event Date*: ${formData.eventDate || 'To be decided'}\n`;
    msg += `• *Event Type*: ${formData.eventType}\n`;
    if (formData.guestCount) msg += `• *Est. Guests*: ${formData.guestCount}\n`;
    if (formData.message) msg += `• *Special Request*: ${formData.message}\n`;
    msg += `--------------------------------\n`;
    msg += `Please let me know venue availability and arrangement details.`;
    return msg;
  };

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name.trim() && !formData.phone.trim()) {
      setErrorMsg('Please enter your name or contact number before connecting on WhatsApp.');
      return;
    }
    const message = constructWhatsAppMessage();
    const url = BUSINESS_INFO.whatsappUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    
    // Smooth user feedback
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <section
      id="enquiry"
      className="relative bg-[#0B0B0B] py-24 sm:py-32 border-b border-white/5 scroll-mt-12"
    >
      {/* Visual background texture */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-3 block">
            RESERVATIONS & CELEBRATION INQUIRIES
          </span>
          <h2
            id="enquiry-main-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] tracking-tight mb-4"
          >
            Plan Your Celebration
          </h2>
          <div className="w-12 h-[1px] bg-[#D6B56C] mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#FAF8F3]/70 font-light">
            Share your preferred dates and event details. Our hospitality team is dedicated to curating an extraordinary experience for you and your guests.
          </p>
        </div>

        {/* Glass Booking Panel Container */}
        <div className="relative bg-[#121212]/90 border border-[#D6B56C]/25 shadow-2xl backdrop-blur-xl p-6 sm:p-12">
          
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#D6B56C]/10 border border-[#D6B56C] flex items-center justify-center text-[#D6B56C] mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] mb-3">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm sm:text-base text-[#FAF8F3]/80 font-light max-w-md mb-8">
                Your celebration inquiry has been recorded. Our team will review the date ({formData.eventDate || 'upcoming'}) and contact you at <strong className="text-[#D6B56C]">{formData.phone}</strong> promptly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs uppercase tracking-luxury font-semibold inline-flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Continue on WhatsApp</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3 border border-white/20 hover:border-[#D6B56C] text-[#FAF8F3] text-xs uppercase tracking-luxury font-medium inline-flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D6B56C]" />
                  <span>Call Us Directly</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs text-[#D6B56C] underline tracking-wider hover:text-[#FAF8F3]"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-900/30 border border-red-500/50 text-red-200 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs uppercase tracking-luxury text-[#FAF8F3]/80 mb-2 font-medium"
                  >
                    Your Name <span className="text-[#D6B56C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="enquiry-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Singh"
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 focus:border-[#D6B56C] focus:outline-none text-[#FAF8F3] text-sm transition-colors placeholder:text-white/25"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-xs uppercase tracking-luxury text-[#FAF8F3]/80 mb-2 font-medium"
                  >
                    Phone Number <span className="text-[#D6B56C]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 focus:border-[#D6B56C] focus:outline-none text-[#FAF8F3] text-sm transition-colors placeholder:text-white/25"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label
                    htmlFor="enquiry-date"
                    className="block text-xs uppercase tracking-luxury text-[#FAF8F3]/80 mb-2 font-medium"
                  >
                    Preferred Event Date
                  </label>
                  <input
                    type="date"
                    id="enquiry-date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 focus:border-[#D6B56C] focus:outline-none text-[#FAF8F3] text-sm transition-colors [color-scheme:dark]"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label
                    htmlFor="enquiry-type"
                    className="block text-xs uppercase tracking-luxury text-[#FAF8F3]/80 mb-2 font-medium"
                  >
                    Occasion / Event Type
                  </label>
                  <select
                    id="enquiry-type"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0B0B0B] border border-white/15 focus:border-[#D6B56C] focus:outline-none text-[#FAF8F3] text-sm transition-colors"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiry-guests"
                    className="block text-xs uppercase tracking-luxury text-[#FAF8F3]/80 mb-2 font-medium"
                  >
                    Estimated Number of Guests
                  </label>
                  <input
                    type="text"
                    id="enquiry-guests"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 300 - 500 Guests"
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 focus:border-[#D6B56C] focus:outline-none text-[#FAF8F3] text-sm transition-colors placeholder:text-white/25"
                  />
                </div>

                {/* Message / Special Request */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="enquiry-message"
                    className="block text-xs uppercase tracking-luxury text-[#FAF8F3]/80 mb-2 font-medium"
                  >
                    Message / Special Requests
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide any specific requirements, timing preference, or questions about the venue..."
                    className="w-full px-4 py-3 bg-black/40 border border-white/15 focus:border-[#D6B56C] focus:outline-none text-[#FAF8F3] text-sm transition-colors placeholder:text-white/25 resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 border-t border-white/10">
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  className="w-full sm:w-1/2 py-3.5 px-6 bg-[#D6B56C] hover:bg-[#E8D39E] text-[#0B0B0B] text-xs uppercase tracking-luxury font-semibold transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#0B0B0B]" />
                  <span>Send Enquiry</span>
                </button>

                <button
                  type="button"
                  id="enquiry-whatsapp-btn"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full sm:w-1/2 py-3.5 px-6 bg-[#25D366]/90 hover:bg-[#25D366] text-black text-xs uppercase tracking-luxury font-semibold transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

              {/* Direct Call Strip */}
              <div className="mt-4 pt-4 text-center border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F3]/60">
                <span>Prefer to speak directly with the venue team?</span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-[#D6B56C] hover:text-[#FAF8F3] font-semibold tracking-wider flex items-center space-x-1.5 mt-2 sm:mt-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone} (Open 24 Hours)</span>
                </a>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};
