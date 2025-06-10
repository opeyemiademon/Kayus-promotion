import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DemoVideosSection from '@/components/videos/DemoVideosSection';

export const metadata = {
  title: 'Demo Videos | KAYUS School Management System',
  description: 'Watch comprehensive demo videos of KAYUS School Management System modules and features in action.',
};

export default function VideosPage() {
  return (
    <MainLayout>
      <DemoVideosSection />
    </MainLayout>
  );
}
