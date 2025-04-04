"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiBookOpen, FiDownload, FiBook, FiLayers, FiCpu, FiZap } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

// Resource-specific content
const resourceInfo = {
  title: 'Documentation',
  description: 'Comprehensive guides to help you understand and use our humanitarian tools effectively.',
  icon: FiBookOpen,
};

// Documentation sections
const sections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of GANNET tools and get up and running quickly.',
    icon: FiBook,
    content: `
      <h3>Introduction to GANNET</h3>
      <p>GANNET offers AI-powered tools designed to revolutionize how humanitarian organizations access and leverage data. This documentation will help you understand how to get the most out of our platform.</p>
      
      <h3>System Requirements</h3>
      <p>GANNET is a cloud-based platform accessible through any modern web browser. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best experience.</p>
      
      <h3>Creating Your Account</h3>
      <p>To get started with GANNET, you'll need to create an account:</p>
      <ol>
        <li>Visit <a href="https://app.gannet.ai/sign-up" class="text-gannetGreen hover:underline">app.gannet.ai/sign-up</a></li>
        <li>Enter your organizational email</li>
        <li>Create a secure password</li>
        <li>Verify your email address</li>
        <li>Complete your profile with relevant information</li>
      </ol>
      
      <h3>Navigating the Dashboard</h3>
      <p>Once logged in, you'll be directed to your dashboard, where you can access all GANNET tools and features. The main navigation includes:</p>
      <ul>
        <li><strong>Virtual Assistant:</strong> Chat directly with the AI to get real-time insights</li>
        <li><strong>SituationHub:</strong> Access crisis-specific dashboards and analytics</li>
        <li><strong>Reports:</strong> Generate and download comprehensive reports</li>
        <li><strong>Settings:</strong> Manage your account and preferences</li>
      </ul>
    `,
  },
  {
    title: 'Virtual Assistant Guide',
    description: 'Learn how to interact with our AI assistant for maximum efficiency.',
    icon: FiZap,
    content: `
      <h3>What is GANNET Virtual Assistant?</h3>
      <p>The GANNET Virtual Assistant is an AI-powered chatbot that provides instant responses to your humanitarian data queries. It can analyze information from multiple sources to deliver verified insights in real-time.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Natural Language Processing:</strong> Ask questions in plain language, just as you would to a human analyst</li>
        <li><strong>Multi-source Analysis:</strong> Get insights drawn from diverse data sources, including news, social media, and official reports</li>
        <li><strong>Citation Support:</strong> All information comes with citations to verify accuracy</li>
        <li><strong>Historical Context:</strong> Compare current situations with historical data to identify trends</li>
      </ul>
      
      <h3>Example Queries</h3>
      <p>Here are some examples of effective queries you can ask:</p>
      <ul>
        <li>"What are the current humanitarian needs in northern Lebanon?"</li>
        <li>"Compare food security in Sudan between 2022 and 2023"</li>
        <li>"Show me the most affected regions by the recent flooding in Myanmar"</li>
        <li>"What NGOs are currently operating in eastern Sudan?"</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>To get the most accurate and helpful responses:</p>
      <ul>
        <li>Be specific about locations and timeframes</li>
        <li>Limit each query to a single question or request</li>
        <li>Use follow-up questions to refine your results</li>
        <li>Request citations when needed for verification</li>
      </ul>
    `,
  },
  {
    title: 'Situation Hubs',
    description: 'Detailed guides on using our crisis-specific dashboards.',
    icon: FiLayers,
    content: `
      <h3>What are Situation Hubs?</h3>
      <p>GANNET SituationHubs provide comprehensive, at-a-glance dashboards focused on specific humanitarian crises. They transform complex data into clear, actionable insights to help organizations respond faster and more effectively.</p>
      
      <h3>Available Crisis Regions</h3>
      <p>Currently, we offer SituationHubs for the following regions:</p>
      <ul>
        <li><a href="https://analysis.gannet.ai/lebanon" class="text-gannetGreen hover:underline">Lebanon Crisis Hub</a></li>
        <li><a href="https://analysis.gannet.ai/sudan" class="text-gannetGreen hover:underline">Sudan Crisis Hub</a></li>
        <li><a href="https://analysis.gannet.ai/myanmar" class="text-gannetGreen hover:underline">Myanmar Crisis Hub</a></li>
      </ul>
      
      <h3>Dashboard Components</h3>
      <p>Each SituationHub includes the following components:</p>
      <ul>
        <li><strong>Situation Overview:</strong> A summary of the current humanitarian context</li>
        <li><strong>Key Metrics:</strong> Essential indicators of humanitarian needs and responses</li>
        <li><strong>Geographic Impact:</strong> Interactive maps showing affected areas</li>
        <li><strong>Sector Analysis:</strong> Detailed information on health, food security, shelter, etc.</li>
        <li><strong>Response Tracking:</strong> Information on ongoing aid operations</li>
        <li><strong>News Feed:</strong> Recent updates from validated sources</li>
      </ul>
      
      <h3>Data Sources</h3>
      <p>SituationHub data is compiled from multiple trusted sources, including:</p>
      <ul>
        <li>UN OCHA and other UN agencies</li>
        <li>International NGOs and humanitarian organizations</li>
        <li>Local government reports</li>
        <li>Verified news and social media</li>
        <li>Academic and research institutions</li>
      </ul>
      
      <h3>Exporting Data</h3>
      <p>Data from SituationHubs can be exported in various formats for offline analysis or reporting:</p>
      <ol>
        <li>Navigate to the desired dashboard or visualization</li>
        <li>Click the export button (usually in the top right corner)</li>
        <li>Select your preferred format (PDF, CSV, or PNG)</li>
        <li>Choose the data range if applicable</li>
        <li>Download the exported file</li>
      </ol>
    `,
  },
  {
    title: 'Technical Information',
    description: 'Technical details about our platform, data handling, and security measures.',
    icon: FiCpu,
    content: `
      <h3>System Architecture</h3>
      <p>GANNET is built on a secure, scalable cloud infrastructure with multiple layers of redundancy to ensure reliability even during crisis situations when access is most critical.</p>
      
      <h3>Data Security</h3>
      <p>We implement industry-leading security measures to protect sensitive humanitarian data:</p>
      <ul>
        <li>End-to-end encryption for all data in transit and at rest</li>
        <li>Regular security audits and penetration testing</li>
        <li>Role-based access controls for organizational data</li>
        <li>Compliance with international data protection standards</li>
        <li>Secure authentication with optional multi-factor authentication</li>
      </ul>
      
      <h3>API Information</h3>
      <p>GANNET provides API access for organizations that wish to integrate our tools with their existing systems. Our API documentation will be available soon, providing details on endpoints, authentication, and sample code.</p>
      
      <h3>Offline Capabilities</h3>
      <p>We understand that humanitarian operations often take place in areas with limited connectivity. GANNET offers:</p>
      <ul>
        <li>Offline mode for essential functions</li>
        <li>Low-bandwidth options for challenging environments</li>
        <li>Downloadable reports for offline reference</li>
        <li>Data synchronization when connectivity is restored</li>
      </ul>
      
      <h3>Browser Compatibility</h3>
      <p>GANNET is compatible with the following browsers:</p>
      <ul>
        <li>Google Chrome (version 60+)</li>
        <li>Mozilla Firefox (version 60+)</li>
        <li>Apple Safari (version 12+)</li>
        <li>Microsoft Edge (Chromium-based, version 80+)</li>
      </ul>
    `,
  },
];

export default function DocumentationPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subheadingClass = isDark ? 'text-gannetGreen' : 'text-green-600';
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

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${cardBg} rounded-xl shadow-md p-6 mb-10`}
        >
          <h2 className={`text-xl font-bold ${headingClass} mb-4`}>Contents</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, index) => {
              const SectionIcon = section.icon;
              return (
                <a 
                  key={section.title} 
                  href={`#section-${index}`} 
                  className={`flex items-center p-3 rounded-lg hover:bg-gannetGreen/10 transition-colors ${textClass} hover:text-gannetGreen`}
                >
                  <SectionIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>{section.title}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const SectionIcon = section.icon;
            return (
              <motion.section
                id={`section-${index}`}
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
                <div className="p-4 bg-gannetGreen/5 border-t border-gray-200/10 flex justify-end">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-gannetGreen hover:text-gannetGreen/80"
                  >
                    <FiDownload className="mr-2" /> Download as PDF
                  </a>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
} 