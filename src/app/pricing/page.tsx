import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PricingHero from '@/components/pricing/PricingHero';
import PricingPlans from '@/components/pricing/PricingPlans';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import PricingCalculator from '@/components/pricing/PricingCalculator';
import DemoRequest from '@/components/pricing/DemoRequest';

export const metadata = {
  title: 'Pricing & Demo | KAYUS School Management System',
  description: 'Explore flexible pricing options for KAYUS School Management System. Request a free demo to see how it can transform your school operations.',
};

export default function PricingPage() {
  return (
    <MainLayout>
      <PricingHero />
      <PricingPlans />
      <FeatureComparison />
      <PricingCalculator />
      <DemoRequest />
    </MainLayout>
  );
}
