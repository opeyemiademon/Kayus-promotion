"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  priceRange: string;
  billingPeriod: string;
  features: PlanFeature[];
  popularPlan?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PricingPlans = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans: PricingPlan[] = [
    {
      name: 'Termly Payment',
      description: 'Perfect for schools that prefer term-by-term budgeting',
      priceRange: '₦500-₦1000',
      billingPeriod: 'per student per term',
      features: [
        { name: 'All core modules', included: true },
        { name: 'Regular updates', included: true },
        { name: 'Basic support', included: true },
        { name: 'Data migration assistance', included: true },
        { name: 'Custom reports', included: true },
        { name: 'Priority support', included: true },
        { name: 'Customization options', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact',
    },
    {
      name: 'Session Payment',
      description: 'Best value for schools planning for the entire academic year',
      priceRange: '₦1500-₦3000',
      billingPeriod: 'per student per session',
      popularPlan: true,
      features: [
        { name: 'All core modules', included: true },
        { name: 'Regular updates', included: true },
        { name: 'Basic support', included: true },
        { name: 'Data migration assistance', included: true },
        { name: 'Custom reports', included: true },
        { name: 'Priority support', included: true },
        { name: 'Customization options', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
      buttonText: 'Most Popular',
      buttonLink: '/contact',
    },
    {
      name: 'One-time Purchase',
      description: 'Ideal for schools that prefer a single investment',
      priceRange: '₦1,000,000-₦5,000,000',
      billingPeriod: 'one-time payment',
      features: [
        { name: 'All core modules', included: true },
        { name: 'Regular updates', included: true },
        { name: 'Basic support', included: true },
        { name: 'Data migration assistance', included: true },
        { name: 'Custom reports', included: true },
        { name: 'Priority support', included: true },
        { name: 'Customization options', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-800">
      <div className="container">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden border ${plan.popularPlan ? 'border-primary shadow-lg' : 'border-neutral-200 dark:border-neutral-700'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popularPlan && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.priceRange}</span>
                  <span className="text-neutral-500 dark:text-neutral-400 ml-2">{plan.billingPeriod}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-neutral-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-500 dark:text-neutral-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.buttonLink}
                  className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${plan.popularPlan ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white'}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
