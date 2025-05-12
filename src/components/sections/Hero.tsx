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
  const tagBg = isDark ? 'bg-gannetBlue/20' : 'bg-blue-50';
  const tagText = isDark ? 'text-gannetBlue' : 'text-blue-800';
  const tagHover = isDark ? 'hover:bg-gannetBlue/30' : 'hover:bg-blue-100';

  return (
    <section className={`relative pt-12 overflow-hidden ${bgClass}`}>
      {/* Background gradient and decorative elements */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientBg} -z-10`} />
      
      {/* Decorative elements */}
      <div className="absolute top-24 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gannetBlue/10 to-gannetAccent.purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gannetGreen/10 to-gannetAccent.blue/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
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
            GANNET&apos;s initiative offers AI-powered tools that deliver accessible, real-time information to enhance efficiency and drive meaningful outcomes in humanitarian response.
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
            <div className={`${cardBg} rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-gannetGreen transition-all flex flex-col`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gannetGreen rounded-lg">
                  <FiMessageSquare className="h-6 w-6 text-gannetDarkBg" />
                </div>
                <h2 className={`ml-4 text-2xl font-bold ${headingClass}`}>Virtual Assistant</h2>
              </div>
              <p className={`${textClass} mb-4`}>
              Consider our Virtual Assistant as a reliable teammate, providing clear answers supported by the relevant documents. You can ask questions in any language, and it will respond in the language you prefer.
              </p>
              <div className="flex justify-center mb-6 mt-auto">
                <div className="relative w-[70%] aspect-video rounded-lg overflow-hidden shadow-md">
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
              </div>
              <div className="space-y-4 mt-auto">
                <Link
                  href="https://app.gannet.ai/sign-in"
                  className="group flex items-center justify-center px-8 py-3 bg-gannetGreen text-gannetDarkBg font-bold rounded-lg transition-all duration-300 hover:bg-gannetGreen/90 hover:scale-105 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Chat with GANNET</span>
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
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
            </div>

            {/* Situation Hubs */}
            <div className={`${cardBg} rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-gannetBlue transition-all flex flex-col`}>
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gannetBlue rounded-lg">
                  <FiMap className="h-6 w-6 text-gannetDarkBg" />
                </div>
                <h2 className={`ml-4 text-2xl font-bold ${headingClass}`}>Situation Hubs</h2>
              </div>
              <p className={`${textClass} mb-4`}>
              GANNET SituationHub transforms real-time data into structured, automated situation analysis reports with human oversight. By combining GANNET&apos;s capabilities with DFS&apos;s humanitarian analysis expertise, SituationHub offers regular situational analysis and media monitoring, following established humanitarian frameworks.
              </p>
              <div className="flex justify-center mb-6 mt-auto">
                <div className="relative w-[70%] aspect-video rounded-lg overflow-hidden shadow-md">
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
              </div>
              <div className="space-y-4 mt-auto">
                <p className={`text-gannetBlue font-medium text-center`}>
                  Explore the crises we are monitoring
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <Link
                    href="https://analysis.gannet.ai/lebanon"
                    className={`group relative flex flex-col items-center justify-center px-8 py-1 ${tagBg} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${tagHover} flex-1 md:max-w-[240px]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`${tagText} font-semibold text-lg`}>Lebanon</span>
                    <span className={`text-sm ${textClass} text-center opacity-0 group-hover:opacity-100 transition-opacity`}>View Analysis</span>
                  </Link>
                  <Link
                    href="https://analysis.gannet.ai/sudan"
                    className={`group relative flex flex-col items-center justify-center px-8 py-1 ${tagBg} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${tagHover} flex-1 md:max-w-[240px]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`${tagText} font-semibold text-lg`}>Sudan</span>
                    <span className={`text-sm ${textClass} text-center opacity-0 group-hover:opacity-100 transition-opacity`}>View Analysis</span>
                  </Link>
                  <Link
                    href="https://analysis.gannet.ai/myanmar"
                    className={`group relative flex flex-col items-center justify-center px-8 py-1 ${tagBg} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${tagHover} flex-1 md:max-w-[240px]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`${tagText} font-semibold text-lg`}>Myanmar</span>
                    <span className={`text-sm ${textClass} text-center opacity-0 group-hover:opacity-100 transition-opacity`}>View Analysis</span>
                  </Link>
                </div>
                <div className={`text-center mt-4`}>
                  <p className={`text-sm ${textClass} italic`}>
                    Select a region to access the latest humanitarian insights and analysis
                  </p>
                  <div className="flex items-center justify-center mt-2 text-gannetBlue">
                    <span className="animate-pulse">●</span>
                    <span className="mx-1 animate-pulse" style={{ animationDelay: '0.2s' }}>●</span>
                    <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>●</span>
                  </div>
                </div>
              </div>
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
                <span className={`font-semibold ${isDark ? 'text-gannetTextLight' : 'text-gray-900'}`}>500+</span> Humanitarian Decision-Makers
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