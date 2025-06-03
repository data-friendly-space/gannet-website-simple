"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiMap, FiCalendar } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark 
    ? 'bg-gannetDarkBg' 
    : 'bg-gannetLightBg';
  
  const gradientBg = isDark
    ? 'from-gannetDarkBg via-gannetDarkBg to-gannetCardBg/80'
    : 'from-blue-50 to-white';
  
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const tagBg = isDark ? 'bg-gannetBlue/20' : 'bg-blue-50';
  const tagText = isDark ? 'text-gannetBlue' : 'text-blue-800';
  const tagHover = isDark ? 'hover:bg-gannetBlue/30' : 'hover:bg-blue-100';

  return (
    <section className={`relative section-padding overflow-hidden ${bgClass}`}>
      {/* Background gradient and decorative elements */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientBg} -z-10`} />
      
      {/* Decorative elements */}
      <div className="absolute top-16 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gannetBlue/10 to-gannetAccent.purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gannetGreen/10 to-gannetAccent.blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main hero content */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`heading-hero ${headingClass} mb-6`}>
            <span className="block">Humanitarian Intelligence</span>
            <span className="block gannet-gradient">
              Powered by AI
            </span>
          </h1>
          
          <p className={`section-subtitle ${textClass}`}>
            GANNET&apos;s initiative offers AI-powered tools that deliver accessible, real-time information to enhance efficiency and drive meaningful outcomes in humanitarian response.
          </p>
        </motion.div>

        {/* Visual products showcase */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Virtual Assistant */}
          <div className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-gannetGreen transition-all duration-300 hover:shadow-xl`}>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gannetGreen rounded-lg">
                <FiMessageSquare className="h-6 w-6 text-gannetDarkBg" />
              </div>
              <h2 className={`ml-4 heading-card ${headingClass}`}>Virtual Assistant</h2>
            </div>
            
            <p className={`text-body ${textClass} mb-6`}>
              Ask questions in any language and get clear answers supported by relevant documents.
            </p>
            
            {/* Video preview */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/gannet-virtual-assistant-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <Link
              href="https://app.gannet.ai/sign-in"
              className="btn-cta flex items-center justify-center w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Chat with GANNET</span>
              <svg 
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Situation Hubs */}
          <div className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-gannetBlue transition-all duration-300 hover:shadow-xl`}>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gannetBlue rounded-lg">
                <FiMap className="h-6 w-6 text-white" />
              </div>
              <h2 className={`ml-4 heading-card ${headingClass}`}>SituationHub</h2>
            </div>
            
            <p className={`text-body ${textClass} mb-6`}>
              Real-time data transformed into structured situation analysis reports with human oversight.
            </p>
            
            {/* Video preview */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/gannet-sithub-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Region links */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <Link
                href="https://analysis.gannet.ai/lebanon"
                className={`${tagBg} ${tagText} ${tagHover} px-4 py-3 rounded-lg text-center text-body-small font-semibold transition-all duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lebanon
              </Link>
              <Link
                href="https://analysis.gannet.ai/sudan"
                className={`${tagBg} ${tagText} ${tagHover} px-4 py-3 rounded-lg text-center text-body-small font-semibold transition-all duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sudan
              </Link>
              <Link
                href="https://analysis.gannet.ai/myanmar"
                className={`${tagBg} ${tagText} ${tagHover} px-4 py-3 rounded-lg text-center text-body-small font-semibold transition-all duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Myanmar
              </Link>
            </div>
            <p className={`text-caption ${textClass} text-center italic`}>
              Select a region for latest humanitarian insights
            </p>
          </div>
        </motion.div>

        {/* Call-to-action section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
              className="btn-cta-secondary flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiCalendar className="mr-2 w-5 h-5" />
              <span>Book a Demo</span>
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 