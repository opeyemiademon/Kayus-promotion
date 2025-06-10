"use client";
import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import VideoIntroduction from '@/components/home/VideoIntroduction';
import ValueProposition from '@/components/home/ValueProposition';
import FeaturesHighlight from '@/components/home/FeaturesHighlight';
import BenefitsComparison from '@/components/home/BenefitsComparison';
import StatisticsCounter from '@/components/home/StatisticsCounter';
import Testimonials from '@/components/home/Testimonials';
import ClientLogos from '@/components/home/ClientLogos';
import FreeDeploymentBanner from '@/components/home/FreeDeploymentBanner';
import ProductPortfolio from '@/components/home/ProductPortfolio';
import SecurityBadges from '@/components/common/SecurityBadges';
import CallToAction from '@/components/home/CallToAction';
import ImageModal from '@/components/common/ImageModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <MainLayout>
      <ImageModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <HeroSection />
      <VideoIntroduction />
      <ValueProposition />
      <FeaturesHighlight />
      <BenefitsComparison />
      <FreeDeploymentBanner />
      <StatisticsCounter />
      <SecurityBadges />
      <ClientLogos />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
}
