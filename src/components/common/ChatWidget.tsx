"use client";

import React, { useState, useEffect } from 'react';
import { FaComment, FaWhatsapp, FaTimes } from 'react-icons/fa';

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const [chatInitialized, setChatInitialized] = useState(false);

  // This would normally load the actual chat widget script
  // For demonstration purposes, we're just showing the UI
  useEffect(() => {
    if (chatOpen && !chatInitialized) {
      // In a real implementation, this would load the Tawk.to or other chat widget script
      console.log('Chat widget would be initialized here');
      setChatInitialized(true);
    }
  }, [chatOpen, chatInitialized]);

  const openWhatsApp = () => {
    const phoneNumber = '2348032950881';
    const message = encodeURIComponent('Hi, I\'m interested in KAYUS School Management System. Please provide more information.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* WhatsApp Button */}
      <div 
        className="relative group"
        onMouseEnter={() => setWhatsappHovered(true)}
        onMouseLeave={() => setWhatsappHovered(false)}
      >
        {whatsappHovered && (
          <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-2 text-sm font-medium whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-neutral-800"></div>
          </div>
        )}
        <button 
          onClick={openWhatsApp}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>

    </div>
  );
};

export default ChatWidget;
