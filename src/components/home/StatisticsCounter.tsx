"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem = ({ value, label, suffix = '', duration = 2.5 }: StatProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {inView ? (
          <CountUp end={value} duration={duration} suffix={suffix} separator="," delay={0.5} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-white text-lg">{label}</p>
    </motion.div>
  );
};

const StatisticsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 120, label: 'Schools Served', suffix: '+' },
    { value: 85000, label: 'Students Managed', suffix: '+' },
    { value: 5000, label: 'Teachers Empowered', suffix: '+' },
    { value: 99.9, label: 'Uptime Percentage', suffix: '%' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1, scale: 0.8 }}
            animate={{
              opacity: [0.05, 0.1, 0.05],
              scale: [0.8, 1.2, 0.8],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Schools Across Nigeria
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              duration={2 + index * 0.5}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
