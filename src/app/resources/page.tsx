"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBookOpen, FiFileText, FiVideo, FiCpu, FiBox, FiUsers, FiChevronRight } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

const resources = [
  {
    name: 'Documentation',
    description: 'Comprehensive guides to help you understand and use our humanitarian tools effectively.',
    icon: FiBookOpen,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/documentation',
  },
  {
    name: 'API Reference',
    description: 'Detailed API documentation for technical teams to integrate GANNET with existing systems. (coming soon)',
    icon: FiFileText,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/api-reference',
  },
  {
    name: 'Video Tutorials',
    description: 'Step-by-step video guides to help field teams get up and running quickly.',
    icon: FiVideo,
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/tutorials',
  },
  {
    name: 'Humanitarian Use Cases',
    description: 'Real-world examples of how GANNET tools are transforming crisis response.',
    icon: FiCpu,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/humanitarian-use-cases',
  },
  {
    name: 'Implementation Guides',
    description: "Learn how to maximize your organization's impact with our products.",
    icon: FiBox,
    image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/implementation-guides',
  },
  {
    name: 'Partner Network',
    description: 'Connect with other humanitarian organizations to share ideas and best practices.',
    icon: FiUsers,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    href: '/resources/partner-network',
  },
];

export default function ResourcesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const cardBorderHover = isDark ? 'hover:border-gannetBlue' : 'hover:border-gannetBlue';

  return (
    <div className={`pt-32 pb-20 ${bgClass} min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl font-bold ${headingClass} sm:text-5xl`}>
              GANNET Resources
            </h1>
            <p className={`mt-5 max-w-2xl mx-auto text-xl ${textClass}`}>
              A comprehensive library of guides, tutorials, and tools to help humanitarian organizations maximize their impact.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
          <motion.div 
            className={`lg:w-64 shrink-0 ${cardBg} rounded-xl shadow-lg p-6 lg:sticky lg:top-32 h-fit`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={`text-xl font-bold ${headingClass} mb-4`}>Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <li key={resource.name}>
                    <Link 
                      href={resource.href}
                      className={`flex items-center p-2 rounded-lg hover:bg-gannetGreen/10 transition-colors ${textClass} hover:text-gannetGreen`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      <span>{resource.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <Link href={resource.href}>
                      <div className={`h-full ${cardBg} rounded-xl shadow-md border-2 border-transparent ${cardBorderHover} transition-all hover:shadow-lg p-6 flex flex-col`}>
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-gannetGreen/10 rounded-lg text-gannetGreen">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className={`ml-4 text-xl font-semibold ${headingClass}`}>{resource.name}</h3>
                        </div>
                        
                        <p className={`${textClass} mb-6`}>{resource.description}</p>
                        
                        <div className="mt-auto">
                          <span className="flex items-center text-gannetGreen font-medium">
                            View resources <FiChevronRight className="ml-2" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 