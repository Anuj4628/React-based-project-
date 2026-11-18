import React from 'react';
import { FileSearch, ShieldCheck, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const confidenceBlocks = [
  {
    number: '01',
    title: 'CLEAR REQUIREMENT UNDERSTANDING',
    description:
      'We value understanding product specifications, application needs, and customer expectations before proceeding with a requirement.',
    icon: FileSearch,
    badge: 'SPECIFICATION ALIGNMENT',
  },
  {
    number: '02',
    title: 'RESPONSIBLE APPROACH',
    description:
      'We emphasize attention to relevant product details and a practical approach to industrial requirements.',
    icon: ShieldCheck,
    badge: 'PROCESS DISCIPLINE',
  },
  {
    number: '03',
    title: 'CUSTOMER CONFIDENCE',
    description:
      'Transparent communication and dependable support are important to building lasting professional relationships.',
    icon: Users,
    badge: 'TRANSPARENT PARTNERSHIP',
  },
];

/**
 * Section 4: Quality, Consistency & Customer Confidence ("OUR STANDARD OF COMMITMENT")
 * Main Heading: Building Confidence Through Consistency and Attention
 */
export default function QualityConfidence() {
  return (
    <section
      aria-label="Quality, Consistency & Customer Confidence - MF Industrial Solutions"
      className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              04 — OUR STANDARD OF COMMITMENT
            </span>
          </div>

          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] mb-4">
            BUILDING CONFIDENCE THROUGH <br className="hidden sm:inline" />
            <span className="text-[#C10A0E]">CONSISTENCY AND ATTENTION</span>
          </h2>

          <p className="text-[#4A5568] text-[15.5px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            We believe dependable industrial relationships are built through clear expectations, attention to requirements, and consistent communication. Our focus is to understand what each customer needs and approach those requirements with care and responsibility.
          </p>
        </div>

        {/* 2-Column Split: 3 Content Blocks & Industrial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: 3 Numbered Content Blocks (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {confidenceBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.number}
                  className="group relative rounded-2xl bg-[#FAF0F0]/60 hover:bg-[#FAF0F0] border border-red-100 hover:border-red-300 p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                    {/* Number & Icon Pill */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-center shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-condensed font-extrabold text-[18px] text-[#C10A0E] tracking-wider">
                        {block.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C10A0E]">
                          {block.badge}
                        </span>
                      </div>

                      <h3 className="font-condensed font-extrabold uppercase text-[19px] sm:text-[21px] text-[#0C0C0C] tracking-tight mb-2">
                        {block.title}
                      </h3>

                      <p className="text-[14.5px] sm:text-[15px] text-[#4A5568] leading-relaxed font-normal">
                        {block.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Industrial Workshop / Finished Components Photo (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-2xl shadow-slate-900/10 group">
              <picture>
                <source srcSet="/images/quality/quality-confidence.webp" type="image/webp" />
                <img
                  src="/images/quality/quality-confidence.jpg"
                  alt="Quality assurance verification and finished galvanized steel components"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Quality Callout Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C10A0E] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                      INSPECTION DISCIPLINE
                    </span>
                    <span className="block text-[13.5px] sm:text-[14.5px] font-extrabold text-[#0C0C0C] tracking-tight">
                      Consistency Across Every Requirement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
