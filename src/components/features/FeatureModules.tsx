"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUserGraduate, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaUserTie, 
  FaCalendarAlt, 
  FaBook,
  FaClipboardCheck,
  FaChartBar,
  FaBusAlt,
  FaBuilding,
  FaBoxes
} from 'react-icons/fa';

interface FeatureModuleProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  subFeatures: string[];
  screenshot: string;
  index: number;
}

const FeatureModule = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  subFeatures, 
  screenshot, 
  index 
}: FeatureModuleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`py-16 ${isEven ? 'bg-white dark:bg-neutral-800' : 'bg-neutral-50 dark:bg-neutral-900'}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                {icon}
              </div>
              <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">{description}</p>
            
            <h3 className="text-xl font-bold mb-3">Key Benefits</h3>
            <ul className="space-y-2 mb-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-bold mb-3">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {subFeatures.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <svg
                    className="h-4 w-4 text-primary mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 30 : -30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={isEven ? 'lg:order-last' : 'lg:order-first'}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
              {/* Placeholder for actual screenshot */}
              <div className="aspect-w-16 aspect-h-9 bg-neutral-100 dark:bg-neutral-700 p-4 flex items-center justify-center">
              
                {/* When you have actual screenshots: */}
                <img src={screenshot} alt={`${title} screenshot`} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureModules = () => {
  const modules = [
    {
      icon: <FaUserGraduate size={24} />,
      title: 'Admission Processing System',
      description: 'Streamline the entire student admission process from application to enrollment with our comprehensive admission management module.',
      benefits: [
        'Eliminate paperwork with digital application forms',
        'Online payment of application fees',
        'Automate admission status tracking and notifications',
        'Centralize applicant data for easy access and management',
        'Generate custom admission reports and analytics'
      ],
      subFeatures: [
        'Online application forms',
        'Document upload system',
        'Admission screening tools',
        'Interview scheduling',
        'Automatic Admission number generation',
        'Admission letters'
      ],
      screenshot: '/images/kayus/admission.png'
    },
    {
      icon: <FaUserGraduate size={24} />,
      title: 'Student Management System',
      description: 'Maintain comprehensive student records and track all aspects of student information throughout their academic journey.',
      benefits: [
        'Centralize all student information in one secure database',
        'Track academic progress across terms and years',
        'Manage student behavior and disciplinary records',
        'Facilitate parent-school communication'
      ],
      subFeatures: [
        'Comprehensive student profiles',
        'Academic history tracking',
        'Behavior and discipline records',
        'Health records management',
        'Parent/guardian information',
        'Document management',
        'Student transfers',
        'Alumni tracking'
      ],
      screenshot: '/images/kayus/st.png'
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: 'Examination Management',
      description: 'Streamline the examination process with our comprehensive examination management system, from planning to execution.',
      benefits: [
        'Efficiently plan and schedule examinations',
        'Maintain secure question banks and paper generation',
        'Manage examination logistics and seating',
        'Monitor examination conduct and invigilation'
      ],
      subFeatures: [
        'Exam scheduling',
        'Question bank management',
        'Paper generation',
        'Exam key generation',
        'Anticheat system',
        'Auto marking',
        'Attendance tracking',
        'Malpractice reporting'
      ],
      screenshot: '/images/kayus/exam.jpeg'
    },
    {
      icon: <FaChartLine size={24} />,
      title: 'Result Management',
      description: 'Automate result processing and analysis with our powerful result management system for comprehensive student performance tracking.',
      benefits: [
        'Automate result calculation and grade processing',
        'Generate detailed termly reports and transcripts',
        'Provide analytical insights into student performance',
        'Enable secure online result access'
      ],
      subFeatures: [
        'Mark entry automation',
        'Grade calculation',
        'Result compilation',
        'Performance analytics',
        'Transcript generation',
        'Online result publishing',
        'SMS/Email notifications',
        'Historical data analysis'
      ],
      screenshot: '/images/kayus/result.png'
    }, 
    {
      icon: <FaMoneyBillWave size={24} />,
      title: 'Finance Management',
      description: 'Comprehensive financial management system for educational institutions to handle budgeting, expenses, and reporting.',
      benefits: [
        'Centralized financial data management',
        'Automated accounting processes',
        'Real-time financial reporting',
        'Make informed financial decisions with data-driven insights'
      ],
      subFeatures: [
        'Budgeting tools',
        'Expense tracking',
        'Income management',
        'Financial reporting',
        'Audit trails',
        'Bank reconciliation',
        'Purchase orders',
        'Vendor management'
      ],
      screenshot: '/images/kayus/finance.png'
    },
    {
      icon: <FaMoneyBillWave size={24} />,
      title: 'Payroll Management',
      description: 'Streamline your payroll processes with our comprehensive payroll management system designed for educational institutions.',
      benefits: [
        'Automate salary calculations and disbursements',
        'Manage employee benefits and deductions',
        'Generate payslips and tax documents',
        'Track attendance and leave integration'
      ],
      subFeatures: [
        'Salary processing',
        'Tax calculations',
        'Benefits management',
        'Leave tracking',
        'Overtime calculation',
        'Payslip generation',
        'Statutory compliance',
        'Report generation'
      ],
      screenshot: '/images/kayus/payroll.png'
    },
    {
      icon: <FaBuilding size={24} />,
      title: 'Hostel Management',
      description: 'Efficiently manage hostel operations, room allocations, and student accommodations with our dedicated hostel management system.',
      benefits: [
        'Streamline room allocation and management',
        'Track hostel fees and payments',
        'Monitor student check-ins and check-outs',
        'Maintain inventory of hostel facilities'
      ],
      subFeatures: [
        'Room allocation',
        'Fee management',
        'Student records',
        'Visitor tracking',
        'Complaint handling',
        'Mess management',
        'Asset tracking',
        'Maintenance requests'
      ],
      screenshot: '/images/kayus/hostel.png'
    },
    {
      icon: <FaMoneyBillWave size={24} />,
      title: 'School Fees Management',
      description: 'Simplify fee collection, tracking, and reporting with our comprehensive financial management module designed specifically for schools.',
      benefits: [
        'Increase collection rates with automated reminders and tracking',
        'Reduce accounting errors with integrated payment systems',
        'Generate detailed financial reports for better decision making',
        'Provide transparent fee information to parents'
      ],
      subFeatures: [
        'Fee structure management',
        'Online payment integration',
        'Payment tracking',
        'Receipt generation',
        'Discount management',
        'Scholarship tracking',
        'Payment reminders',
        'Financial reporting'
      ],
      screenshot: '/images/kayus/fees.png'
    },
    {
      icon: <FaUserTie size={24} />,
      title: 'Staff Management',
      description: 'Manage all aspects of staff information, attendance, performance, and compensation with our integrated staff management system.',
      benefits: [
        'Streamline HR processes and reduce administrative workload',
        'Ensure accurate and timely salary disbursement',
        'Track staff performance and professional development',
        'Maintain comprehensive staff records'
      ],
      subFeatures: [
        'Staff profiles and records',
        'Attendance tracking',
        'Leave management',
        'Performance evaluation',
        'Payroll processing',
        'Tax calculation',
        'Salary disbursement',
        'HR reporting'
      ],
      screenshot: '/images/kayus/staff.png'
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: 'Attendance System',
      description: 'Track student and staff attendance efficiently with our automated attendance management system.',
      benefits: [
        'Save time with quick attendance recording methods',
        'Identify attendance patterns and address absenteeism',
        'Keep parents informed about their children\'s attendance',
        'Generate comprehensive attendance reports'
      ],
      subFeatures: [
        'Daily attendance tracking',
        'Multiple recording methods',
        'Absence notifications',
        'Leave management',
        'Attendance statistics',
        'Period-wise tracking',
        'Biometric integration',
        'Mobile attendance options'
      ],
      screenshot: '/images/kayus/attendance.png'
    },
    {
      icon: <FaChartBar size={24} />,
      title: 'Finance Management',
      description: 'Manage all school financial operations including budgeting, expense tracking, and financial reporting.',
      benefits: [
        'Maintain complete financial transparency and accountability',
        'Track and control expenses across departments',
        'Generate comprehensive financial statements and reports',
        'Make informed financial decisions with data-driven insights'
      ],
      subFeatures: [
        'Budgeting tools',
        'Expense tracking',
        'Income management',
        'Financial reporting',
        'Audit trails',
        'Bank reconciliation',
        'Purchase orders',
        'Vendor management'
      ],
      screenshot: '/images/kayus/finance.png'
    },
    {
      icon: <FaBook size={24} />,
      title: 'Library Management',
      description: 'Automate library operations including cataloging, circulation, and inventory management with our comprehensive library system.',
      benefits: [
        'Streamline book circulation and reduce manual work',
        'Track book availability and manage reservations',
        'Maintain complete inventory of library resources',
        'Generate usage reports and analytics'
      ],
      subFeatures: [
        'Book cataloging',
        'Barcode integration',
        'Circulation management',
        'Member management',
        'Fine calculation',
        'Reservation system',
        'Digital resources',
        'Inventory management'
      ],
      screenshot: '/images/kayus/library.png'
    },
    {
      icon: <FaCalendarAlt size={24} />,
      title: 'Timetable Management',
      description: 'Create and manage complex school timetables with ease using our intelligent scheduling system.',
      benefits: [
        'Save time with automated timetable generation',
        'Eliminate scheduling conflicts and overlaps',
        'Optimize resource allocation and teacher workloads',
        'Provide accessible timetables to all stakeholders'
      ],
      subFeatures: [
        'Automated scheduling',
        'Conflict detection',
        'Teacher workload balancing',
        'Room allocation',
        'Subject management',
        'Substitute management',
        'Timetable publishing',
        'Schedule changes tracking'
      ],
      screenshot: '/images/kayus/timetable.png'
    },
    {
      icon: <FaBusAlt size={24} />,
      title: 'Transport  Management',
      description: 'Manage transportation routes, vehicles, and hostel accommodations efficiently with our integrated management system.',
      benefits: [
        'Optimize transport routes and vehicle utilization',
        'Maintain complete records of hostel residents and facilities',
        'Track maintenance schedules and expenses',
        'Ensure safety and security of students'
      ],
      subFeatures: [
        'Route planning',
        'Vehicle tracking',
        'Driver management',
        'Transport fee collection',
        'Hostel allocation',
        'Room management',
        'Visitor tracking',
        'Facility maintenance'
      ],
      screenshot: '/images/kayus/transport.png'
    },
    {
      icon: <FaBoxes size={24} />,
      title: 'Assets Management',
      description: 'Track and manage all school assets, equipment, and inventory with our comprehensive asset management system.',
      benefits: [
        'Maintain complete inventory of all school assets',
        'Track asset location, condition, and maintenance',
        'Optimize resource allocation and utilization',
        'Plan for replacements and new acquisitions'
      ],
      subFeatures: [
        'Asset registration',
        'Barcode/QR code tracking',
        'Maintenance scheduling',
        'Depreciation calculation',
        'Asset assignment',
        'Inventory audits',
        'Disposal management',
        'Reporting tools'
      ],
      screenshot: '/images/kayus/assets.png'
    }
  ];

  return (
    <section>
      {modules.map((module, index) => (
        <FeatureModule
          key={index}
          icon={module.icon}
          title={module.title}
          description={module.description}
          benefits={module.benefits}
          subFeatures={module.subFeatures}
          screenshot={module.screenshot}
          index={index}
        />
      ))}
    </section>
  );
};

export default FeatureModules;
