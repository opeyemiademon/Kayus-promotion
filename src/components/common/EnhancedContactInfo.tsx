"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
  color: string;
}

const EnhancedContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems: ContactItem[] = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+234 803 295 0881',
      link: 'tel:+2348032950881',
      color: 'bg-blue-500'
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: '+234 803 295 0881',
      link: 'https://wa.me/2348032950881',
      color: 'bg-green-500'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'opeyemiademon@gmail.com',
      link: 'mailto:opeyemiademon@gmail.com',
      color: 'bg-red-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Address',
      value: 'House 24, 34 Crescent, 3rd Avenue, Gwarimpa Abuja',
      link: 'https://www.google.com/maps/place/24+34+Crescent,+Gwarinpa,+900108,+Federal+Capital+Territory,+Nigeria/@9.1051948,7.4046326,17z/data=!3m1!4b1!4m5!3m4!1s0x104e7565685ca1d1:0x632ee40f9e42dba5!8m2!3d9.1051948!4d7.4072075?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D',
      color: 'bg-yellow-500'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: 'https://www.facebook.com/admotek', label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: <FaTwitter />, link: 'https://twitter.com/adeMansoor', label: 'Twitter', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: <FaInstagram />, link: '#', label: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' },
    { icon: <FaLinkedin />, link: '#', label: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800' },
  ];

  return (
    <section className="py-12 bg-white dark:bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-neutral-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            We're here to answer any questions you have about KAYUS School Management System. Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className={`${item.color} p-4 flex justify-center`}>
                <div className="bg-white/20 p-3 rounded-full text-white text-xl">
                  {item.icon}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-white">{item.label}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">{item.value}</p>
                <div className="mt-auto">
                  <Link 
                    href={item.link} 
                    target={item.label === 'Address' ? '_blank' : undefined}
                    rel={item.label === 'Address' ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-white ${item.color} hover:opacity-90 transition-opacity`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label === 'Phone' ? 'Call Us' : 
                     item.label === 'WhatsApp' ? 'Chat Now' : 
                     item.label === 'Email' ? 'Send Email' : 'View Map'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedContactInfo;
