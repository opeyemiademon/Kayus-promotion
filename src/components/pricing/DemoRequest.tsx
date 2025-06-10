"use client";

import React,{ChangeEvent, FormEvent, useState} from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NotifyAlerts } from '../globalFunction/Notify';
import { createDemoRequest } from '@/services/api_services/clientApiServices';

const DemoRequest = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const queryClient = useQueryClient();
  const initialFormData: { firstname: string; lastname: string; email_address: string; school_name: string; telephone: string; school_type: string; student_range: string; is_subscribe: boolean; information: string; } = {
    firstname: '',
    lastname: '',
    email_address: '',
    school_name: '',
    telephone: '',
    school_type: '',
    student_range: '',
    is_subscribe: false,
    information: ''
  };
  
  const initialErrors: { firstname: string; lastname: string; email_address: string; school_name: string; telephone: string; school_type: string; student_range: string; }= {
    firstname: '',
    lastname: '',
    email_address: '',
    school_name: '',
    telephone: '',
    school_type: '',
    student_range: ''
  };


  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);


  const mutation = useMutation({
    mutationFn: createDemoRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["create-subscriber"] });
  
      if(data?.createDemoRequest?.status === 200){
        NotifyAlerts("success", "Subscribed", "Request successfully submitted, we will get back to you soon");
     setFormData({
      firstname: '',
    lastname: '',
    email_address: '',
    school_name: '',
    telephone: '',
    school_type: '',
    student_range: '',
    is_subscribe: false,
    information: ''
      })
      }
    },
    onError: (error) => {
      NotifyAlerts("warning", "warning", error.message);
    },
  });


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = { ...errors };

    // Validate required fields
    const requiredFields = ['firstname', 'lastname', 'email_address', 'school_name', 'telephone', 'school_type', 'student_range'];
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field as keyof typeof errors] = 'This field is required';
        formIsValid = false;
      } else {
        newErrors[field as keyof typeof errors] = '';
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      mutation.mutate(formData);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900" id="demo">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience KAYUS in Action</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              See how KAYUS can transform your school's operations with a personalized demo tailored to your specific needs.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Personalized Demonstration</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Our team will walk you through all the features relevant to your school type and size.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Q&A Session</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Get all your questions answered by our product specialists.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Implementation Plan</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Receive a customized implementation plan and timeline for your school.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Request a Free Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                    required
                  />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                    required
                  />
                  {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                  required
                />
                {errors.email_address && <p className="text-red-500 text-sm mt-1">{errors.email_address}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">School Name *</label>
                <input
                  type="text"
                  name="school_name"
                  value={formData.school_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                  required
                />
                {errors.school_name && <p className="text-red-500 text-sm mt-1">{errors.school_name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                  required
                />
                {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">School Type *</label>
                <select
                  name="school_type"
                  value={formData.school_type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" selected disabled>Select school type</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                  <option value="Mixed">Mixed</option>
                </select>
                {errors.school_type && <p className="text-red-500 text-sm mt-1">{errors.school_type}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Students *</label>
                <select
                  name="student_range"
                  value={formData.student_range}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" selected disabled>Select range</option>
                  <option value="1-100">1-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
                {errors.student_range && <p className="text-red-500 text-sm mt-1">{errors.student_range}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Additional Information</label>
                <textarea
                  name="information"
                  value={formData.information}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-600 focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="is_subscribe"
                  checked={formData.is_subscribe}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary border-neutral-300"
                />
                <label className="ml-2 block text-sm text-neutral-600 dark:text-neutral-400">
                  Subscribe to our newsletter for updates and educational content
                </label>
              </div>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-50"
              >
                {mutation.isPending ? "Submitting..." : "Request Demo"}
              </button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequest;