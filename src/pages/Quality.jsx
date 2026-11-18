import React from 'react';
import SEO from '@/components/common/SEO';
import { seoRoutes, generateBreadcrumbSchema } from '@/utils/seoConfig';
import QualityHero from '@/components/quality/QualityHero';
import QualityCommitment from '@/components/quality/QualityCommitment';
import QualityApproach from '@/components/quality/QualityApproach';
import QualityConfidence from '@/components/quality/QualityConfidence';
import CTASection from '@/components/common/CTASection';

/**
 * Quality Page - MF Industrial Solutions
 * 
 * 4 Main Content Sections:
 * 1. Quality Hero Section
 * 2. Our Quality Commitment
 * 3. Quality Control & Inspection Approach
 * 4. Quality, Consistency & Customer Confidence
 * 
 * Followed by:
 * 5. CTA Section (Reused from Homepage)
 * (Footer is rendered automatically via MainLayout)
 */
export default function Quality() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Quality', url: '/quality' },
  ];

  return (
    <>
      <SEO
        title={seoRoutes.quality.title}
        description={seoRoutes.quality.description}
        canonical={seoRoutes.quality.canonical}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* SECTION 1: QUALITY HERO */}
      <QualityHero />

      {/* SECTION 2: OUR QUALITY COMMITMENT */}
      <QualityCommitment />

      {/* SECTION 3: QUALITY CONTROL & INSPECTION APPROACH */}
      <QualityApproach />

      {/* SECTION 4: QUALITY, CONSISTENCY & CUSTOMER CONFIDENCE */}
      <QualityConfidence />

      {/* SECTION 5: CTA SECTION (Reused from Homepage) */}
      <CTASection />
    </>
  );
}
