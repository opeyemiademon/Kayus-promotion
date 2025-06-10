"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaChartLine, FaClipboardCheck, FaFileAlt, FaMoneyBillWave, FaUserTie, 
  FaChartBar, FaCalendarAlt, FaBuilding, FaUserGraduate, FaBook, 
  FaClipboardList, FaComments, FaLaptop, FaShareAlt, FaClock, FaUsers,
  FaCreditCard, FaGraduationCap, FaBell, FaCloudUploadAlt, FaChartPie,
  FaCommentDots, FaMobileAlt, FaClock as FaClockAlt
} from 'react-icons/fa';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsComparison = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const managementBenefits: BenefitItem[] = [
    {
      icon: <FaChartLine className="text-primary" size={24} />,
      title: 'Real-time Reports & Analytics',
      description: 'Access up-to-date data and insights for informed decision making.'
    },
    {
      icon: <FaClipboardCheck className="text-primary" size={24} />,
      title: 'Automated Administrative Processes',
      description: 'Eliminate manual tasks and streamline school operations.'
    },
    {
      icon: <FaFileAlt className="text-primary" size={24} />,
      title: 'Reduced Paperwork & Errors',
      description: 'Go paperless and minimize human errors in record keeping.'
    },
    {
      icon: <FaMoneyBillWave className="text-primary" size={24} />,
      title: 'Better Financial Tracking',
      description: 'Monitor school finances with precision and generate reports instantly.'
    },
    {
      icon: <FaUserTie className="text-primary" size={24} />,
      title: 'Staff Performance Monitoring',
      description: 'Track teacher performance and productivity metrics.'
    },
    {
      icon: <FaChartBar className="text-primary" size={24} />,
      title: 'Data-driven Decision Making',
      description: 'Make strategic decisions based on comprehensive data analysis.'
    },
    {
      icon: <FaClock className="text-primary" size={24} />,
      title: 'Time & Cost Savings',
      description: 'Reduce operational costs and save valuable administrative time.'
    },
    {
      icon: <FaBuilding className="text-primary" size={24} />,
      title: 'Improved School Reputation',
      description: 'Enhance your school\'s image with modern management practices.'
    },
  ];

  const teacherBenefits: BenefitItem[] = [
    {
      icon: <FaUserGraduate className="text-secondary" size={24} />,
      title: 'Easy Attendance Marking',
      description: 'Mark student attendance quickly and efficiently.'
    },
    {
      icon: <FaBook className="text-secondary" size={24} />,
      title: 'Digital Gradebook & Results',
      description: 'Manage grades and assessments in a centralized system.'
    },
    {
      icon: <FaClipboardList className="text-secondary" size={24} />,
      title: 'Automated Report Generation',
      description: 'Generate student reports with just a few clicks.'
    },
    {
      icon: <FaComments className="text-secondary" size={24} />,
      title: 'Parent Communication Tools',
      description: 'Easily communicate with parents about student progress.'
    },
    {
      icon: <FaCalendarAlt className="text-secondary" size={24} />,
      title: 'Lesson Planning Features',
      description: 'Create, store, and share lesson plans efficiently.'
    },
    {
      icon: <FaShareAlt className="text-secondary" size={24} />,
      title: 'Resource Sharing Capabilities',
      description: 'Share educational resources with colleagues and students.'
    },
    {
      icon: <FaLaptop className="text-secondary" size={24} />,
      title: 'Reduced Administrative Burden',
      description: 'Focus more on teaching and less on paperwork.'
    },
    {
      icon: <FaUsers className="text-secondary" size={24} />,
      title: 'More Time for Teaching',
      description: 'Dedicate more time to student learning and development.'
    },
  ];

  const studentParentBenefits: BenefitItem[] = [
    {
      icon: <FaCreditCard className="text-accent" size={24} />,
      title: 'Online Fee Payment Options',
      description: 'Pay school fees conveniently online without visiting the school.'
    },
    {
      icon: <FaGraduationCap className="text-accent" size={24} />,
      title: 'Real-time Grade Access',
      description: 'View grades and academic performance as they are updated.'
    },
    {
      icon: <FaBell className="text-accent" size={24} />,
      title: 'Attendance Notifications',
      description: 'Receive alerts about student attendance and absences.'
    },
    {
      icon: <FaCloudUploadAlt className="text-accent" size={24} />,
      title: 'Assignment Submissions',
      description: 'Submit assignments digitally and receive feedback promptly.'
    },
    {
      icon: <FaChartPie className="text-accent" size={24} />,
      title: 'Progress Tracking',
      description: 'Monitor academic progress throughout the school year.'
    },
    {
      icon: <FaCommentDots className="text-accent" size={24} />,
      title: 'Parent-Teacher Communication',
      description: 'Communicate directly with teachers about student needs.'
    },
    {
      icon: <FaMobileAlt className="text-accent" size={24} />,
      title: 'Mobile App Access',
      description: 'Access all information on-the-go through our mobile app.'
    },
    {
      icon: <FaClockAlt className="text-accent" size={24} />,
      title: '24/7 Information Availability',
      description: 'Access school information and updates anytime, anywhere.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 dark:text-white">
            Benefits for Everyone in Your School
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            KAYUS School Management System delivers tailored benefits to all stakeholders in your educational institution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Management Benefits */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 md:p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800 mb-4">
                <FaUserTie className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary">For Management</h3>
            </div>

            <motion.div className="space-y-6">
              {managementBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex gap-4 items-start hover:bg-blue-100/50 dark:hover:bg-blue-800/30 p-3 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-neutral-800 dark:text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Teacher Benefits */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 md:p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-800 mb-4">
                <FaUserGraduate className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary">For Teachers</h3>
            </div>

            <motion.div className="space-y-6">
              {teacherBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex gap-4 items-start hover:bg-purple-100/50 dark:hover:bg-purple-800/30 p-3 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-neutral-800 dark:text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Student/Parent Benefits */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 md:p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-800 mb-4">
                <FaUsers className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-accent">For Students & Parents</h3>
            </div>

            <motion.div className="space-y-6">
              {studentParentBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex gap-4 items-start hover:bg-amber-100/50 dark:hover:bg-amber-800/30 p-3 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-neutral-800 dark:text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsComparison;
