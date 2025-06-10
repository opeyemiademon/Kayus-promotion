import React, { useEffect, useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose }) => {
  const [randomImage, setRandomImage] = useState('');
  
  const adImages = [
    '/images/advert/ad1.jpeg',
    '/images/advert/ad2.jpeg',
    '/images/advert/ad3.jpeg'
  ];

  useEffect(() => {
    if (isOpen) {
      const randomIndex = Math.floor(Math.random() * adImages.length);
      setRandomImage(adImages[randomIndex]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-4 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mt-4">
          <img
            src={randomImage}
            alt="Advertisement"
            className="w-full h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
