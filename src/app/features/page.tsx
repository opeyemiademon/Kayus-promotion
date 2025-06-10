import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureModules from '@/components/features/FeatureModules';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'Features | KAYUS School Management System',
  description: 'Explore the comprehensive features of KAYUS School Management System - a complete solution for schools in Nigeria.',
};

export default function FeaturesPage() {
  return (
    <MainLayout>
      <FeatureHero />
      <FeatureModules />
      <CallToAction />
    </MainLayout>
  );
}
