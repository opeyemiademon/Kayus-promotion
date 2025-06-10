"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaHotel, FaShoppingCart, FaUserMd, FaArrowRight } from 'react-icons/fa';

interface ProductItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  target: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const ProductPortfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products: ProductItem[] = [
    {
      id: 'vislek',
      name: 'Vislek Hotel Management System',
      description: 'A comprehensive solution for hotels and hospitality businesses to manage bookings, rooms, staff, and guest services.',
      features: ['Reservation management', 'Room inventory', 'Staff scheduling', 'Guest services', 'Billing & invoicing'],
      target: 'Hotels, Resorts, and Hospitality Businesses',
      icon: <FaHotel size={32} />,
      color: 'bg-blue-500',
      link: '#vislek'
    },
    {
      id: 'critemax',
      name: 'Critemax Supermarket System',
      description: 'An end-to-end retail management system for supermarkets and retail stores with inventory management and POS integration.',
      features: ['Inventory management', 'POS integration', 'Sales analytics', 'Supplier management', 'Customer loyalty programs'],
      target: 'Supermarkets, Retail Stores, and Mini-marts',
      icon: <FaShoppingCart size={32} />,
      color: 'bg-green-500',
      link: '#critemax'
    },
    {
      id: 'dramir',
      name: 'Dr Amir Medical Practice System',
      description: 'A specialized system for medical practices to manage patient records, appointments, prescriptions, and billing.',
      features: ['Patient management', 'Appointment scheduling', 'Medical records', 'Prescription management', 'Billing & insurance'],
      target: 'Clinics, Medical Practices, and Healthcare Providers',
      icon: <FaUserMd size={32} />,
      color: 'bg-red-500',
      link: '#dramir'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-neutral-100 dark:bg-neutral-800 text-primary text-sm font-bold px-3 py-1 rounded-full mb-4">
            ADMOTEK SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-white">
            Our Complete Product Portfolio
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Discover our full range of specialized management solutions designed for different industries and business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700 flex flex-col h-full"
            >
              <div className={`${product.color} text-white p-6 flex items-center justify-between`}>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-neutral-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 flex items-start">
                        <span className="text-primary mr-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-neutral-800 dark:text-white mb-1">Target Market:</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{product.target}</p>
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link 
                  href={product.link} 
                  className="flex items-center justify-center w-full py-3 px-4 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white font-medium rounded-lg transition-colors"
                >
                  Learn More <FaArrowRight className="ml-2" size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
