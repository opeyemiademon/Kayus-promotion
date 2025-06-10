"use client"
import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaChevronDown, FaDownload, FaPlay, FaWhatsapp } from 'react-icons/fa';

interface NavItem {
  name: string;
  href?: string;
  isDropdown?: boolean;
  items?: DropdownItem[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isOpen?: boolean;
  toggleMobile?: () => void;
  mobileOpen?: boolean;
}

interface DropdownItem {
  name: string;
  href: string;
  icon?: ReactNode;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const productItems: DropdownItem[] = [
    { name: 'KAYUS for Schools', href: '/' },
    { name: 'KAYUS for Colledges', href: '/colleges' },
   
    { name: 'KAYUS for Polytechnic', href: '/polytechnic' },
    { name: 'KAYUS for University', href: '/university' },
  ];

  const companyItems: DropdownItem[] = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Download Proposal', href: '/images/proposal.pdf', icon: <FaDownload className="ml-1" /> },
  ];

  const mainNavLinks: NavItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      isDropdown: true,
      items: productItems,
      onMouseEnter: () => setProductsDropdownOpen(true),
      onMouseLeave: () => setProductsDropdownOpen(false),
      isOpen: productsDropdownOpen,
      toggleMobile: () => setMobileProductsOpen(!mobileProductsOpen),
      mobileOpen: mobileProductsOpen
    },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { 
      name: 'Company', 
      isDropdown: true,
      items: companyItems,
      onMouseEnter: () => setCompanyDropdownOpen(true),
      onMouseLeave: () => setCompanyDropdownOpen(false),
      isOpen: companyDropdownOpen,
      toggleMobile: () => setMobileCompanyOpen(!mobileCompanyOpen),
      mobileOpen: mobileCompanyOpen
    },
  ];



  const phoneNumber = '2348032950881';
  const message = encodeURIComponent('Hi, I\'m interested in becoming a partner with KAYUS School Management System. Please provide more information.');
 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 text-sm">
            <a href="mailto:opeyemiademon@gmail.com" className="flex items-center hover:text-blue-200 transition-colors">
              <FaEnvelope className="mr-2" />
              <span className="hidden sm:inline">opeyemiademon@gmail.com</span>
            </a>
            <a href="tel:08032950881" className="flex items-center hover:text-blue-200 transition-colors">
              <FaPhone className="mr-2" size={14} />
              <span>08032950881</span>
            </a>
          </div>
          
          {/* Right Side Links */}
          <div className="flex items-center space-x-4">
            <Link href={`https://wa.me/${phoneNumber}?text=${message}`} className="bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded text-xs font-medium transition-colors">
              DOCUMENTATION
            </Link>
            <Link href="/videos" className="font-bold text-sm hover:text-blue-200 transition-colors flex items-center">
              <FaPlay className="mr-1" size={12} /> VIDEOS
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-md' : 'bg-white dark:bg-neutral-900'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}

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

        
            

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              {mainNavLinks.map((link, index) => (
                <div key={index} className="relative group" onMouseEnter={link.isDropdown ? link.onMouseEnter : undefined} onMouseLeave={link.isDropdown ? link.onMouseLeave : undefined}>
                  {link.isDropdown ? (
                    <button className="flex items-center text-sm font-medium transition-colors duration-300 text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-light">
                      {link.name} <FaChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link 
                      href={link.href || '#'} 
                      className={`text-sm font-medium transition-colors duration-300 ${pathname === link.href ? 'text-primary' : 'text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-light'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu */}
                  {link.isDropdown && link.isOpen && (
                    <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 z-50 transform transition-all duration-300 ease-in-out">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {link.items?.map((item, itemIndex) => (
                          <Link 
                            key={itemIndex} 
                            href={item.href} 
                            className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-primary dark:text-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-150 flex items-center"
                            role="menuitem"
                          >
                            {item.name} {item.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/pricing#demo" className="btn-outline text-sm py-2 px-4">
                Request Demo
              </Link>
              <Link href="/contact" className="btn-accent text-sm py-2 px-4">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-800 dark:text-neutral-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {mainNavLinks.map((link, index) => (
                  <div key={index}>
                    {link.isDropdown ? (
                      <>
                        <button 
                          onClick={link.toggleMobile} 
                          className="flex items-center justify-between w-full text-left text-base font-medium transition-colors duration-300 text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-light"
                        >
                          <span>{link.name}</span>
                          <FaChevronDown className={`h-4 w-4 transition-transform duration-200 ${link.mobileOpen ? 'transform rotate-180' : ''}`} />
                        </button>
                        
                        {link.mobileOpen && (
                          <div className="pl-4 mt-2 space-y-2 border-l-2 border-neutral-200 dark:border-neutral-700">
                            {link.items?.map((item, itemIndex) => (
                              <Link 
                                key={itemIndex} 
                                href={item.href} 
                                className=" py-2 text-sm text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-light transition-colors duration-150 flex items-center"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name} {item.icon}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href || '#'}
                        className={`text-base font-medium transition-colors duration-300 ${pathname === link.href ? 'text-primary' : 'text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary-light'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <Link href="/demo" className="btn-outline text-center" onClick={() => setIsMenuOpen(false)}>
                    Request Demo
                  </Link>
                  <Link href="/contact" className="btn-accent text-center" onClick={() => setIsMenuOpen(false)}>
                    Get Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
