"use client"
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';



export default function Colleges() {
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
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Colleges and Monotechnic Portal</h1>
         <p className="text-xl text-white/90 mb-8">
           KAYUS for Colleges and Monotechnic is currently under development, it address specific needs of Nigerian Colleges and Monotechnic. 
         </p>
       </motion.div>
     </div>
   </section>
      
    </MainLayout>
  );
}
