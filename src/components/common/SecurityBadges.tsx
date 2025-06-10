"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCloud, FaLock, FaShieldAlt, FaDatabase, FaServer } from 'react-icons/fa';

const SecurityBadges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const badges = [
    {
      icon: <FaCloud className="text-blue-500" size={28} />,
      title: 'SECURE CLOUD HOSTING',
      description: '99.9% Uptime Guarantee',
      subtext: 'Hosted on Premium Servers'
    },
    {
      icon: <FaLock className="text-green-500" size={28} />,
      title: 'STRONG SSL ENCRYPTION',
      description: '256-bit SSL Certificate',
      subtext: 'Your Data is Protected'
    },
    {
      icon: <FaShieldAlt className="text-purple-500" size={28} />,
      title: 'ISO CERTIFIED SECURITY',
      description: 'Industry Standard Compliance',
      subtext: 'Regular Security Audits'
    },
    {
      icon: <FaDatabase className="text-amber-500" size={28} />,
      title: 'REGULAR BACKUPS',
      description: 'Automated Daily Backups',
      subtext: 'Quick Data Recovery'
    },
    {
      icon: <FaServer className="text-red-500" size={28} />,
      title: '24/7 MONITORING',
      description: 'Continuous System Oversight',
      subtext: 'Proactive Issue Resolution'
    },
  ];

  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800 dark:text-white">
            Enterprise-Grade Security & Reliability
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            KAYUS School Management System is built with security and reliability at its core, ensuring your school's data is always safe and accessible.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center"
            >
              <div className="mb-4 p-3 rounded-full bg-neutral-100 dark:bg-neutral-700 inline-flex items-center justify-center">
                {badge.icon}
              </div>
              <h3 className="text-sm font-bold text-neutral-800 dark:text-white mb-2">{badge.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-1">{badge.description}</p>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs">{badge.subtext}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityBadges;
