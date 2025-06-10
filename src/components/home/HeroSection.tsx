"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typed from 'typed.js';


const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Automate Your School Operations...',
          'Manage Students Efficiently...',
          'Track Fees and Payments...',
          'Generate Reports Instantly...',
          'Go Paperless Today...'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const heroImage = {
    src: '/images/pic2.png',
    alt: 'Modern School Management Dashboard',
    title: 'Powerful Analytics Dashboard for Nigerian Schools'
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 md:py-28 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                <span ref={typedRef}></span>
              </span>
              <span className="block text-accent-light mt-4">For Nigerian Schools</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              KAYUS School Management System is a comprehensive automation software designed for nursery, primary, and secondary schools in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn bg-accent hover:bg-accent-dark text-white font-medium">
                Request Free Demo
              </Link>
              <Link href="/pricing" className="btn bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium border border-white/30">
                View Pricing
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Feature badges positioned outside the image */}
            <div className="absolute bottom-8 -right-6 glassmorphism p-4 rounded-lg shadow-lg z-30 bg-white dark:bg-neutral-800 backdrop-blur-sm">
              <div className="text-sm font-medium text-primary-dark dark:text-primary-light">Zero-Paper Process</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-300">Efficient & Eco-friendly</div>
            </div>
            <div className="absolute top-8 -left-6 glassmorphism p-4 rounded-lg shadow-lg z-30 bg-white dark:bg-neutral-800 backdrop-blur-sm">
              <div className="text-sm font-medium text-secondary-dark dark:text-secondary-light">Real-time Updates</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-300">Always Stay Informed</div>
            </div>
            
            {/* Main image container */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImage.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{heroImage.title}</h3>
                  <p className="text-white/80">{heroImage.alt}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
