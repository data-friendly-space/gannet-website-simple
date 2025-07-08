"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useTheme } from '@/components/ui/ThemeContext';
import Image from 'next/image';

const navLinks = [
  { name: 'Capabilities', href: '/#capabilities' },
  // { name: 'Resources', href: '/#resources' },
  { name: 'Support', href: '/#support' },
];

const situationHubs = [
  { name: 'Lebanon', href: 'https://analysis.gannet.ai/lebanon' },
  { name: 'Sudan', href: 'https://analysis.gannet.ai/sudan' },
  { name: 'Myanmar', href: 'https://analysis.gannet.ai/myanmar' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHubsDropdown, setShowHubsDropdown] = useState(false);
  const [showMobileHubs, setShowMobileHubs] = useState(false);
  const { theme } = useTheme();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const isDark = theme === 'dark';

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const navBgClass = isDark
    ? scrolled ? 'bg-gannetNavBg/95 backdrop-blur-sm shadow-lg' : 'bg-gannetNavBg'
    : scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white';

  const textClass = isDark ? 'text-gannetTextLight' : 'text-gray-700';
  const dropdownBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const mobileBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const mobileDivider = isDark ? 'border-gray-800' : 'border-gray-100';
  const mobileDropdownBg = isDark ? 'bg-gannetDarkBg/50' : 'bg-gray-50';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 w-64">
            <Link href="/" className="flex flex-col items-start">
              <Image
                src={isDark ? "/images/GANNET_Logo_Green.png" : "/images/GANNET_Logo_Green_Dark.png"}
                alt="GANNET Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
              {/* Product Links */}
              <div className="flex items-center space-x-4">
                <Link
                  href="/virtual-assistant"
                  className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-2 text-body-small font-medium transition-colors`}
                >
                  <span className="px-2 py-1 bg-gannetGreen/20 text-gannetGreen rounded mr-2 text-caption font-semibold">VA</span>
                  Virtual Assistant
                </Link>
                
                <div 
                  className="relative"
                  onMouseEnter={() => {
                    // Clear any pending timeout
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    setShowHubsDropdown(true);
                  }}
                  onMouseLeave={() => {
                    // Add a small delay before hiding to allow smooth mouse movement
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setShowHubsDropdown(false);
                    }, 150);
                  }}
                >
                  <button
                    className={`flex items-center ${textClass} hover:text-gannetBlue px-3 py-2 text-body-small font-medium transition-colors`}
                    onClick={() => setShowHubsDropdown(!showHubsDropdown)}
                  >
                    <span className="px-2 py-1 bg-gannetBlue/20 text-gannetBlue rounded mr-2 text-caption font-semibold">HUBS</span>
                    SituationHub
                    <FiChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showHubsDropdown && (
                    <div 
                      className={`absolute left-0 top-full w-48 rounded-lg ${dropdownBg} py-2 shadow-lg ring-1 ring-black/10 ring-opacity-5 focus:outline-none z-50`}
                    >
                      <Link
                        href="/situationhub"
                        className={`block px-4 py-3 text-body-small font-semibold ${textClass} hover:bg-gray-100/50 transition-colors border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                      >
                        Learn More
                      </Link>
                      {situationHubs.map((hub) => (
                        <Link
                          key={hub.name}
                          href={hub.href}
                          className={`block px-4 py-3 text-body-small ${textClass} hover:bg-gray-100/50 transition-colors`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {hub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link
                  href="/workspace"
                  className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-2 text-body-small font-medium transition-colors`}
                >
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-500 rounded mr-2 text-caption font-semibold">WORKSPACE</span>
                  Workspace
                </Link>
              </div>
              
              {/* Navigation Divider */}
              <div className={`h-6 w-px ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
              
              {/* Regular Nav Links */}
              <div className="flex items-center space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`${textClass} hover:text-gannetBlue px-3 py-2 text-body-small font-medium transition-colors`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3 w-64 justify-end">
            <Link 
              href="https://givebutter.com/gannet" 
              className="bg-gannetBlue hover:bg-gannetBlue/90 text-white px-4 py-2.5 lg:px-5 rounded-lg text-body-small font-semibold transition-all duration-300 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fuel Our Mission
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textClass} hover:text-gannetGreen focus:outline-none`}
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${mobileBg}`}
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {/* Mobile Product Links */}
              <div className={`border-b ${mobileDivider} pb-4`}>
                <div className={`font-semibold text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} px-2 pb-2 mb-3`}>
                  Our Products
                </div>
                
                <div className="space-y-2">
                  <Link
                    href="/virtual-assistant"
                    className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-100/50 transition-all`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="px-2 py-0.5 bg-gannetGreen/20 text-gannetGreen rounded mr-3 text-xs font-semibold">VA</span>
                    Virtual Assistant
                  </Link>
                  
                  <div>
                    <button
                      onClick={() => setShowMobileHubs(!showMobileHubs)}
                      className={`w-full flex items-center justify-between ${textClass} hover:text-gannetBlue px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-100/50 transition-all`}
                    >
                      <div className="flex items-center">
                        <span className="px-2 py-0.5 bg-gannetBlue/20 text-gannetBlue rounded mr-3 text-xs font-semibold">HUBS</span>
                        SituationHub
                      </div>
                      <FiChevronDown className={`h-4 w-4 transition-transform ${showMobileHubs ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showMobileHubs && (
                      <div className={`ml-6 mt-2 py-2 space-y-1 ${mobileDropdownBg} rounded-lg`}>
                        <Link
                          href="/situationhub"
                          className={`block px-4 py-3 text-sm font-semibold ${textClass} hover:text-gannetBlue border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} mb-2`}
                          onClick={() => setIsOpen(false)}
                        >
                          Learn More
                        </Link>
                        {situationHubs.map((hub) => (
                          <Link
                            key={hub.name}
                            href={hub.href}
                            className={`block px-4 py-3 text-sm ${textClass} hover:text-gannetBlue rounded transition-colors`}
                            onClick={() => setIsOpen(false)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {hub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <Link
                    href="/workspace"
                    className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-100/50 transition-all`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-500 rounded mr-3 text-xs font-semibold">WORKSPACE</span>
                    Workspace
                  </Link>
                </div>
              </div>
              
              {/* Regular Nav Links (Mobile) */}
              <div className="space-y-1">
                <div className={`font-semibold text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} px-2 pb-2`}>
                  Navigation
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`${textClass} hover:text-gannetGreen block px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-100/50 transition-all`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 px-2">
                <Link 
                  href="https://givebutter.com/gannet" 
                  className="w-full block bg-gannetBlue hover:bg-gannetBlue/90 text-white px-4 py-3 rounded-lg text-base font-semibold text-center transition-all"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fuel Our Mission
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 