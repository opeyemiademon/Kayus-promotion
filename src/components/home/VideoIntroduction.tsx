"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay } from 'react-icons/fa';

const VideoIntroduction = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-white">
            See KAYUS in Action
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Watch how KAYUS School Management System transforms school operations, improves efficiency, and enhances the educational experience.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div 
            className="relative aspect-video bg-cover bg-center cursor-pointer group"
            style={{ backgroundImage: "url('/images/pic3.png')" }}
            onClick={() => setVideoModalOpen(true)}
          >
            <div className="absolute inset-0 bg-primary-dark/50 group-hover:bg-primary-dark/40 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white ml-2" size={30} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">KAYUS School Management System Overview</h3>
              <p className="text-white/80">2:12 minutes</p>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden">
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setVideoModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-vfWVTaZtRI?si=0vpXbC2OPXM0lNmu" 
                  title="KAYUS School Management System Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoIntroduction;
