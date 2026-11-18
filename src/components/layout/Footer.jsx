import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Copy, Check, ShieldCheck, ExternalLink } from 'lucide-react';
import { companyInfo } from '@/data/company';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Products', href: '/products' },
  { name: 'Quality', href: '/quality' },
  { name: 'Why Choose Us', href: '/#why-choose-us' },
  { name: 'Why Galvanizing', href: '/#why-galvanizing' },
  { name: 'Industries We Serve', href: '/#industries' },
  { name: 'Our Clients', href: '/#clients' },
  { name: 'Countries We Export To', href: '/#export-countries' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
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
        console.warn('Clipboard writeText failed, using fallback', err);
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

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#111625] text-slate-300 border-t border-[#1E2638] pt-16 pb-10 sm:pt-20 sm:pb-12 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* ============================================================== */}
        {/* MAIN 4-COLUMN BALANCED INDUSTRIAL GRID                        */}
        {/* Column allocation on desktop: 3 - 2 - 3.5 - 3.5 = 12 cols      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-7 xl:gap-9 pb-14 sm:pb-16 items-start">

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 1: Company Profile (Span 3)                          */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h3 className="text-white font-condensed font-extrabold text-[19px] sm:text-[21px] tracking-wider uppercase mb-6 relative pb-2.5 w-full">
              COMPANY OVERVIEW
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-[#C10A0E]" />
            </h3>

            {/* Elevated Company Logo Card */}
            <Link
              to="/"
              className="inline-flex items-center px-5 py-3 rounded-2xl bg-white shadow-md border border-slate-700/30 mb-5 hover:opacity-95 transition-opacity"
              aria-label="MF Industrial Solutions Home"
            >
              <img
                src="/images/logo/logo.png"
                alt="MF Industrial Solutions Logo"
                className="h-12 sm:h-13 w-auto object-contain"
                loading="lazy"
              />
            </Link>

            {/* Substantial Company Description */}
            <p className="text-[14.5px] leading-relaxed text-slate-300/95 font-normal mb-5">
              MF Industrial Solutions is committed to serving industrial requirements with dependable steel fabrication and galvanizing solutions. We focus on quality, reliability, and building lasting business relationships.
            </p>

            {/* Quality Standard Highlight */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#182032] border border-[#26334D] text-[12.5px] font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#C10A0E] shrink-0" />
              <span>Certified Galvanizing Standards</span>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 2: Quick Links (Span 2)                              */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-condensed font-extrabold text-[19px] sm:text-[21px] tracking-wider uppercase mb-6 relative pb-2.5 w-full">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-[#C10A0E]" />
            </h3>

            <ul className="space-y-2.5 text-[14.5px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4 text-[#C10A0E] group-hover:text-red-400 transition-colors shrink-0" />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-2 text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4 text-[#C10A0E] group-hover:text-red-400 transition-colors shrink-0" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 3: Contact Information & Copy Buttons (Span 3.5)     */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-3 xl:col-span-3">
            <h3 className="text-white font-condensed font-extrabold text-[19px] sm:text-[21px] tracking-wider uppercase mb-6 relative pb-2.5 w-full">
              CONTACT DIRECTORY
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-[#C10A0E]" />
            </h3>

            <div className="space-y-3">
              {/* Row 1: Phone */}
              <div className="bg-[#182032] border border-[#26334D] hover:border-red-900/40 rounded-xl p-3 flex items-center justify-between gap-3 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#202B42] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C10A0E]" />
                </div>

                <div className="flex-1 min-w-0 pr-1">
                  <span className="block text-[10.5px] font-bold tracking-wider uppercase text-slate-400 mb-0.5">
                    PHONE NUMBER
                  </span>
                  <a
                    href={`tel:${companyInfo.contact.phoneRaw}`}
                    className="block text-[14px] font-semibold text-white hover:text-red-400 transition-colors truncate"
                    title={companyInfo.contact.phone}
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>

                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, companyInfo.contact.phone, 'phone')}
                    aria-label="Copy Phone Number"
                    title="Copy Phone Number"
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E] ${copiedKey === 'phone'
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                        : 'bg-[#202B42] hover:bg-[#C10A0E] text-slate-300 hover:text-white border border-[#2E3C59] hover:border-[#C10A0E]'
                      }`}
                  >
                    {copiedKey === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </button>

                  {copiedKey === 'phone' && (
                    <span className="absolute bottom-full right-0 mb-1.5 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10.5px] font-bold whitespace-nowrap shadow-lg animate-in fade-in duration-150 z-20">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: WhatsApp */}
              <div className="bg-[#182032] border border-[#26334D] hover:border-emerald-900/40 rounded-xl p-3 flex items-center justify-between gap-3 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#202B42] flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 fill-[#25D366]"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 pr-1">
                  <span className="block text-[10.5px] font-bold tracking-wider uppercase text-slate-400 mb-0.5">
                    WHATSAPP CHAT
                  </span>
                  <a
                    href={`https://wa.me/${companyInfo.contact.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[14px] font-semibold text-white hover:text-emerald-400 transition-colors truncate"
                    title={companyInfo.contact.whatsapp}
                  >
                    {companyInfo.contact.whatsapp}
                  </a>
                </div>

                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, companyInfo.contact.whatsapp, 'whatsapp')}
                    aria-label="Copy WhatsApp Number"
                    title="Copy WhatsApp Number"
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${copiedKey === 'whatsapp'
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                        : 'bg-[#202B42] hover:bg-[#25D366] text-slate-300 hover:text-white border border-[#2E3C59] hover:border-[#25D366]'
                      }`}
                  >
                    {copiedKey === 'whatsapp' ? (
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </button>

                  {copiedKey === 'whatsapp' && (
                    <span className="absolute bottom-full right-0 mb-1.5 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10.5px] font-bold whitespace-nowrap shadow-lg animate-in fade-in duration-150 z-20">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3: Email */}
              <div className="bg-[#182032] border border-[#26334D] hover:border-red-900/40 rounded-xl p-3 flex items-center justify-between gap-3 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#202B42] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#C10A0E]" />
                </div>

                <div className="flex-1 min-w-0 pr-1">
                  <span className="block text-[10.5px] font-bold tracking-wider uppercase text-slate-400 mb-0.5">
                    OFFICIAL EMAIL
                  </span>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="block text-[13px] font-semibold text-white hover:text-red-400 transition-colors truncate"
                    title={companyInfo.contact.email}
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>

                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, companyInfo.contact.email, 'email')}
                    aria-label="Copy Email Address"
                    title="Copy Email Address"
                    className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E] ${copiedKey === 'email'
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                        : 'bg-[#202B42] hover:bg-[#C10A0E] text-slate-300 hover:text-white border border-[#2E3C59] hover:border-[#C10A0E]'
                      }`}
                  >
                    {copiedKey === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                    )}
                  </button>

                  {copiedKey === 'email' && (
                    <span className="absolute bottom-full right-0 mb-1.5 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10.5px] font-bold whitespace-nowrap shadow-lg animate-in fade-in duration-150 z-20">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COLUMN 4: Business Locations (Both Offices) (Span 4)        */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-4 xl:col-span-4">
            <h3 className="text-white font-condensed font-extrabold text-[19px] sm:text-[21px] tracking-wider uppercase mb-6 relative pb-2.5 w-full">
              OUR LOCATIONS
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-[#C10A0E]" />
            </h3>

            <div className="space-y-3.5">
              {/* LOCATION 1: Primary Registered Office */}
              <div className="bg-[#182032] border border-[#26334D] hover:border-red-900/40 rounded-xl p-3.5 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-[#243048]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C10A0E] shrink-0" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white">
                      REGISTERED OFFICE
                    </span>
                  </div>
                  <a
                    href={companyInfo.primaryAddress.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <address className="not-italic text-[13px] leading-relaxed text-slate-300">
                  <p className="font-semibold text-white text-[13.5px] mb-0.5">
                    {companyInfo.primaryAddress.name}
                  </p>
                  <p>1st Floor, Flat 104, H. No. 65, Abdul Shakoor Apt, Wing A,</p>
                  <p>Bangalpura, Dandekarwadi, Bhiwandi, Thane, MH – 421302, India</p>
                </address>
              </div>

              {/* LOCATION 2: Pune Branch / Facility */}
              <div className="bg-[#182032] border border-[#26334D] hover:border-red-900/40 rounded-xl p-3.5 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-[#243048]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C10A0E] shrink-0" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white">
                      PUNE LOCATION
                    </span>
                  </div>
                  <a
                    href={companyInfo.puneAddress.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <address className="not-italic text-[13px] leading-relaxed text-slate-300">
                  <p className="font-semibold text-white text-[13.5px] mb-0.5">
                    {companyInfo.puneAddress.name}
                  </p>
                  <p>Gat No. 283, Nanekarwadi, Chakan,</p>
                  <p>Taluka Khed, District Pune, Maharashtra – 410501, India</p>
                </address>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* BOTTOM BAR: Minimal, Clean, Accurate                           */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-[#1F293D] flex flex-col sm:flex-row items-center justify-between gap-3 text-[13.5px] text-slate-400">
          <p className="text-center sm:text-left">
            &copy; 2026 MF Industrial Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right text-[12.5px] text-slate-500">
            Precision Fabrication &bull; Industrial Galvanizing &bull; ISO Compliant Quality
          </p>
        </div>
      </div>
    </footer>
  );
}
