"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSchool, FaGraduationCap, FaUniversity } from 'react-icons/fa';

interface SchoolTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

const SchoolTypeCard = ({ icon, title, description, benefits, index }: SchoolTypeCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="p-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-center mb-4 text-neutral-800 dark:text-white">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-center mb-6">{description}</p>
        <div className="space-y-3">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start">
              <svg
                className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-neutral-700 dark:text-neutral-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ValueProposition = () => {
  const schoolTypes = [
    {
      icon: <FaSchool size={32} />,
      title: 'Nursery Schools',
      description: 'Tailored solutions for early childhood education centers.',
      benefits: [
        'Child-friendly attendance tracking',
        'Visual progress reports for parents',
        'Simplified fee management',
        'Customized learning milestone tracking',
        'Parent communication portal'
      ],
    },
    {
      icon: <FaGraduationCap size={32} />,
      title: 'Primary Schools',
      description: 'Comprehensive management for primary education institutions.',
      benefits: [
        'Complete student academic records',
        'Curriculum and lesson planning tools',
        'Integrated examination system',
        'Attendance and behavior tracking',
        'School events calendar'
      ],
    },
    {
      icon: <FaUniversity size={32} />,
      title: 'Secondary Schools',
      description: 'Advanced solutions for secondary education management.',
      benefits: [
        'Subject-based result compilation',
        'Advanced performance analytics',
        'Exam scheduling and hall planning',
        'Student counseling records',
        'Career guidance tracking'
      ],
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every School Type</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            KAYUS is designed to meet the unique needs of different educational institutions across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schoolTypes.map((type, index) => (
            <SchoolTypeCard
              key={index}
              icon={type.icon}
              title={type.title}
              description={type.description}
              benefits={type.benefits}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
