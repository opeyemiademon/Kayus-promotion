"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaRocket, FaUserCog, FaDatabase, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';

const FreeDeploymentBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const benefits = [
    { icon: <FaRocket />, text: 'Complete system setup' },
    { icon: <FaUserCog />, text: 'Staff training included' },
    { icon: <FaDatabase />, text: 'Data migration assistance' },
    { icon: <FaHeadset />, text: 'Technical support' },
    { icon: <FaMoneyBillWave />, text: 'No upfront costs' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-accent to-accent-dark text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-16 left-1/4 w-24 h-24 rounded-full bg-white/10"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
            LIMITED TIME OFFER
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-pulse">
            FREE DEPLOYMENT FOR ONE TERM!
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience KAYUS risk-free with our complimentary setup - see the difference before you commit.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-white text-2xl mb-2 flex justify-center">
                {benefit.icon}
              </div>
              <p className="text-sm font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link 
            href="/contact" 
            className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-neutral-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Claim Your Free Setup
          </Link>
          <p className="text-white/70 text-sm mt-4">
            *Offer valid for schools with at least 100 students. Terms and conditions apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeDeploymentBanner;
