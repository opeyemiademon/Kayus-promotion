"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark to-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your School's Operations?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join over 120+ schools across Nigeria that have revolutionized their administrative processes with KAYUS School Management System.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn bg-white text-primary hover:bg-neutral-100 font-medium">
                Request Free Demo
              </Link>
              <Link href="/pricing" className="btn bg-accent hover:bg-accent-dark text-white font-medium">
                View Pricing Plans
              </Link>
              <Link href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
