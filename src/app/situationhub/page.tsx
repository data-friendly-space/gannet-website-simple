"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

export default function SituationHubPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gannetLightBg';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';

  const coreBenefits = [
    {
      title: "Faster, Informed Decisions",
      description: "Accelerated access to critical data for precise crisis decision-making",
      icon: "💡"
    },
    {
      title: "Operational Efficiency", 
      description: "Automated media scanning and report generation frees teams for strategic action",
      icon: "⚡"
    },
    {
      title: "Strengthened Collaboration",
      description: "Seamless information sharing keeps all teams and partners aligned",
      icon: "🤝"
    },
    {
      title: "Adaptable & Scalable",
      description: "Flexible support for both localized responses and large-scale operations",
      icon: "📐"
    }
  ];

  const keyFeatures = [
    {
      title: "Crisis Overview Dashboard",
      description: "Real-time visualization of ongoing crises with dynamic key findings, statistics, geospatial data, and risk indices.",
      icon: "📊"
    },
    {
      title: "Real-Time Media Monitoring", 
      description: "24/7 geospatial monitoring of verified sources with interactive mapping and AI-driven classification.",
      icon: "🌐"
    },
    {
      title: "Automated Situation Analysis",
      description: "Weekly and monthly reports combining AI analysis with expert verification, delivering sector-specific insights tailored to crisis contexts.",
      icon: "📈"
    },
    {
      title: "Human-in-the-Loop Verification",
      description: "Expert humanitarian analysts ensure all outputs remain accurate, bias-free, and contextually relevant.",
      icon: "✅"
    }
  ];

  const situationHubs = [
    { name: "Lebanon", color: "bg-purple-500", href: "https://analysis.gannet.ai/lebanon" },
    { name: "Sudan", color: "bg-purple-600", href: "https://analysis.gannet.ai/sudan" },
    { name: "Myanmar", color: "bg-purple-700", href: "https://analysis.gannet.ai/myanmar" }
  ];

  const methodologySteps = [
    { 
      title: "Data Collection", 
      color: "bg-[#425A50]",
      description: "Automated gathering from thousands of verified humanitarian sources worldwide"
    },
    { 
      title: "Human in the loop", 
      color: "bg-[#FF6767]",
      description: "Expert humanitarian analysts review and validate AI-processed information"
    },
    { 
      title: "AI Analysis", 
      color: "bg-[#F7D774]",
      description: "Advanced algorithms process data to identify patterns and generate insights"
    },
    { 
      title: "Report Generation", 
      color: "bg-[#93A0FF]",
      description: "Comprehensive situation reports delivered with actionable recommendations"
    }
  ];

  const faqItems = [
    {
      question: "How does the SituationHub ensure data accuracy?",
      answer: "Our Human-in-the-Loop verification process ensures expert humanitarian analysts review all AI outputs for accuracy, bias-free content, and contextual relevance."
    },
    {
      question: "What sources does the Real-Time Media Monitoring cover?",
      answer: "We monitor thousands of verified sources 24/7, including news outlets, social media, government reports, and humanitarian organization updates with AI-driven classification."
    },
    {
      question: "How often are situation reports updated?",
      answer: "Our automated system provides real-time updates, with comprehensive weekly and monthly reports that combine AI analysis with expert verification for deeper insights."
    },
    {
      question: "Can the SituationHub be customized for specific regions?",
      answer: "Yes, our platform is adaptable and scalable, supporting both localized responses for specific regions and large-scale operations across multiple crisis areas."
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
                GANNET SituationHub
              </motion.h1>
              
              <motion.p 
                className={`text-xl font-semibold ${headingClass} mb-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Your command center for crisis clarity
              </motion.p>
              
              <motion.p 
                className={`text-body-large ${textClass} mb-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                A generative AI-powered digital public good that analyzes humanitarian data from thousands of trusted sources in real time. Transform complex information into clear insights for faster, more effective crisis response.
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
                  Book a demo
                </Link>
                <Link
                  href="mailto:info@gannet.ai?subject=Request for Customized SituationHub&body=Hello GANNET team,%0D%0A%0D%0AI am interested in discussing a customized SituationHub for our organization. Please contact me to discuss our specific requirements.%0D%0A%0D%0AThank you."
                  className="btn-cta-secondary flex items-center justify-center"
                >
                  Request Custom SituationHub
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
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mb-6">
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
                
                {/* SituationHub CTAs */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Region links */}
                  <div className="grid grid-cols-3 gap-3">
                    {situationHubs.map((hub, index) => (
                      <Link
                        key={index}
                        href={hub.href}
                        className={`${isDark ? 'bg-gannetCardBg text-gannetGreen border-gannetGreen hover:bg-gannetGreen/10' : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'} border px-4 py-3 rounded-lg text-center text-body-small font-semibold transition-all duration-300 hover:scale-105`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {hub.name}
                      </Link>
                    ))}
                  </div>
                  <p className={`text-caption ${textClass} text-center italic`}>
                    Select a region for latest analysis
                  </p>
                </motion.div>
              </motion.div>
            </div>
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
                className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-gannetBlue transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4 flex-shrink-0">{benefit.icon}</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`${cardBg} rounded-xl shadow-lg card-padding border-2 border-transparent hover:border-gannetGreen transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4 flex-shrink-0">{feature.icon}</span>
                  <div>
                    <h3 className={`heading-card ${headingClass} mb-2`}>{feature.title}</h3>
                    <p className={`text-body ${textClass}`}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.h2 
            className={`heading-section ${headingClass} text-center mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Methodology
          </motion.h2>
          
          <motion.p 
            className={`text-body-large ${textClass} text-center mb-16 max-w-3xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A proven four-step process that combines AI automation with human expertise to deliver accurate, actionable analysis.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Step number */}
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center font-bold text-lg ${step.title === "AI Analysis" ? "text-gray-800" : "text-white"}`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Arrow connector (except for last item) */}
                {index < methodologySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 z-10">
                    <FiArrowRight className={`w-6 h-6 text-gannetBlue mx-auto`} />
                  </div>
                )}
                
                {/* Step card */}
                <motion.div 
                  className={`${step.color} rounded-xl shadow-lg p-6 mb-4 hover:scale-105 transition-transform duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <h3 className={`font-semibold text-lg mb-2 ${step.title === "AI Analysis" ? "text-gray-800" : "text-white"}`}>{step.title}</h3>
                </motion.div>
                
                {/* Step description */}
                <p className={`text-body-small ${textClass} leading-relaxed`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - HIDDEN */}
      {/* <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`heading-section ${headingClass} mb-8`}>
                Case Studies
              </h2>
              
              <p className={`text-body ${textClass} mb-8`}>
                Explore real-world applications and success stories of our SituationHub in various humanitarian contexts.
              </p>
              
              <Link
                href="https://analysis.gannet.ai"
                className="btn-cta inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Studies
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl flex items-center justify-center relative">
                  <div className="w-20 h-12 bg-white rounded-lg shadow-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gannetGreen to-gannetLightGreen rounded-b-2xl"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-white flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

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

      {/* Partner CTA Section */}
      <section className={`section-padding ${isDark ? 'bg-gannetCardBg' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.h2 
            className={`${headingClass} heading-section mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Crisis Response?
          </motion.h2>
          
          <motion.p 
            className={`text-body-large ${textClass} mb-8 max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join social impact organizations worldwide using SituationHub for real-time crisis analysis and faster response coordination.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="mailto:info@gannet.ai?subject=Request for Customized SituationHub&body=Hello GANNET team,%0D%0A%0D%0AI am interested in discussing a customized SituationHub for our organization. Please contact me to discuss our specific requirements.%0D%0A%0D%0AThank you."
              className="btn-cta flex items-center justify-center"
            >
              Contact Our Team
            </Link>
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
              className="btn-cta-secondary flex items-center justify-center"
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