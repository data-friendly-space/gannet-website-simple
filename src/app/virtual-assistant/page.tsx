"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiCalendar, FiCheck, FiArrowRight, FiPlus, FiGlobe, FiShield, FiDatabase, FiUsers, FiBarChart } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

export default function VirtualAssistantPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gannetLightBg';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';

  const coreBenefits = [
    {
      title: "Democratized Knowledge",
      description: "Centralized hub promoting collective intelligence while reducing resource needs",
      icon: FiUsers
    },
    {
      title: "Trusted & Ethical", 
      description: "Expert-validated data with built-in ethical guardrails ensures reliable, bias-free information",
      icon: FiShield
    },
    {
      title: "Real-Time Insights",
      description: "Up-to-date information enables faster decision-making for urgent humanitarian needs", 
      icon: FiBarChart
    },
    {
      title: "Scalable Integration",
      description: "Seamlessly works with existing systems, supporting organizations of any size",
      icon: FiDatabase
    }
  ];

  const keyFeatures = [
    {
      title: "Personalized AI Chatbot",
      description: "Expert humanitarian analysis tailored to your specific context, delivering timely insights for crisis management and resource allocation.",
      icon: "🤖"
    },
    {
      title: "Data Explorer", 
      description: "Access and analyze verified sources with transparent filtering by date, country, and source type through our user-friendly interface.",
      icon: "📊"
    },
    {
      title: "Collaborative Knowledge Hub",
      description: "Centralized humanitarian intelligence that continuously improves, fostering seamless collaboration among teams and partners.",
      icon: "🧠"
    },
    {
      title: "Verified Data Sources",
      description: "Expert-validated information grounded in established humanitarian frameworks, minimizing misinformation risks.",
      icon: "✓"
    },
    {
      title: "Multi-Lingual Support",
      description: "Seamless communication in almost any language, breaking down language barriers to serve diverse humanitarian contexts worldwide.",
      icon: "🌍"
    },
    {
      title: "RAG Architecture",
      description: "Advanced Retrieval-Augmented Generation system that combines real-time data retrieval with AI generation for accurate, contextual responses.",
      icon: "🔗"
    }
  ];

  const stats = [
    { number: "600+", label: "Active Users" },
    { number: "190+", label: "Organizations" },
    { number: "72", label: "Countries" },
    { number: "875", label: "Data Sources" }
  ];

  const dataSources = [
    { number: "875", label: "Media Sources", description: "Comprehensive news and media coverage" },
    { number: "137", label: "Government Sources", description: "Official government data and reports" },
    { number: "14", label: "UN Agencies", description: "United Nations humanitarian data" },
    { number: "29", label: "International NGOs", description: "Global humanitarian organizations" }
  ];

  const faqItems = [
    {
      question: "How does the AI ensure data accuracy and reliability?",
      answer: "Our AI uses expert-validated data sources and established humanitarian frameworks with built-in ethical guardrails to minimize misinformation risks."
    },
    {
      question: "What languages does the Virtual Assistant support?",
      answer: "The Virtual Assistant supports almost any language, enabling seamless communication across diverse humanitarian contexts worldwide."
    },
    {
      question: "How does the RAG system work?",
      answer: "Our Retrieval-Augmented Generation (RAG) architecture combines real-time data retrieval from our comprehensive database with advanced AI generation, ensuring responses are both accurate and contextually relevant to current humanitarian situations."
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
                GANNET Virtual Assistant
              </motion.h1>
              
              <motion.p 
                className={`text-xl font-semibold ${headingClass} mb-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                The analysis staff you didn't know you had
              </motion.p>
              
              <motion.p 
                className={`text-body-large ${textClass} mb-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Transform complex humanitarian data into actionable insights with GANNET's AI-powered Virtual Assistant. Available 24/7, it enables faster crisis response and better-informed decision-making while reducing operational costs.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="https://app.gannet.ai/sign-in"
                  className="btn-cta flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to the VA now
                </Link>
                <Link
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
                  className="btn-cta-secondary flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a demo
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
                {/* Video preview */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`heading-section ${headingClass} mb-4`}>Trusted by Humanitarians Worldwide</h2>
            <p className={`text-body ${textClass}`}>
              Empowering the frontlines of humanitarian response: 80% of our users come from local organizations that previously lacked access to advanced analytical tools.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-4xl font-bold ${isDark ? 'text-gannetGreen' : 'text-gannetBlue'} mb-2`}>
                  {stat.number}
                </div>
                <div className={`text-body ${textClass} font-medium`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2 
            className={`heading-section ${headingClass} text-center mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Data Coverage
          </motion.h2>
          
          <motion.p 
            className={`text-body-large ${textClass} text-center mb-12 max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Currently processing over 875 data sources across multiple categories, ensuring comprehensive and reliable humanitarian intelligence.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <motion.div
                key={index}
                className={`${cardBg} rounded-xl shadow-lg card-padding text-center border-2 border-transparent hover:border-gannetBlue transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-3xl font-bold ${isDark ? 'text-gannetBlue' : 'text-gannetGreen'} mb-2`}>
                  {source.number}
                </div>
                <h3 className={`heading-subsection ${headingClass} mb-2`}>{source.label}</h3>
                <p className={`text-body-small ${textClass}`}>{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2 
            className={`heading-section ${headingClass} text-center mb-12`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Core Benefits
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-gannetGreen transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-gannetGreen/10 rounded-lg mr-4">
                    <benefit.icon className="h-6 w-6 text-gannetGreen" />
                  </div>
                  <div>
                    <h3 className={`heading-card ${headingClass} mb-2`}>{benefit.title}</h3>
                    <p className={`text-body ${textClass}`}>{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2 
            className={`heading-section ${headingClass} text-center mb-12`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative flex justify-center">
                {/* Mobile Chatbot Animation */}
                <motion.div 
                  className="w-64 h-96 bg-gray-900 rounded-3xl shadow-xl relative overflow-hidden"
                  animate={{ 
                    y: [0, -8, 0],
                    rotateY: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Phone Screen */}
                  <div className="absolute inset-2 bg-white rounded-2xl flex flex-col">
                    {/* Header */}
                    <motion.div 
                      className="h-16 bg-gannetGreen rounded-t-2xl flex items-center justify-center"
                      animate={{ 
                        boxShadow: [
                          "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          "0 10px 15px -3px rgba(122, 213, 117, 0.3)",
                          "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        <FiMessageSquare className="h-6 w-6 text-white mr-2" />
                      </motion.div>
                      <span className="text-white font-semibold">GANNET VA</span>
                    </motion.div>
                    
                    {/* Chat Area */}
                    <div className="flex-1 p-4 space-y-3">
                      {/* AI Message */}
                      <motion.div 
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        <motion.div 
                          className="bg-gray-100 rounded-lg p-3 max-w-xs"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <p className="text-sm text-gray-700">Hello! I'm your AI assistant. How can I help with humanitarian analysis today?</p>
                        </motion.div>
                      </motion.div>
                      
                      {/* User Message */}
                      <motion.div 
                        className="flex justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 0.5 }}
                      >
                        <motion.div 
                          className="bg-gannetBlue rounded-lg p-3 max-w-xs"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <p className="text-sm text-white">What's the current situation in Lebanon?</p>
                        </motion.div>
                      </motion.div>
                      
                      {/* AI Response */}
                      <motion.div 
                        className="flex justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3, duration: 0.5 }}
                      >
                        <motion.div 
                          className="bg-gray-100 rounded-lg p-3 max-w-xs"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <p className="text-sm text-gray-700">I'll analyze the latest data from 875 sources...</p>
                          
                          {/* Typing indicator */}
                          <motion.div 
                            className="flex space-x-1 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5, duration: 0.3 }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gannetGreen rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-gannetGreen rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div 
                              className="w-2 h-2 bg-gannetGreen rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Input Area */}
                    <motion.div 
                      className="h-16 border-t border-gray-200 flex items-center px-4"
                      animate={{ 
                        borderColor: ["#e5e7eb", "#7ad575", "#e5e7eb"]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex-1 bg-gray-100 rounded-full h-10 flex items-center px-3">
                        <motion.span 
                          className="text-gray-400 text-sm"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Type your question...
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-2xl mr-4 flex-shrink-0">{feature.icon}</span>
                    <div>
                      <h3 className={`heading-subsection ${headingClass} mb-2`}>{feature.title}</h3>
                      <p className={`text-body ${textClass}`}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  href="https://app.gannet.ai/sign-in"
                  className="btn-cta inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Using the VA Now
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2 
            className={`heading-section ${headingClass} text-center mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Started Today
          </motion.h2>
          
          <motion.p 
            className={`text-body-large ${textClass} text-center mb-12 max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join hundreds of humanitarian organizations already using GANNET's Virtual Assistant to make faster, better-informed decisions.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="https://app.gannet.ai/sign-in"
                className="btn-cta flex items-center justify-center text-lg px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the Virtual Assistant
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
                className="btn-cta-secondary flex items-center justify-center text-lg px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiCalendar className="mr-2 w-5 h-5" />
                Book a Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetDarkBg' : 'bg-gray-900'}`}>
        <div className="max-w-4xl mx-auto container-padding">
          <motion.h2 
            className="text-white heading-section text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg pr-8">{item.question}</h3>
                  <FiPlus className="text-white w-5 h-5 flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-300 text-body leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 