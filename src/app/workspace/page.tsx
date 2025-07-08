"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDatabase, FiShield, FiSearch, FiShare2, FiDownload, FiSettings, FiLock, FiGlobe, FiArrowRight, FiCheckCircle, FiClock, FiZap } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

export default function WorkspacePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gannetLightBg';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';

  const challenges = [
    {
      title: "Time-intensive information retrieval",
      description: "Staff spend valuable time searching through documents instead of focusing on impactful work",
      icon: FiClock
    },
    {
      title: "Fragmented knowledge systems",
      description: "Information scattered across SharePoint, drives, and multiple platforms creates inefficiency",
      icon: FiDatabase
    },
    {
      title: "Security constraints",
      description: "Sensitive documents and beneficiary data require specialized security measures",
      icon: FiShield
    }
  ];

  const keyFeatures = [
    {
      title: "Seamless Integration",
      description: "Direct SharePoint connectivity with universal file support (PDF, CSV, Excel, PowerPoint, etc.) and automatic document syncing",
      icon: FiShare2
    },
    {
      title: "Enterprise Security",
      description: "Complete data sovereignty with end-to-end encryption, granular access controls, and comprehensive audit trails",
      icon: FiLock
    },
    {
      title: "Advanced Search",
      description: "Natural language processing with social impact context understanding, source verification & citations, and multi-language capabilities",
      icon: FiSearch
    }
  ];

  const solutionFeatures = [
    {
      title: "Private AI Architecture",
      description: "Completely private environment within your organization's control"
    },
    {
      title: "Knowledge Integration",
      description: "Upload documents manually or connect directly to SharePoint"
    },
    {
      title: "Contextual Intelligence",
      description: "Understands social impact frameworks and terminology"
    }
  ];

  const implementationOptions = [
    {
      title: "Ready-to-Use Solution",
      timeframe: "2-5 days",
      features: [
        "Pre-configured workspace",
        "Fixed pricing model",
        "Quick deployment",
        "Standard features"
      ],
      cta: "Get Started Now",
      href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
    },
    {
      title: "Advanced Implementation",
      timeframe: "2-6 weeks",
      features: [
        "Fully customizable",
        "Platform integration",
        "Volume licensing",
        "API access"
      ],
      cta: "Contact us",
      href: "mailto:info@gannet.ai?subject=Advanced%20Workspace%20Implementation&body=Hello%20GANNET%20team,%0D%0A%0D%0AI%20am%20interested%20in%20the%20advanced%20Workspace%20implementation.%20Please%20contact%20me%20to%20discuss%20our%20specific%20requirements%20and%20customization%20needs.%0D%0A%0D%0AThank%20you."
    }
  ];

  return (
    <div className={`${bgClass} min-h-screen`}>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h1 
                className={`heading-hero ${headingClass} mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                GANNET Workspace
              </motion.h1>
              
              <motion.p 
                className={`text-xl font-semibold ${headingClass} mb-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                AI-Powered Knowledge Management for Social Impact Organizations
              </motion.p>
              
              <motion.p 
                className={`text-body-large ${textClass} mb-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Transform your organization's knowledge into instant, intelligent insights. Upload documents or connect to SharePoint for AI-powered knowledge management with complete data sovereignty.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
                  className="btn-cta flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Demo
                </Link>

              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Workspace Visual */}
                <div className={`${cardBg} rounded-xl shadow-xl p-8 border-2 border-purple-200`}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-500 rounded-lg">
                      <FiDatabase className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className={`text-xl font-bold ${headingClass}`}>Knowledge Hub</h3>
                      <p className={`text-sm ${textClass}`}>Your AI-powered workspace</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <FiSearch className="h-5 w-5 text-purple-500 mr-3" />
                      <span className={`text-sm ${textClass}`}>Search across all documents instantly</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <FiShield className="h-5 w-5 text-purple-500 mr-3" />
                      <span className={`text-sm ${textClass}`}>Secure & private AI processing</span>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <FiGlobe className="h-5 w-5 text-purple-500 mr-3" />
                      <span className={`text-sm ${textClass}`}>Multi-language support</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-4 bg-red-100 dark:bg-red-900/20 rounded-lg mb-6">
              <h2 className={`text-4xl font-bold text-red-600 dark:text-red-400`}>70%</h2>
              <p className={`text-sm font-medium text-red-600 dark:text-red-400`}>Time wasted searching vs. acting</p>
            </div>
            <h2 className={`heading-section ${headingClass} mb-8`}>
              The Challenge Organizations Face
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  className={`${cardBg} rounded-xl shadow-lg card-padding text-center border-2 border-transparent hover:border-red-300 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-lg">
                      <Icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <h3 className={`heading-subsection ${headingClass} mb-3`}>{challenge.title}</h3>
                  <p className={`text-body ${textClass}`}>{challenge.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`heading-section ${headingClass} mb-6`}>
              Your Solution: GANNET Workspace
            </h2>
            <p className={`text-body-large ${textClass} max-w-3xl mx-auto`}>
              A comprehensive AI-powered knowledge management system designed specifically for social impact organizations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`${cardBg} rounded-xl shadow-lg card-padding text-center border-2 border-transparent hover:border-purple-300 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <FiCheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <h3 className={`heading-subsection ${headingClass} mb-3`}>{feature.title}</h3>
                <p className={`text-body ${textClass}`}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2 
            className={`heading-section ${headingClass} text-center mb-12`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-purple-300 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className={`heading-subsection ${headingClass} mb-2`}>{feature.title}</h3>
                    </div>
                  </div>
                  <p className={`text-body ${textClass}`}>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Options Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`heading-section ${headingClass} mb-6`}>
              Implementation Options
            </h2>
            <p className={`text-body-large ${textClass} max-w-3xl mx-auto`}>
              Choose the deployment approach that best fits your organization's needs and timeline
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {implementationOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-purple-300 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500 rounded-lg mr-4">
                    <FiZap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`heading-subsection ${headingClass}`}>{option.title}</h3>
                    <p className={`text-sm ${textClass}`}>{option.timeframe}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FiCheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className={`text-body ${textClass}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={option.href}
                  className="btn-cta w-full flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.cta}
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.h2 
            className={`${headingClass} heading-section mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Knowledge Management?
          </motion.h2>
          
          <motion.p 
            className={`text-body-large ${textClass} mb-8 max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join social impact organizations worldwide who are turning their knowledge into instant, intelligent insights with GANNET Workspace.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
              className="btn-cta flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 