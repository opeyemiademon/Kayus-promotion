
"use client"
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

import { motion } from 'framer-motion';


export default function University() {
  return (
    <MainLayout>
         <section className="relative py-20 bg-primary overflow-hidden">
     
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">University Portal</h1>
          <p className="text-xl text-white/90 mb-8">
            KAYUS for University is currently under development, it address specific needs of Nigerian University. 
          </p>
        </motion.div>
      </div>
    </section> 

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">University Portal</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Undergraduate Programs</h2>
            <p className="text-gray-600 mb-4">It is a complete system that addresses the specific needs of Nigerian universities.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Student Management</li>
              <li>Student Attendance</li>
              <li>Student Result</li>
              <li>And lot more</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Post-Graduate Programs</h2>
            <p className="text-gray-600 mb-4">The system will be used to manage post-graduate programs which includes:</p>
            <ul className="list-disc list-inside text-gray-700">
              
              <li>Admission System</li>
              <li>Academic Transcript</li>
              <li>ViVa Schedule</li>
              <li>School Fees Management</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Vocational Training</h2>
            <p className="text-gray-600 mb-4">The system can be used to manage vocational training programs which includes:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Registration System</li>
              <li>Staff Management</li>
              <li>Student Management</li>
              <li>Examination system and more</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
