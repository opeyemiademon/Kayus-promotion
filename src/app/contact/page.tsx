import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import EnhancedContactInfo from '@/components/common/EnhancedContactInfo';
import FaqSection from '@/components/contact/FaqSection';

export const metadata = {
  title: 'Contact Us | KAYUS School Management System',
  description: 'Get in touch with Admotron Solutions to learn how KAYUS School Management System can transform your school operations.',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHero />
      <EnhancedContactInfo />
      <ContactInfo />
      <FaqSection />
    </MainLayout>
  );
}
