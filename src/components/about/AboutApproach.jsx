import React from 'react';
import { Layers, ShieldCheck, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const approachCards = [
  {
    number: '01',
    title: 'UNDERSTANDING REQUIREMENTS',
    description:
      'Understanding material specifications and application needs is an important part of supporting industrial customers.',
    icon: Layers,
    badge: 'SPECIFICATION ALIGNMENT',
    highlight: 'Application-Specific Focus',
  },
  {
    number: '02',
    title: 'QUALITY-FOCUSED APPROACH',
    description:
      'We emphasize attention to material requirements, process considerations, and consistency throughout the customer engagement.',
    icon: ShieldCheck,
    badge: 'PROCESS DISCIPLINE',
    highlight: 'Rigorous Process Standards',
  },
  {
    number: '03',
    title: 'CUSTOMER COMMITMENT',
    description:
      'We value transparent communication, responsive support, and long-term professional relationships with our customers.',
    icon: Users,
    badge: 'COMMUNICATION & SUPPORT',
    highlight: 'Long-Term Partnership',
  },
];

/**
 * Section 4: Our Approach & Commitment ("OUR APPROACH")
 */
export default function AboutApproach() {
  return (
    <section
      aria-label="Our Approach - MF Industrial Solutions"
      className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              04 — OUR APPROACH
            </span>
          </div>

          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] mb-4">
            UNDERSTANDING REQUIREMENTS. <br className="hidden sm:inline" />
            <span className="text-[#C10A0E]">DELIVERING RELIABLE SUPPORT.</span>
          </h2>

          <p className="text-[#4A5568] text-[15.5px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Every industrial requirement is different. We believe in understanding the application, maintaining clear communication, and focusing on dependable solutions that align with customer expectations.
          </p>
        </div>

        {/* 3 Balanced Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-14 sm:mb-18">
          {approachCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="relative bg-[#FAF0F0]/60 hover:bg-[#FAF0F0] border border-red-100 hover:border-red-300 rounded-3xl p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-red-950/5 group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[28px] sm:text-[32px] font-condensed font-extrabold text-[#C10A0E]/30 group-hover:text-[#C10A0E] transition-colors">
                      {card.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-red-200/80 shadow-sm flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C10A0E] block mb-2">
                    {card.badge}
                  </span>

                  {/* Heading */}
                  <h3 className="text-[20px] sm:text-[22px] font-condensed font-extrabold uppercase tracking-tight text-[#0C0C0C] mb-3">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#4A5568] font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-5 mt-6 border-t border-red-200/60 flex items-center gap-2 text-[12.5px] font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C10A0E] shrink-0" />
                  <span>{card.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industrial Precision Showcase Banner with Generated Close-up Image */}
        <div className="bg-[#FAF0F0] rounded-3xl border border-red-200/80 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12">
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E] block mb-2">
              MATERIAL &amp; PROCESSING QUALITY
            </span>
            <h3 className="text-[24px] sm:text-[30px] font-condensed font-extrabold uppercase text-[#0C0C0C] tracking-tight mb-3">
              ATTENTION TO DETAIL AT EVERY STAGE
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#4A5568] leading-relaxed max-w-xl font-normal mb-5">
              From dimensional accuracy and surface preparation to zinc coating adhesion and final packing, our focus remains on providing reliable components that withstand demanding industrial conditions.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold text-[#0C0C0C]">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-red-200/70 shadow-sm">
                Accurate Tolerances
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-red-200/70 shadow-sm">
                Uniform Galvanized Coating
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-red-200/70 shadow-sm">
                Disciplined Inspection
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 h-[260px] sm:h-[300px] lg:h-full relative overflow-hidden group">
            <picture>
              <source srcSet="/images/about/about-approach-components.webp" type="image/webp" />
              <img
                src="/images/about/about-approach-components.jpg"
                alt="Precision Hot-Dip Galvanized Industrial Steel Components"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
