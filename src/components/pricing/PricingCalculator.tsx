"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingCalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [studentCount, setStudentCount] = useState(100);
  const [billingCycle, setBillingCycle] = useState('term');
  const [schoolType, setSchoolType] = useState('primary');
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerStudent, setPricePerStudent] = useState(0);

  // Calculate pricing based on inputs
  useEffect(() => {
    let basePrice = 0;
    
    // Set base price per student based on school type
    if (schoolType === 'nursery') {
      basePrice = 500; // Lower end for nursery schools
    } else if (schoolType === 'primary') {
      basePrice = 750; // Middle range for primary schools
    } else if (schoolType === 'secondary') {
      basePrice = 900; // Higher end for secondary schools
    }
    
    // Adjust price based on billing cycle
    let adjustedPrice = basePrice;
    if (billingCycle === 'session') {
      // Session price (3 terms) with discount
      adjustedPrice = basePrice * 3 * 0.85; // 15% discount for session payment
    } else if (billingCycle === 'onetime') {
      // One-time purchase calculation
      // Base calculation plus scaling factor
      adjustedPrice = 9000 + (studentCount * 1000);
      
      // Cap the price between 1M and 5M
      adjustedPrice = Math.max(1000000, Math.min(5000000, adjustedPrice));
      
      // For one-time, we don't multiply by student count later
      setTotalPrice(adjustedPrice);
      setPricePerStudent(adjustedPrice / studentCount);
      return;
    }
    
    // Apply volume discount for term and session
    let volumeDiscount = 1;
    if (studentCount > 500) {
      volumeDiscount = 0.85; // 15% discount for large schools
    } else if (studentCount > 200) {
      volumeDiscount = 0.9; // 10% discount for medium schools
    } else if (studentCount > 100) {
      volumeDiscount = 0.95; // 5% discount for smaller schools
    }
    
    // Calculate final price per student
    const finalPricePerStudent = adjustedPrice * volumeDiscount;
    setPricePerStudent(finalPricePerStudent);
    
    // Calculate total price
    setTotalPrice(finalPricePerStudent * studentCount);
  }, [studentCount, billingCycle, schoolType]);

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Calculator</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Estimate your investment based on your school's specific needs.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                    School Type
                  </label>
                  <select
                    value={schoolType}
                    onChange={(e) => setSchoolType(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="nursery">Nursery School</option>
                    <option value="primary">Primary School</option>
                    <option value="secondary">Secondary School</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                    Number of Students
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={studentCount}
                    onChange={(e) => setStudentCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    <span>10</span>
                    <span>{studentCount}</span>
                    <span>1000</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                    Billing Cycle
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setBillingCycle('term')}
                      className={`px-4 py-2 rounded-lg text-center transition-colors ${billingCycle === 'term' ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'}`}
                    >
                      Termly
                    </button>
                    <button
                      onClick={() => setBillingCycle('session')}
                      className={`px-4 py-2 rounded-lg text-center transition-colors ${billingCycle === 'session' ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'}`}
                    >
                      Session
                    </button>
                    <button
                      onClick={() => setBillingCycle('onetime')}
                      className={`px-4 py-2 rounded-lg text-center transition-colors ${billingCycle === 'onetime' ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'}`}
                    >
                      One-time
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Your Estimate</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-600 dark:text-neutral-300">School Type:</span>
                    <span className="font-medium">
                      {schoolType === 'nursery' ? 'Nursery School' : 
                       schoolType === 'primary' ? 'Primary School' : 'Secondary School'}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-600 dark:text-neutral-300">Students:</span>
                    <span className="font-medium">{studentCount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-600 dark:text-neutral-300">Billing Cycle:</span>
                    <span className="font-medium">
                      {billingCycle === 'term' ? 'Termly' : 
                       billingCycle === 'session' ? 'Session' : 'One-time Purchase'}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 dark:border-neutral-600 pt-4 mb-6">
                  {billingCycle !== 'onetime' && (
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-600 dark:text-neutral-300">Price per student:</span>
                      <span className="font-medium">
                        ₦{pricePerStudent.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Estimated Price:</span>
                    <span className="text-primary">
                      ₦{totalPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    {billingCycle === 'term' ? '* Price per term' : 
                     billingCycle === 'session' ? '* Price per academic session (3 terms)' : 
                     '* One-time purchase price'}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href="/contact"
                    className="inline-block w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
                  >
                    Get Custom Quote
                  </a>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3">
                    Contact us for a detailed quote tailored to your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCalculator;
