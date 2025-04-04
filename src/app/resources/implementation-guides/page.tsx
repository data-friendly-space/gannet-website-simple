"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiBox } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

// Resource-specific content
const resourceInfo = {
  title: 'Implementation Guides',
  description: "Learn how to maximize your organization's impact with our products.",
  icon: FiBox,
};

export default function ImplementationGuidesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';

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

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${cardBg} rounded-xl shadow-md p-8 text-center`}
        >
          <div className="max-w-md mx-auto">
            <div className="p-4 bg-gannetGreen/10 rounded-full inline-flex items-center justify-center mb-6">
              <Icon className="h-12 w-12 text-gannetGreen" />
            </div>
            <h2 className={`text-2xl font-bold ${headingClass} mb-4`}>Implementation Guides Coming Soon</h2>
            <p className={`${textClass} mb-8`}>
              We're currently developing comprehensive implementation guides to help your organization get the most out of GANNET tools. Check back soon for detailed resources.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center px-6 py-3 bg-gannetGreen text-gannetDarkBg font-bold rounded-lg hover:bg-gannetGreen/90 transition-colors"
            >
              Explore Other Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 