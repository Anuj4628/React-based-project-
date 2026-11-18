import React from 'react';
import { Users } from 'lucide-react';
import { clientsData } from '@/data/clientsData';

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative w-full bg-[#FAF0F0] py-14 sm:py-18 lg:py-22 overflow-hidden select-none border-t border-red-100"
      aria-label="Our Clients - MF Industrial Solutions"
    >
      {/* Subtle ambient light red radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-red-200/25 blur-[150px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow Pill Badge matching reference screenshot */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-3">
            <Users className="w-4 h-4 text-[#C10A0E]" />
            <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#0C0C0C]">
              07 — INDUSTRIAL PARTNERSHIPS
            </span>
          </div>

          {/* Large Bold Main Heading */}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-condensed font-extrabold uppercase leading-[1.02] tracking-tight text-[#0C0C0C] mb-2 sm:mb-3">
            OUR CLIENTS
          </h2>

          {/* Supporting Headline */}
          <p className="text-[15px] sm:text-[17px] font-bold text-[#C10A0E] tracking-tight leading-snug mb-2.5">
            Trusted Relationships. Strong Industrial Partnerships.
          </p>

          {/* Introduction Paragraph */}
          <p className="text-[13px] sm:text-[14px] text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            Strong partnerships are built on reliability, consistent quality, and a commitment to customer requirements. We value the relationships we build with our clients across diverse industrial sectors.
          </p>
        </div>

        {/* ============================================================== */}
        {/* CLIENT LOGO CARDS (Strong Brand Red Background per prompt)     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="group bg-[#C10A0E] rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-between shadow-md shadow-red-950/10 hover:shadow-2xl hover:shadow-red-900/30 border border-white/25 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo Presentation Stage with clean white backing to preserve original logo colors */}
              <div className="w-full h-[68px] sm:h-[76px] bg-white rounded-xl flex items-center justify-center p-2.5 sm:p-3 shadow-inner">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-full max-w-[88%] object-contain object-center transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Company Name in High-Contrast Crisp White Typography */}
              <span className="text-white text-[12px] sm:text-[13px] font-bold tracking-tight text-center mt-2.5 truncate w-full block">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
