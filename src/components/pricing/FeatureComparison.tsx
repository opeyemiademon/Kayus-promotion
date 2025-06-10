"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface FeatureItem {
  name: string;
  termly: boolean;
  session: boolean;
  onetime: boolean;
  category: string;
}

const FeatureComparison = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureItem[] = [
    // Core Features
    { name: 'Student Management', termly: true, session: true, onetime: true, category: 'Core Features' },
    { name: 'Attendance Tracking', termly: true, session: true, onetime: true, category: 'Core Features' },
    { name: 'Result Management', termly: true, session: true, onetime: true, category: 'Core Features' },
    { name: 'Fee Management', termly: true, session: true, onetime: true, category: 'Core Features' },
    { name: 'Staff Management', termly: true, session: true, onetime: true, category: 'Core Features' },
    { name: 'Timetable Management', termly: true, session: true, onetime: true, category: 'Core Features' },
    
    // Advanced Features
    { name: 'Library Management', termly: false, session: true, onetime: true, category: 'Advanced Features' },
    { name: 'Transport Management', termly: false, session: true, onetime: true, category: 'Advanced Features' },
    { name: 'Hostel Management', termly: false, session: false, onetime: true, category: 'Advanced Features' },
    { name: 'Assets Management', termly: false, session: false, onetime: true, category: 'Advanced Features' },
    { name: 'Advanced Analytics', termly: false, session: true, onetime: true, category: 'Advanced Features' },
    
    // Support & Services
    { name: 'Basic Support', termly: true, session: true, onetime: true, category: 'Support & Services' },
    { name: 'Priority Support', termly: true, session: true, onetime: true, category: 'Support & Services' },
    { name: 'Data Migration', termly: true, session: true, onetime: true, category: 'Support & Services' },
    { name: 'Staff Training', termly: true, session: true, onetime: true, category: 'Support & Services' },
    { name: 'Customization', termly: true, session: true, onetime: true, category: 'Support & Services' },
    { name: 'Dedicated Account Manager', termly: true, session: true, onetime: true, category: 'Support & Services' },
  ];

  // Group features by category
  const categoriesSet = new Set(features.map(feature => feature.category));
  const categories = Array.from(categoriesSet);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Comparison</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Compare our pricing plans to find the perfect fit for your school.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className="w-full min-w-[768px] border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-4 px-6 text-left w-1/3">Features</th>
                <th className="py-4 px-6 text-center">Termly Payment</th>
                <th className="py-4 px-6 text-center">Session Payment</th>
                <th className="py-4 px-6 text-center">One-time Purchase</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-neutral-100 dark:bg-neutral-700">
                    <td colSpan={4} className="py-3 px-6 font-bold">{category}</td>
                  </tr>
                  {features
                    .filter(feature => feature.category === category)
                    .map((feature, featureIndex) => (
                      <tr 
                        key={featureIndex} 
                        className={`border-b border-neutral-200 dark:border-neutral-700 ${featureIndex % 2 === 0 ? 'bg-white dark:bg-neutral-800' : 'bg-neutral-50 dark:bg-neutral-850'}`}
                      >
                        <td className="py-4 px-6">{feature.name}</td>
                        <td className="py-4 px-6 text-center">
                          {feature.termly ? (
                            <FaCheck className="text-green-500 mx-auto" />
                          ) : (
                            <FaTimes className="text-neutral-400 mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.session ? (
                            <FaCheck className="text-green-500 mx-auto" />
                          ) : (
                            <FaTimes className="text-neutral-400 mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.onetime ? (
                            <FaCheck className="text-green-500 mx-auto" />
                          ) : (
                            <FaTimes className="text-neutral-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))
                  }
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparison;
