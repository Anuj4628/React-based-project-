import React from 'react';
import SEO from '@/components/common/SEO';
import { seoRoutes, generateBreadcrumbSchema } from '@/utils/seoConfig';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactLocationsAndForm from '@/components/contact/ContactLocationsAndForm';
import ContactWhyConnect from '@/components/contact/ContactWhyConnect';
import CTASection from '@/components/common/CTASection';

/**
 * Contact Us Page - MF Industrial Solutions
 * 
 * 4 Main Content Sections:
 * 1. Contact Hero Section (Split layout with realistic Indian industrial support team photo)
 * 2. Contact Information (4 cards: Call, Email, Business Enquiries, Dual Locations)
 * 3. Location Map + Enquiry Form (50/50 split with dual map selector + validated form with WhatsApp/Gmail modal)
 * 4. Why Connect with MF Industrial Solutions (4 feature cards + project consultation strip)
 * 
 * Followed by:
 * 5. CTA Section (Reused from Homepage)
 * (Footer is rendered automatically via MainLayout and contains both Bhiwandi and Pune addresses)
 */
export default function Contact() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ];

  return (
    <>
      <SEO
        title={seoRoutes.contact.title}
        description={seoRoutes.contact.description}
        canonical={seoRoutes.contact.canonical}
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* SECTION 1: CONTACT HERO */}
      <ContactHero />

      {/* SECTION 2: CONTACT INFORMATION */}
      <ContactInfoCards />

      {/* SECTION 3: LOCATION MAP + ENQUIRY FORM */}
      <ContactLocationsAndForm />

      {/* SECTION 4: WHY CONNECT WITH US */}
      <ContactWhyConnect />

      {/* SECTION 5: CTA SECTION (Reused from Homepage) */}
      <CTASection />
    </>
  );
}
