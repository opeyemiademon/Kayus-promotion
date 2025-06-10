import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AboutHero from '@/components/about/AboutHero';
import CompanyOverview from '@/components/about/CompanyOverview';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';
import CallToAction from '@/components/home/CallToAction';
import ProductPortfolio from '@/components/home/ProductPortfolio';

export const metadata = {
  title: 'About Us | KAYUS School Management System',
  description: 'Learn about Admotron Solutions, the innovative team behind KAYUS School Management System for Nigerian schools.',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutHero />
      <CompanyOverview />
      <ValuesSection />
      <TeamSection />
      <CallToAction />
    </MainLayout>
  );
}
