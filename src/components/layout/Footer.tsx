"use client";

import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createSubscriber } from '@/services/api_services/clientApiServices';
import { NotifyAlerts } from '../globalFunction/Notify';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const queryClient = useQueryClient();


const [user, setUser] = useState({
  email_address: "",
})

const [errors, setErrors] = useState(
  {
  email_address: ""
}
);

const mutation = useMutation({
  mutationFn: createSubscriber,
  onSuccess: (data) => {
    queryClient.invalidateQueries({ queryKey: ["create-subscriber"] });

    if(data?.createSubscriber?.status === 200){
      NotifyAlerts("success", "Subscribed", "Email successfully submitted");
   setUser({
    email_address: ""
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
 
  let error = { ...errors };
  

  let msg = "This field is required";

  if (!user.email_address) {
    error.email_address = msg;
    formIsValid = false;
  }


  if (formIsValid) {
    try {
      mutation.mutate({email_address:user.email_address});
    } catch (err) {
      console.log(err);
    }
  }
};




  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link href="/" className="flex items-center">
          <div className="relative h-16 w-auto">
            <img 
              src="/images/logo.png" 
              alt="KAYUS" 
              className="h-full w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/150x50?text=Logo';
              }}
            />
          </div>
        </Link>
            <h3 className="text-xl font-bold mb-4">KAYUS</h3>
            <p className="text-neutral-300 mb-4">
             A Comprehensive school automation software for nursery, primary, and secondary schools in Nigeria.
            </p>
               </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-primary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-neutral-300 hover:text-primary-light transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-300 hover:text-primary-light transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary-light mt-1" />
                <span className="text-neutral-300">08032950881</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-light mt-1" />
                <span className="text-neutral-300">opeyemiademon@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-light mt-1" />
                <span className="text-neutral-300">House 24, 34 Crescent, 3rd Avenue, Gwarimpa Abuja</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-neutral-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          
          
          {/* subscriber area */}
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  value={user.email_address}
                  onChange={(e) => setUser({ ...user, email_address: e.target.value })}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
              disabled={mutation.isPending}
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                {mutation.isPending ? "Subscribing..." : "Subscribe"}
              </button>
            </form>



            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/adeMansoor" className="text-neutral-300 hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} KAYUS School Management System. All rights reserved. Developed by Admotron Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
