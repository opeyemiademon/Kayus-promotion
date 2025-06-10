"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

const FaqItem = ({ question, answer, index }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="border-b border-neutral-200 dark:border-neutral-700 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold">{question}</h3>
        <svg
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`mt-2 text-neutral-600 dark:text-neutral-300 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p>{answer}</p>
      </div>
    </motion.div>
  );
};

const FaqSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: 'What makes KAYUS different from other school management systems?',
      answer: 'KAYUS is specifically designed for Nigerian schools, taking into account the unique requirements and challenges of our educational system. It offers a comprehensive suite of modules, flexible pricing options, and exceptional local support. Our system is also built to work efficiently both online and offline.'
    },
    {
      question: 'How long does it take to implement KAYUS in my school?',
      answer: 'The implementation timeline depends on the size of your school and the modules you choose to implement. Typically, basic implementation can be completed in 1-2 weeks. Full implementation with data migration, customization, and training may take 2-4 weeks. Our team works closely with you to create a realistic implementation schedule.'
    },
    {
      question: 'Do you provide training for our staff?',
      answer: 'Yes, we provide comprehensive training for all staff members who will be using the system. This includes administrators, teachers, and support staff. We offer both on-site and remote training options, as well as detailed documentation and video tutorials.'
    },
    {
      question: 'Can KAYUS be customized to meet our school\'s specific needs?',
      answer: 'Absolutely! KAYUS is designed to be flexible and can be customized to meet your school\'s specific requirements. We can adapt the system to match your existing processes, create custom reports, and integrate with other systems you may be using.'
    },
    {
      question: 'What kind of support do you offer after implementation?',
      answer: 'We provide ongoing technical support via phone, email, and WhatsApp. Our support team is available during business hours to address any issues or questions. We also offer regular system updates and enhancements based on user feedback.'
    },
    {
      question: 'Is our data secure with KAYUS?',
      answer: 'Yes, data security is a top priority for us. KAYUS implements industry-standard security measures including data encryption, secure access controls, regular backups, and compliance with data protection regulations. We ensure that your school\'s data remains confidential and protected.'
    },
    {
      question: 'Can we try KAYUS before making a purchase decision?',
      answer: 'Yes, we offer free demonstrations and trial periods so you can experience KAYUS firsthand before making a decision. Contact us to schedule a demo or request a trial account.'
    },
    {
      question: 'How often is the system updated?',
      answer: 'We release regular updates to improve functionality, fix bugs, and add new features. Major updates are typically released quarterly, while minor updates and patches are released as needed. All updates are included in your subscription.'
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Find answers to common questions about KAYUS School Management System
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
