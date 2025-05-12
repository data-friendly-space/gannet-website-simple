"use client";

// Imports intentionally commented out for future restoration
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { FiBookOpen, FiFileText, FiVideo, FiCpu, FiBox, FiUsers } from 'react-icons/fi';
// import { useTheme } from '@/components/ui/ThemeContext';
import { FiBookOpen, FiFileText, FiVideo, FiCpu, FiBox, FiUsers } from 'react-icons/fi';

// Resource data moved inside commented code to avoid unused variable error
export default function Resources() {
  // Temporarily hide the Resources section
  return null;
  
  /* Commented out for future restoration
  import Image from 'next/image';
  import Link from 'next/link';
  import { motion } from 'framer-motion';
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

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subheadingClass = isDark ? 'text-gannetGreen' : 'text-green-600';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardOverlayClass = isDark 
    ? 'from-gannetCardBg/90 to-gannetCardBg/20' 
    : 'from-gray-900/90 to-gray-900/20';
  const cardTextClass = isDark ? 'text-gannetTextLight' : 'text-white';
  const cardDescriptionClass = isDark ? 'text-gray-400' : 'text-gray-300';

  return (
    <section id="resources" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-base font-semibold ${subheadingClass} tracking-wide uppercase`}>Resources</h2>
          <p className={`mt-2 text-3xl font-bold ${headingClass} sm:text-4xl`}>
            Everything you need to succeed
          </p>
          <p className={`mt-5 max-w-2xl mx-auto text-xl ${textClass}`}>
            Explore our comprehensive resources designed to help humanitarian organizations maximize their impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.name}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-60">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cardOverlayClass}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gannetGreen text-gannetDarkBg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className={`ml-3 text-xl font-semibold ${cardTextClass}`}>{resource.name}</h3>
                    </div>
                    <p className={`mt-2 text-sm ${cardDescriptionClass}`}>{resource.description}</p>
                  </div>
                </div>
                <Link href={resource.href} className="absolute inset-0" aria-label={`View ${resource.name}`} />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gannetDarkBg bg-gannetGreen hover:bg-gannetGreen/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gannetGreen"
          >
            Browse All Resources
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
  */
} 