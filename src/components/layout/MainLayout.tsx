"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../common/ChatWidget';

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
    <ReactNotifications />
   
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
    </>
  );
};

export default MainLayout;
