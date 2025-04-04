'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiUsers, FiLink, FiGlobe } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Resource-specific content
const resourceInfo = {
  title: 'Partner Network',
  description: 'Join our growing network of technology and solution partners to expand your reach.',
  icon: FiLink,
};

export default function PartnerNetworkPage() {
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

        {/* Main content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${headingClass}`}>Why Partner with Gannet</h2>
            <p className={`${textClass} mb-4`}>
              Join our growing network of technology and solution partners to expand your business
              reach and deliver more value to your customers. We believe in collaborative growth
              and shared success.
            </p>
            <p className={`${textClass} mb-4`}>
              Our partnership program offers technical resources, co-marketing opportunities,
              and dedicated support to help your business thrive.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Partner Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Partner Types */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className={`${cardBg} p-6 rounded-lg shadow-md`}>
            <div className="p-3 bg-gannetGreen/10 rounded-lg text-gannetGreen inline-block mb-4">
              <FiUsers className="h-6 w-6" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${headingClass}`}>Technology Partners</h3>
            <p className={`${textClass}`}>
              Integrate your technology with Gannet's platform to create powerful solutions
              for mutual customers. Access our APIs, SDKs, and technical documentation.
            </p>
          </div>
          <div className={`${cardBg} p-6 rounded-lg shadow-md`}>
            <div className="p-3 bg-gannetGreen/10 rounded-lg text-gannetGreen inline-block mb-4">
              <FiLink className="h-6 w-6" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${headingClass}`}>Solution Partners</h3>
            <p className={`${textClass}`}>
              Implement and customize Gannet solutions for your clients. Gain access to
              training, certification, and implementation resources.
            </p>
          </div>
          <div className={`${cardBg} p-6 rounded-lg shadow-md`}>
            <div className="p-3 bg-gannetGreen/10 rounded-lg text-gannetGreen inline-block mb-4">
              <FiGlobe className="h-6 w-6" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${headingClass}`}>Strategic Alliances</h3>
            <p className={`${textClass}`}>
              Create joint go-to-market strategies and collaborate on product development
              to address emerging market opportunities together.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-gannetGreen text-white p-8 rounded-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Take the first step towards a successful partnership. Contact our partnership team
            to discuss opportunities and next steps.
          </p>
          <Link 
            href="mailto:support@gannet.ai" 
            className="inline-block bg-white text-gannetGreen px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

