"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiFileText, FiCode, FiLock, FiServer } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

// Resource-specific content
const resourceInfo = {
  title: 'API Reference',
  description: 'Detailed API documentation for technical teams to integrate GANNET with existing systems. (coming soon)',
  icon: FiFileText,
};

// API Reference sections
const sections = [
  {
    title: 'API Overview',
    description: 'Introduction to the GANNET API and how to get started.',
    icon: FiCode,
    content: `
      <h3>Coming Soon</h3>
      <p>Our API documentation is currently under development and will be available soon. The GANNET API will allow organizations to integrate our powerful humanitarian data analysis tools directly into their existing systems and workflows.</p>
      
      <h3>What to Expect</h3>
      <p>Our upcoming API will provide access to:</p>
      <ul>
        <li>Humanitarian data queries and analysis</li>
        <li>Crisis situation metrics and indicators</li>
        <li>Geographic information and mapping capabilities</li>
        <li>Report generation and data export</li>
      </ul>
      
      <p>If you're interested in being notified when our API becomes available, please contact us at <a href="mailto:api@gannet.ai" class="text-gannetGreen hover:underline">api@gannet.ai</a>.</p>
    `,
  },
  {
    title: 'Authentication',
    description: 'How to authenticate and secure your API requests.',
    icon: FiLock,
    content: `
      <h3>Coming Soon</h3>
      <p>Details about API authentication methods will be available when our API is released.</p>
      
      <h3>Security Standards</h3>
      <p>The GANNET API will implement industry-standard security practices, including:</p>
      <ul>
        <li>OAuth 2.0 authentication</li>
        <li>API key management</li>
        <li>Rate limiting</li>
        <li>Request logging and monitoring</li>
      </ul>
    `,
  },
  {
    title: 'Endpoints',
    description: 'Available API endpoints and their functionality.',
    icon: FiServer,
    content: `
      <h3>Coming Soon</h3>
      <p>Detailed documentation for all API endpoints will be provided when our API is released.</p>
      
      <h3>Planned Endpoints</h3>
      <p>Our API will include endpoints for:</p>
      <ul>
        <li>Data retrieval and querying</li>
        <li>Crisis situation analysis</li>
        <li>Geographic information</li>
        <li>Organization management</li>
        <li>Report generation</li>
      </ul>
    `,
  },
];

export default function ApiReferencePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const sectionBg = isDark ? 'bg-gannetCardBg/50' : 'bg-gray-50/70';
  const htmlContentClass = isDark ? 'prose-invert' : 'prose-gray';

  const Icon = resourceInfo.icon;

  return (
    <div className={`pt-32 pb-20 ${bgClass} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resource Header */}
        <div className="mb-12">
          {/* Back button */}
          <Link 
            href="/resources"
            className={`inline-flex items-center ${textClass} hover:text-gannetGreen mb-6`}
          >
            <FiArrowLeft className="mr-2" /> Back to Resources
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="p-4 bg-gannetGreen/10 rounded-lg text-gannetGreen mr-4">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold ${headingClass} sm:text-4xl`}>
                {resourceInfo.title}
              </h1>
              <p className={`mt-2 text-lg ${textClass}`}>
                {resourceInfo.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Content Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${cardBg} rounded-xl shadow-md p-6 mb-10 border-2 border-gannetBlue/20`}
        >
          <div className="flex items-start">
            <div className="p-3 bg-gannetBlue/10 rounded-lg text-gannetBlue mr-4">
              <FiCode className="h-6 w-6" />
            </div>
            <div>
              <h2 className={`text-xl font-bold ${headingClass} mb-2`}>API Documentation Coming Soon</h2>
              <p className={`${textClass}`}>
                Our comprehensive API documentation is currently under development. When released, it will provide everything you need to integrate GANNET&apos;s powerful humanitarian data analysis capabilities into your own systems.
              </p>
              <div className="mt-4">
                <Link
                  href="mailto:support@gannet.ai?subject=API%20Access%20Request"
                  className="inline-flex items-center px-4 py-2 bg-gannetBlue text-white rounded-lg hover:bg-gannetBlue/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Early Access
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const SectionIcon = section.icon;
            return (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`${cardBg} rounded-xl shadow-md overflow-hidden`}
              >
                <div className={`p-6 ${sectionBg} border-b border-gray-200/10`}>
                  <div className="flex items-center">
                    <div className="p-3 bg-gannetGreen/10 rounded-lg text-gannetGreen mr-4">
                      <SectionIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${headingClass}`}>{section.title}</h2>
                      <p className={`mt-1 ${textClass}`}>{section.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div 
                    className={`prose prose-lg max-w-none ${htmlContentClass}`}
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
} 