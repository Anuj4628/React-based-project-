import React from 'react';
import SEO from '@/components/common/SEO';
import { seoRoutes, generateBreadcrumbSchema } from '@/utils/seoConfig';
import AboutHero from '@/components/about/AboutHero';
import AboutCompanyOverview from '@/components/about/AboutCompanyOverview';
import AboutMissionVision from '@/components/about/AboutMissionVision';
import AboutApproach from '@/components/about/AboutApproach';
import CTASection from '@/components/common/CTASection';

export default function About() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];

  return (
    <>
      <SEO
        title={seoRoutes.about.title}
        description={seoRoutes.about.description}
        canonical={seoRoutes.about.canonical}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* SECTION 1: HERO */}
      <AboutHero />

      {/* SECTION 2: WHO WE ARE (COMPANY OVERVIEW) */}
      <AboutCompanyOverview />

      {/* SECTION 3: OUR PURPOSE & DIRECTION (MISSION & VISION) */}
      <AboutMissionVision />

      {/* SECTION 4: OUR APPROACH & COMMITMENT */}
      <AboutApproach />

      {/* SECTION 5: CTA SECTION (Reused from Homepage) */}
      <CTASection />
    </>
  );
}
