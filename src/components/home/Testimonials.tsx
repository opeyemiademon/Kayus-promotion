"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  school: string;
  image: string;
}

const Testimonial = ({ quote, name, position, school, image }: TestimonialProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-8 h-full flex flex-col">
      <div className="text-primary mb-4">
        <FaQuoteLeft size={32} />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-neutral-800 dark:text-white">{name}</h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {position}, {school}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote:
        "KAYUS has transformed how we manage our school operations. The automated result processing system has saved us countless hours of manual work and eliminated errors.",
      name: "Mr. Sylvester",
      position: "ICT Director",
      school: "Aduvie International School",
      image: "/images/clients/aduvie.png",
    },
    {
      quote:
        "The parent communication portal has significantly improved our engagement with parents. They can now track their children's progress in real-time, which has been invaluable.",
      name: "Mr. Destiny",
      position: "IT Director",
      school: "GAAT International School",
      image: "/images/clients/gaat.png",
    },
    {
      quote:
        "Since implementing KAYUS, our fee collection rate has improved by 35%. The automated reminders and online payment options have made a tremendous difference.",
      name: "Mr. Faddenzy",
      position: "ICT Director",
      school: "Page Schools, APO",
      image: "/images/clients/page.png",
    },
    {
      quote:
        "The technical support from Admotron Solutions has been exceptional. They're always available to help and have customized the system to meet our specific needs.",
      name: "Mr. Salihu",
      position: "Principal",
      school: "Haske International School",
      image: "/images/clients/haske.png",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Hear from school administrators who have transformed their operations with KAYUS.
          </p>
        </motion.div>

        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-12">
                <Testimonial {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
