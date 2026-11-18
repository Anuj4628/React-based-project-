import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, PhoneCall, Mail, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * Page 1: Contact Hero Section
 * Eyebrow: GET IN TOUCH
 * Main Heading: Let's Start a Conversation
 */
export default function ContactHero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      aria-label="Contact MF Industrial Solutions"
      className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-16 lg:pb-22 border-b border-red-100 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-red-200/30 blur-[150px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold uppercase tracking-wider text-neutral-500">
            <li>
              <Link to="/" className="hover:text-[#C10A0E] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </li>
            <li className="text-[#C10A0E] font-bold">Contact Us</li>
          </ol>
        </nav>

        {/* Hero 2-Column Balanced Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & Content (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-4 sm:mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C10A0E] animate-pulse" />
              <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[36px] sm:text-[46px] lg:text-[54px] xl:text-[60px] text-[#0C0C0C] mb-4 sm:mb-5">
              LET'S START A <br className="hidden sm:inline" />
              <span className="text-[#C10A0E]">CONVERSATION</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-[15.5px] sm:text-[17px] text-[#4A5568] leading-relaxed max-w-2xl font-normal mb-8 sm:mb-10">
              Whether you need custom steel fabrication, precision plate cutting, drilling, or galvanizing solutions, our team is here to understand your requirements and help you move your project forward.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                type="button"
                onClick={() => scrollToSection('contact-cards')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C10A0E] text-white font-bold text-[14px] uppercase tracking-wider shadow-lg shadow-red-950/20 hover:bg-[#A5080C] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C10A0E]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CONTACT OUR TEAM</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('enquiry-form')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white border-2 border-red-200 text-[#0C0C0C] font-bold text-[14px] uppercase tracking-wider shadow-sm hover:border-[#C10A0E] hover:text-[#C10A0E] hover:bg-red-50/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C10A0E]"
              >
                <Mail className="w-4 h-4 text-[#C10A0E]" />
                <span>SEND AN ENQUIRY</span>
              </button>
            </div>

            {/* Value Highlights Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-6 border-t border-red-200/80">
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-3 rounded-xl border border-red-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C10A0E] shrink-0" />
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C] tracking-tight">
                  Direct Drawing Evaluation
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-3 rounded-xl border border-red-100 shadow-sm">
                <Headphones className="w-4 h-4 text-[#C10A0E] shrink-0" />
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C] tracking-tight">
                  Responsive Engineering
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-3 rounded-xl border border-red-100 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#C10A0E] shrink-0" />
                <span className="text-[12.5px] sm:text-[13px] font-bold text-[#0C0C0C] tracking-tight">
                  Reliable Commercial Pricing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Support Team Image (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-red-100 shadow-2xl shadow-red-950/15 group">
              <picture>
                <source srcSet="/images/contact/contact-hero.webp" type="image/webp" />
                <img
                  src="/images/contact/contact-hero.jpg"
                  alt="MF Industrial Solutions Customer Support & Technical Team"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Support Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-red-100 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C10A0E] text-white flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                      DEDICATED SUPPORT TEAM
                    </span>
                    <span className="block text-[13.5px] sm:text-[14.5px] font-extrabold text-[#0C0C0C] tracking-tight">
                      Quick Technical Response &amp; Drawing Review
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
