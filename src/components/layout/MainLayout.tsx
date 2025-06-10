"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../common/ChatWidget';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default MainLayout;
