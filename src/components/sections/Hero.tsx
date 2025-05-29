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
    : 'bg-blue-50';
  
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
    <section className={`relative pt-16 md:pt-20 pb-12 overflow-hidden ${bgClass}`}>
      {/* Background gradient and decorative elements */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientBg} -z-10`} />
      
      {/* Decorative elements */}
      <div className="absolute top-16 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gannetBlue/10 to-gannetAccent.purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gannetGreen/10 to-gannetAccent.blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Main hero content */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${headingClass} mb-4`}>
            <span className="block">Humanitarian Intelligence</span>
            <span className="block bg-gradient-to-r from-gannetGreen to-gannetLightGreen bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          
          <p className={`text-base md:text-lg ${textClass} max-w-3xl mx-auto`}>
            GANNET&apos;s initiative offers AI-powered tools that deliver accessible, real-time information to enhance efficiency and drive meaningful outcomes in humanitarian response.
          </p>
        </motion.div>

        {/* Visual products showcase */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Virtual Assistant - More compact */}
          <div className={`${cardBg} rounded-xl shadow-lg p-4 md:p-6 border-2 border-transparent hover:border-gannetGreen transition-all`}>
            <div className="flex items-center mb-3">
              <div className="p-2 bg-gannetGreen rounded-lg">
                <FiMessageSquare className="h-5 w-5 text-gannetDarkBg" />
              </div>
              <h2 className={`ml-3 text-xl md:text-2xl font-bold ${headingClass}`}>Virtual Assistant</h2>
            </div>
            
            <p className={`${textClass} text-sm md:text-base mb-4`}>
              Ask questions in any language and get clear answers supported by relevant documents.
            </p>
            
            {/* Video preview - smaller and more prominent */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-4">
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
              className="group flex items-center justify-center px-6 py-2.5 bg-gannetGreen text-gannetDarkBg font-bold rounded-lg transition-all duration-300 hover:bg-gannetGreen/90 hover:scale-105 shadow-md hover:shadow-lg w-full text-sm md:text-base"
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

          {/* Situation Hubs - More compact */}
          <div className={`${cardBg} rounded-xl shadow-lg p-4 md:p-6 border-2 border-transparent hover:border-gannetBlue transition-all`}>
            <div className="flex items-center mb-3">
              <div className="p-2 bg-gannetBlue rounded-lg">
                <FiMap className="h-5 w-5 text-gannetDarkBg" />
              </div>
              <h2 className={`ml-3 text-xl md:text-2xl font-bold ${headingClass}`}>SituationHub</h2>
            </div>
            
            <p className={`${textClass} text-sm md:text-base mb-4`}>
              Real-time data transformed into structured situation analysis reports with human oversight.
            </p>
            
            {/* Video preview - smaller and more prominent */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md mb-4">
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
            
            {/* Region links - more compact */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              <Link
                href="https://analysis.gannet.ai/lebanon"
                className={`${tagBg} ${tagText} ${tagHover} px-3 py-2 rounded-lg text-center text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lebanon
              </Link>
              <Link
                href="https://analysis.gannet.ai/sudan"
                className={`${tagBg} ${tagText} ${tagHover} px-3 py-2 rounded-lg text-center text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sudan
              </Link>
              <Link
                href="https://analysis.gannet.ai/myanmar"
                className={`${tagBg} ${tagText} ${tagHover} px-3 py-2 rounded-lg text-center text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Myanmar
              </Link>
            </div>
            <p className={`text-xs ${textClass} text-center italic`}>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
              className="group flex items-center justify-center px-6 py-3 bg-gannetBlue text-white font-bold rounded-lg transition-all duration-300 hover:bg-gannetBlue/90 hover:scale-105 shadow-md hover:shadow-lg"
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