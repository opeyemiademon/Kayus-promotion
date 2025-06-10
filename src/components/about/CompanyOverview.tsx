"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CompanyOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Admotron Solutions was founded by a team of young, passionate engineers with a vision to revolutionize educational technology in Nigeria. Our journey began with a simple mission: to help schools transition from paper-based processes to efficient digital systems.            
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              What started as a small project for a local school quickly evolved into KAYUS - a comprehensive school management system that now serves over 120 educational institutions across Nigeria.
            </p>
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-primary mr-4"></div>
              <p className="text-xl font-bold italic text-primary">"Bit by Bit, towards advanced technology"</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Commitment</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    We are dedicated to providing reliable, user-friendly, and affordable technology solutions that address the unique challenges faced by Nigerian schools.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Our Approach</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    We believe in continuous improvement and innovation. Our development process is guided by direct feedback from educators, administrators, and students.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
              {/* Placeholder for company image */}
              <div className="aspect-w-16 aspect-h-9 bg-neutral-100 dark:bg-neutral-700 p-4 flex items-center justify-center">
               
               <img src="/images/kayus/board.png" alt="Admotron Solutions Team" className="w-full h-full object-cover" /> 
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glassmorphism p-4 rounded-lg shadow-lg z-20 max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">120+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Schools Served</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 glassmorphism p-4 rounded-lg shadow-lg z-20">
              <div className="text-center">
                <div className="text-xl font-bold text-secondary">Nigerian Owned</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Local Expertise</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
