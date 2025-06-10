"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ClientLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: 'Aduvie International School', logo: '/images/clients/aduvie.png' },
    { name: 'GAAT International School', logo: '/images/clients/gaat.png' },
    { name: 'Page Schools, APO', logo: '/images/clients/page.png' },
    { name: 'Great Minds Model Intellectual Academy', logo: '/images/clients/gmmia.png' },
    { name: 'Haske International School', logo: '/images/clients/haske.png' },
    { name: 'Heritage School of Excellence', logo: '/images/clients/heritage.png' },

    { name: 'Solid Rock International School', logo: '/images/clients/solidrock.png' },
    { name: 'Fredem School', logo: '/images/clients/fredem.png' },
  ];

  return (
    <section className="py-12 bg-white dark:bg-neutral-800">
      <div className="container">
        <motion.div
          ref={ref}
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-medium text-neutral-600 dark:text-neutral-300">
            Trusted by Leading Nigerian Schools
          </h3>
        </motion.div>

        <div className="client-logos-slider">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              // When window width is >= 640px (sm)
              640: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // When window width is >= 768px (md)
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              // When window width is >= 1024px (lg)
              1024: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation
            loop
            className="py-4"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex justify-center h-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-full w-full max-w-[180px] bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center p-4 mx-auto">
                    <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
