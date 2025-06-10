"use client";

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NotifyAlerts } from '../globalFunction/Notify';
import { createContactRequest } from '@/services/api_services/clientApiServices';

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const queryClient = useQueryClient();

  // Math captcha state
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [mathError, setMathError] = useState('');

  // Generate new math question
  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setMathQuestion({
      num1,
      num2,
      answer: num1 + num2
    });
    setUserAnswer('');
    setMathError('');
  };

  // Generate initial math question
  useEffect(() => {
    generateMathQuestion();
  }, []);

  const initialFormData = {
    firstname: '',
    email_address: '',
    telephone: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    firstname: '',
    email_address: '',
    telephone: '',
    subject: '',
    message: ''
  });

  const mutation = useMutation({
    mutationFn: createContactRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contact-requests"] });
      
      if(data?.data?.createContact?.status === 200){
        NotifyAlerts("success", "Success", "Message sent successfully. We'll get back to you soon.");
        setFormData(initialFormData);
        generateMathQuestion();
      }else{
        NotifyAlerts("warning", "Warning", data?.data?.createContact?.message);
      }
    },
    onError: (error) => {
      NotifyAlerts("warning", "Warning", error.message);
    },
  });


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = { ...errors };

    // Validate math answer
    if (parseInt(userAnswer) !== mathQuestion.answer) {
      setMathError('Incorrect answer, please try again');
      NotifyAlerts("warning", "Warning", "Incorrect answer, please try again");
      generateMathQuestion();
      return;
    }
    // Validate required fields
    const requiredFields = ['firstname',  'email_address', 'telephone', 'subject', 'message'];
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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactDetails = [
    {
      icon: <FaPhone className="text-primary" size={24} />,
      title: 'Phone',
      details: '08032950881',
      action: 'tel:+2348032950881',
      actionText: 'Call us',
    },
    {
      icon: <FaEnvelope className="text-primary" size={24} />,
      title: 'Email',
      details: 'opeyemiademon@gmail.com',
      action: 'mailto:opeyemiademon@gmail.com',
      actionText: 'Send email',
    },
    {
      icon: <FaTwitter className="text-primary" size={24} />,
      title: 'Twitter',
      details: '@adeMansoor',
      action: 'https://twitter.com/adeMansoor',
      actionText: 'Follow us',
    },
    {
      icon: <FaMapMarkerAlt className="text-primary" size={24} />,
      title: 'Office Location',
      details: 'House 24, 34 Crescent, 3rd Avenue, Gwarimpa Abuja',
      action: 'https://maps.google.com/?q=House+24+34+Crescent+3rd+Avenue+Gwarimpa+Abuja+Nigeria',
      actionText: 'Get directions',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              We're here to answer any questions you have about KAYUS School Management System. Reach out to us and we'll respond as soon as we can.
            </p>
            
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-2">{item.details}</p>
                    <a 
                      href={item.action} 
                      className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                      target={item.title === 'Twitter' || item.title === 'Office Location' ? '_blank' : undefined}
                      rel={item.title === 'Twitter' || item.title === 'Office Location' ? 'noopener noreferrer' : undefined}
                    >
                      {item.actionText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1" htmlFor="firstname">
                    Fullname*
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1" htmlFor="email_address">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    value={formData.email_address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  {errors.email_address && <p className="text-red-500 text-sm mt-1">{errors.email_address}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1" htmlFor="subject">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="quote">Get a Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1" htmlFor="message">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                {/* Mathematics area */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Please solve this math problem to verify you're human: *
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {mathQuestion.num1} + {mathQuestion.num2} =
                    </span>
                    <input
                      type="number"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                        setMathError('');
                      }}
                      className="w-20 px-2 py-1 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  {mathError && (
                    <p className="text-red-500 text-sm">{mathError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
