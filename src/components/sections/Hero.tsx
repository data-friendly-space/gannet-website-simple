"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiMap } from 'react-icons/fi';
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
  const ctaTextClass = isDark ? 'text-gannetDarkBg' : 'text-white';
  const buttonHoverClass = isDark ? 'hover:bg-gannetBlue/10' : 'hover:bg-gray-50';
  const tagBg = isDark ? 'bg-gannetBlue/20' : 'bg-blue-50';
  const tagText = isDark ? 'text-gannetBlue' : 'text-blue-800';
  const tagHover = isDark ? 'hover:bg-gannetBlue/30' : 'hover:bg-blue-100';

  return (
    <section className={`relative pt-20 overflow-hidden ${bgClass}`}>
      {/* Background gradient and decorative elements */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientBg} -z-10`} />
      
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gannetBlue/10 to-gannetAccent.purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gannetGreen/10 to-gannetAccent.blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col items-center">
          {/* Hero content */}
          <motion.div 
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${headingClass}`}>
              <span className="block">Humanitarian Intelligence</span>
              <span className="block mt-2 bg-gradient-to-r from-gannetGreen to-gannetLightGreen bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            
            <p className={`mt-6 text-lg md:text-xl ${textClass}`}>
              GANNET offers AI-powered tools that provide accessible, real-time information to enhance efficiency and drive impactful outcomes in humanitarian response.
            </p>
          </motion.div>

          {/* Products section */}
          <motion.div 
            className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Virtual Assistant */}
            <div className={`${cardBg} rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-gannetGreen transition-all`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gannetGreen rounded-lg">
                  <FiMessageSquare className="h-6 w-6 text-gannetDarkBg" />
                </div>
                <h2 className={`ml-4 text-2xl font-bold ${headingClass}`}>Virtual Assistant</h2>
              </div>
              <p className={`${textClass} mb-6`}>
                Your AI-powered analysis staff that delivers instant, verified information when you need it most.
              </p>
              <Link
                href="https://app.gannet.ai/sign-in"
                className={`w-full block bg-gannetGreen text-${ctaTextClass} px-4 py-3 text-center font-medium shadow-sm hover:bg-gannetGreen/90 rounded-lg transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with GANNET
              </Link>
            </div>

            {/* Situation Hubs */}
            <div className={`${cardBg} rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-gannetBlue transition-all`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gannetBlue rounded-lg">
                  <FiMap className="h-6 w-6 text-gannetDarkBg" />
                </div>
                <h2 className={`ml-4 text-2xl font-bold ${headingClass}`}>Situation Hubs</h2>
              </div>
              <p className={`${textClass} mb-4`}>
                Comprehensive crisis dashboards with real-time data and insights for humanitarian operations.
              </p>
              <div className="grid grid-cols-3 gap-2 mb-6">
                <Link
                  href="https://analysis.gannet.ai/lebanon"
                  className={`text-center py-2 px-1 ${tagBg} ${tagText} rounded ${tagHover} text-sm font-medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lebanon
                </Link>
                <Link
                  href="https://analysis.gannet.ai/sudan"
                  className={`text-center py-2 px-1 ${tagBg} ${tagText} rounded ${tagHover} text-sm font-medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sudan
                </Link>
                <Link
                  href="https://analysis.gannet.ai/myanmar"
                  className={`text-center py-2 px-1 ${tagBg} ${tagText} rounded ${tagHover} text-sm font-medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Myanmar
                </Link>
              </div>
              <Link
                href="/solutions/situation-hub"
                className={`w-full block border border-gannetBlue text-gannetBlue px-4 py-3 text-center font-medium shadow-sm ${buttonHoverClass} rounded-lg transition-colors`}
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-10 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-x-6 mb-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`inline-block h-8 w-8 rounded-full border-2 border-${cardBg} overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Image
                      src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className={textClass}>
                <span className={`font-semibold ${isDark ? 'text-gannetTextLight' : 'text-gray-900'}`}>500+</span> satisfied users
              </div>
            </div>
            
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
              className={`${textClass} hover:text-gannetGreen flex items-center gap-1 font-medium`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Need a personalized demo? Book a call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 