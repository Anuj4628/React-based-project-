import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { companyInfo } from '@/data/company';

/**
 * Page 2: Contact Information Section
 * Heading: We're Here to Help You
 * Top Row: Call Our Team, Email Us, Business Enquiries
 * Bottom Row: Two-Column Complete Locations (Registered Office & Pune Facility)
 */
export default function ContactInfoCards() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = async (e, text, key) => {
    e.preventDefault();
    e.stopPropagation();

    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch (err) {
        console.warn('Clipboard writeText failed', err);
      }
    }

    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (err) {
        console.error('Fallback copy error', err);
      }
    }

    if (success) {
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2000);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="contact-cards"
      aria-label="Contact Information - MF Industrial Solutions"
      className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              02 — CONTACT INFORMATION
            </span>
          </div>

          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] mb-4">
            WE'RE HERE TO <span className="text-[#C10A0E]">HELP YOU</span>
          </h2>

          <p className="text-[#4A5568] text-[15.5px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Connect with MF Industrial Solutions for your steel fabrication, manufacturing and galvanizing requirements. Our team is ready to assist you with product enquiries, technical discussions and project requirements.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* ROW 1: PRIMARY CONTACT CARDS (3-COLUMN BALANCED DESKTOP GRID)       */}
        {/* ------------------------------------------------------------------ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8 lg:mb-10">
          
          {/* CARD 1: CALL OUR TEAM */}
          <div className="group relative rounded-3xl bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] border-2 border-red-100 hover:border-red-300 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C10A0E] bg-white px-2.5 py-1 rounded-md border border-red-200">
                  DIRECT PHONE
                </span>
              </div>

              <h3 className="font-condensed font-extrabold uppercase text-[20px] sm:text-[22px] text-[#0C0C0C] tracking-tight mb-2">
                CALL OUR TEAM
              </h3>
              <p className="text-[13.5px] text-slate-600 mb-4 leading-relaxed">
                Speak directly with our technical support and commercial project managers.
              </p>

              <div className="p-3 bg-white rounded-xl border border-red-100 mb-3 flex items-center justify-between gap-2 shadow-xs">
                <a
                  href={`tel:${companyInfo.contact.phoneRaw}`}
                  className="font-bold text-[15px] sm:text-[16px] text-[#0C0C0C] hover:text-[#C10A0E] transition-colors truncate"
                  title={companyInfo.contact.phone}
                >
                  {companyInfo.contact.phone}
                </a>
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, companyInfo.contact.phone, 'card-phone')}
                  aria-label="Copy phone"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#C10A0E] hover:bg-red-50 transition-colors"
                >
                  {copiedKey === 'card-phone' ? (
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-3.5 border-t border-red-200/60 flex items-center justify-between text-[12px] text-slate-500 font-medium">
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              <a
                href={`tel:${companyInfo.contact.phoneRaw}`}
                className="font-bold text-[#C10A0E] inline-flex items-center gap-1 hover:underline"
              >
                <span>Call Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 2: EMAIL US */}
          <div className="group relative rounded-3xl bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] border-2 border-red-100 hover:border-red-300 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C10A0E] bg-white px-2.5 py-1 rounded-md border border-red-200">
                  OFFICIAL INBOX
                </span>
              </div>

              <h3 className="font-condensed font-extrabold uppercase text-[20px] sm:text-[22px] text-[#0C0C0C] tracking-tight mb-2">
                EMAIL US
              </h3>
              <p className="text-[13.5px] text-slate-600 mb-4 leading-relaxed">
                Send your RFQs, CAD drawings (PDF/DWG), and structural bill of materials.
              </p>

              <div className="p-3 bg-white rounded-xl border border-red-100 mb-3 flex items-center justify-between gap-2 shadow-xs">
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="font-semibold text-[13px] text-[#0C0C0C] hover:text-[#C10A0E] transition-colors truncate"
                  title={companyInfo.contact.email}
                >
                  {companyInfo.contact.email}
                </a>
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, companyInfo.contact.email, 'card-email')}
                  aria-label="Copy email"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#C10A0E] hover:bg-red-50 transition-colors shrink-0"
                >
                  {copiedKey === 'card-email' ? (
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-3.5 border-t border-red-200/60 flex items-center justify-between text-[12px] text-slate-500 font-medium">
              <span>Response: &lt; 24 Business Hours</span>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="font-bold text-[#C10A0E] inline-flex items-center gap-1 hover:underline"
              >
                <span>Write Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CARD 3: BUSINESS ENQUIRIES */}
          <div className="group relative rounded-3xl bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] border-2 border-red-100 hover:border-red-300 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C10A0E] bg-white px-2.5 py-1 rounded-md border border-red-200">
                  PROJECT DESK
                </span>
              </div>

              <h3 className="font-condensed font-extrabold uppercase text-[20px] sm:text-[22px] text-[#0C0C0C] tracking-tight mb-2">
                BUSINESS ENQUIRIES
              </h3>
              <p className="text-[13.5px] text-slate-600 mb-4 leading-relaxed">
                Discuss custom steel fabrication, puddle flanges, gratings, and galvanizing requirements.
              </p>

              <div className="mb-3">
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-[13.5px] font-bold transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-3.5 border-t border-red-200/60 flex items-center justify-between text-[12px] text-slate-500 font-medium">
              <span>Direct Mobile Chat</span>
              <button
                type="button"
                onClick={() => scrollToSection('enquiry-form')}
                className="font-bold text-[#C10A0E] inline-flex items-center gap-1 hover:underline"
              >
                <span>Fill Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* ROW 2: COMPLETE LOCATION CARDS (2-COLUMN BALANCED DESKTOP GRID)     */}
        {/* ------------------------------------------------------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* LOCATION CARD 1: REGISTERED OFFICE (BHIWANDI / THANE) */}
          <div className="group relative rounded-3xl bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] border-2 border-red-100 hover:border-red-300 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C10A0E]">
                      LOCATION 1 — HEAD OFFICE
                    </span>
                    <h3 className="font-condensed font-extrabold uppercase text-[20px] sm:text-[23px] text-[#0C0C0C] tracking-tight leading-tight">
                      REGISTERED OFFICE (BHIWANDI / THANE)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Complete Address - No Shortening, No Clipping */}
              <div className="p-4 sm:p-5 bg-white rounded-2xl border border-red-100 mb-4 shadow-xs">
                <p className="font-bold text-[#0C0C0C] text-[15px] sm:text-[16px] mb-1.5 tracking-tight">
                  MF Industrial Solutions Pvt. Ltd.
                </p>
                <address className="not-italic text-[14px] sm:text-[14.5px] leading-relaxed text-slate-700 space-y-0.5">
                  <p>1st Floor, Flat No. 104, H. No. 65,</p>
                  <p>Abdul Shakoor Apartment, Wing A,</p>
                  <p>Bangalpura, Dandekarwadi, Bhiwandi,</p>
                  <p>District Thane, Maharashtra – 421302, India.</p>
                </address>
              </div>
            </div>

            <div className="pt-4 border-t border-red-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12.5px]">
              <span className="text-slate-500 font-medium">
                Working Hours: Mon – Sat (9:00 AM – 7:00 PM)
              </span>
              <a
                href={companyInfo.primaryAddress.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-red-200 text-[#C10A0E] font-bold hover:bg-[#C10A0E] hover:text-white transition-colors shadow-xs self-start sm:self-auto"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LOCATION CARD 2: PUNE FACILITY (CHAKAN / KHED) */}
          <div className="group relative rounded-3xl bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] border-2 border-red-100 hover:border-red-300 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#C10A0E]">
                      LOCATION 2 — PUNE BRANCH
                    </span>
                    <h3 className="font-condensed font-extrabold uppercase text-[20px] sm:text-[23px] text-[#0C0C0C] tracking-tight leading-tight">
                      PUNE FACILITY (CHAKAN / KHED)
                    </h3>
                  </div>
                </div>
              </div>

              {/* Complete Address - No Shortening, No Clipping */}
              <div className="p-4 sm:p-5 bg-white rounded-2xl border border-red-100 mb-4 shadow-xs">
                <p className="font-bold text-[#0C0C0C] text-[15px] sm:text-[16px] mb-1.5 tracking-tight">
                  MF Industrial Solutions – Pune
                </p>
                <address className="not-italic text-[14px] sm:text-[14.5px] leading-relaxed text-slate-700 space-y-0.5">
                  <p>Gat No. 283, Nanekarwadi, Chakan,</p>
                  <p>Taluka Khed,</p>
                  <p>District Pune, Maharashtra – 410501, India.</p>
                </address>
              </div>
            </div>

            <div className="pt-4 border-t border-red-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[12.5px]">
              <span className="text-slate-500 font-medium">
                Working Hours: Mon – Sat (9:00 AM – 7:00 PM)
              </span>
              <a
                href={companyInfo.puneAddress.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-red-200 text-[#C10A0E] font-bold hover:bg-[#C10A0E] hover:text-white transition-colors shadow-xs self-start sm:self-auto"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
