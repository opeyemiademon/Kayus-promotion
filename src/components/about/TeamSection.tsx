"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  index: number;
}

const TeamMember = ({ name, position, bio, image,  index }: TeamMemberProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative aspect-w-1 aspect-h-1 bg-neutral-100 dark:bg-neutral-700">
        {/* Placeholder for team member image */}
       
        {/* When you have actual images: */}
      <img src={image} alt={name} className="w-full h-[200px] object-cover" /> 
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary mb-4">{position}</p>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">{bio}</p>
        
       
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Professor Rashidah Funke Olanrewaju',
      position: 'Head of Product Development',
      bio: 'Prof. oversees the development and enhancement of the KAYUS platform, ensuring it meets the needs of Nigerian schools.',
      image: '/images/staff/prof.png',
      social: {
        email: 'aisha@admotron.com',
      },
    },
    {
      name: 'Opeyemi Mansoor',
      position: 'Founder & CEO',
      bio: 'With over 10 years of experience in software development, Opeyemi leads the vision and strategy for Admotron Solutions.',
      image: '/images/staff/ope.png',
      
    },
    
    {
      name: 'Abdullahi Jafar',
      position: 'Technical Lead',
      bio: 'Abdullahi leads our engineering team, focusing on system architecture, performance optimization, and security.',
      image: '/images/staff/jafar.jpeg',
    
    },
    {
      name: 'Nurudeen Ishola',
      position: 'Customer Success Manager',
      bio: 'Nurudeen works closely with schools to ensure successful implementation and adoption of the KAYUS system.',
      image: '/images/staff/nurudeen.jpeg',
     
    },
    {
      name: 'Ibrahim Yunusa',
      position: 'UI/UX Designer',
      bio: 'Ibrahim is responsible for creating intuitive and user-friendly interfaces that enhance the user experience.',
      image: '/images/staff/ibrahim.jpeg',
    
    },
    {
      name: 'Akoma Ishaq',
      position: 'Education Specialist',
      bio: 'With a background in education, Ishaq ensures that KAYUS meets the pedagogical needs of Nigerian schools.',
      image: '/images/staff/ako.png',
    
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            The talented individuals behind KAYUS School Management System
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
