"use client";

import { useState, useEffect } from 'react';
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
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col items-start">
              <Image
                src={isDark ? "/images/GANNET_Logo_Green.png" : "/images/GANNET_Logo_Green_Dark.png"}
                alt="GANNET Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
              <div className="flex items-center mt-1 opacity-70 hover:opacity-100 transition-opacity">
                <span className={`text-xs ${textClass}`}>created by</span>
                <Link 
                  href="https://www.datafriendlyspace.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/dfs-logo.svg"
                    alt="Data Friendly Space Logo"
                    width={60}
                    height={16}
                    className={`h-4 ml-1 ${isDark ? 'brightness-0 invert' : ''}`}
                  />
                </Link>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {/* Product Links */}
              <div className="flex space-x-4 mr-4">
                <Link
                  href="https://app.gannet.ai/sign-in"
                  className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-2 text-sm font-medium transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="px-2 py-0.5 bg-gannetGreen/20 text-gannetGreen rounded mr-1.5 text-xs">AI</span>
                  Virtual Assistant
                </Link>
                
                <div className="relative">
                  <button
                    className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-2 text-sm font-medium transition-colors`}
                    onMouseEnter={() => setShowHubsDropdown(true)}
                    onMouseLeave={() => setShowHubsDropdown(false)}
                    onClick={() => setShowHubsDropdown(!showHubsDropdown)}
                  >
                    <span className="px-2 py-0.5 bg-gannetGreen/20 text-gannetGreen rounded mr-1.5 text-xs">HUBS</span>
                    SituationHub
                    <FiChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showHubsDropdown && (
                    <div 
                      className={`absolute left-0 mt-1 w-48 rounded-md ${dropdownBg} py-1 shadow-lg ring-1 ring-black/10 ring-opacity-5 focus:outline-none z-50`}
                      onMouseEnter={() => setShowHubsDropdown(true)}
                      onMouseLeave={() => setShowHubsDropdown(false)}
                    >
                      {situationHubs.map((hub) => (
                        <Link
                          key={hub.name}
                          href={hub.href}
                          className={`block px-4 py-2 text-sm ${textClass} hover:bg-gray-100/50`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {hub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Regular Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${textClass} hover:text-gannetBlue px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link 
              href="https://givebutter.com/gannet" 
              className="bg-gannetBlue hover:bg-gannetBlue/90 text-white px-3 py-2 lg:px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fuel Our Mission
            </Link>
            <Link 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj" 
              className="bg-gannetGreen hover:bg-gannetGreen/90 text-gannetDarkBg px-3 py-2 lg:px-4 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Product Links */}
              <div className={`border-b ${mobileDivider} pb-2 mb-2`}>
                <div className={`font-medium text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} px-3 pb-1`}>
                  Our Products
                </div>
                
                <Link
                  href="https://app.gannet.ai/sign-in"
                  className={`flex items-center ${textClass} hover:text-gannetGreen px-3 py-2 text-base font-medium`}
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="px-2 py-0.5 bg-gannetGreen/20 text-gannetGreen rounded mr-2 text-xs">AI</span>
                  Virtual Assistant
                </Link>
                
                <div>
                  <button
                    onClick={() => setShowMobileHubs(!showMobileHubs)}
                    className={`w-full flex items-center justify-between ${textClass} hover:text-gannetGreen px-3 py-2 text-base font-medium`}
                  >
                    <div className="flex items-center">
                      <span className="px-2 py-0.5 bg-gannetGreen/20 text-gannetGreen rounded mr-2 text-xs">HUBS</span>
                      SituationHub
                    </div>
                    <FiChevronDown className={`h-4 w-4 transition-transform ${showMobileHubs ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showMobileHubs && (
                    <div className={`pl-10 py-1 space-y-1 ${mobileDropdownBg} rounded-lg mt-1 mb-2`}>
                      {situationHubs.map((hub) => (
                        <Link
                          key={hub.name}
                          href={hub.href}
                          className={`block px-3 py-2 text-sm ${textClass} hover:text-gannetGreen`}
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
              </div>
              
              {/* Regular Nav Links (Mobile) */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${textClass} hover:text-gannetGreen block px-3 py-2 text-base font-medium`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-4 px-3 pb-3 space-y-2">
                <Link 
                  href="https://givebutter.com/gannet" 
                  className="w-full block bg-gannetBlue hover:bg-gannetBlue/90 text-white px-4 py-2 rounded-lg text-base font-medium text-center"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fuel Our Mission
                </Link>
                <Link 
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj" 
                  className="w-full block bg-gannetGreen hover:bg-gannetGreen/90 text-gannetDarkBg px-4 py-2 rounded-lg text-base font-medium text-center"
                  onClick={() => setIsOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 