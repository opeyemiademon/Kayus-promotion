"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChartLine, FaMoneyBillWave, FaCalendarAlt, FaUserClock, FaBook } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-neutral-200 dark:border-neutral-700"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">{description}</p>
        <Link href="/features" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturesHighlight = () => {
  const features = [
    {
      icon: <FaUserGraduate size={24} />,
      title: 'Student Management',
      description: 'Comprehensive student profiles, academic tracking, and performance analytics.',
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'Examination & Results',
      description: 'Streamlined exam creation, grading, and detailed result reporting.',
    },
    {
      icon: <FaMoneyBillWave size={24} />,
      title: 'Fees Management',
      description: 'Simplified fee collection, tracking, and automated payment reminders.',
    },
    {
      icon: <FaUserClock size={24} />,
      title: 'Staff Management',
      description: 'Complete staff records, attendance tracking, and payroll processing.',
    },
    {
      icon: <FaCalendarAlt size={24} />,
      title: 'Timetable Management',
      description: 'Intelligent class scheduling and conflict-free timetable generation.',
    },
    {
      icon: <FaBook size={24} />,
      title: 'Library Management',
      description: 'Digital catalog, borrowing system, and inventory management.',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive School Management Features</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            KAYUS provides all the tools you need to run your school efficiently and effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="btn-primary inline-flex items-center"
          >
            View All Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;
