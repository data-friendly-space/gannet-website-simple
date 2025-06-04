"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiHelpCircle, FiFileText } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '@/components/ui/ThemeContext';

const supportOptions = [
  {
    name: 'Email Support',
    description: 'Reach out to our team for assistance with implementation, technical issues, or general inquiries about GANNET.',
    icon: FiMail,
    href: 'mailto:info@gannet.ai?subject=GANNET%20Support%20Request&body=Hello%20GANNET%20Team%2C%0A%0AI%20have%20a%20question%20about%3A%0A%0A%0AThanks%2C%0A',
    cta: 'Send Email',
    visible: true,
  },
  {
    name: 'Join our WhatsApp Community',
    description: 'Connect with our community of humanitarian practitioners and developers to share insights and best practices.',
    icon: FaWhatsapp,
    href: 'https://chat.whatsapp.com/Gv4gtaiVukTAWvSMXjgePx',
    cta: 'Join Community',
    visible: true,
  },
  {
    name: 'Help Center',
    description: 'Access our growing library of guides, tutorials, and FAQs to help you make the most of GANNET tools.',
    icon: FiHelpCircle,
    href: '/resources',
    cta: 'Browse Resources',
    visible: false,
  },
  {
    name: 'Submit a Ticket',
    description: 'Report bugs, request features, or get help with complex issues that require closer technical attention.',
    icon: FiFileText,
    href: '/support/create-ticket',
    cta: 'Open Ticket',
    visible: false,
  },
];

export default function Support() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const cardBgClass = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subheadingClass = isDark ? 'text-gannetGreen' : 'text-green-600';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <section id="support" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-base font-semibold ${subheadingClass} tracking-wide uppercase`}>Support</h2>
          <p className={`mt-2 text-3xl font-bold ${headingClass} sm:text-4xl`}>
            We&apos;re here to help
          </p>
          <p className={`mt-5 max-w-2xl mx-auto text-xl ${textClass}`}>
            Our dedicated humanitarian support team is available to assist you with any questions or issues.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {supportOptions.filter(option => option.visible !== false).map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${cardBgClass} rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gannetGreen text-gannetDarkBg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`mt-4 text-lg font-medium ${headingClass}`}>{option.name}</h3>
                  <p className={`mt-2 text-sm ${textClass}`}>{option.description}</p>
                  <div className="mt-4">
                    <Link
                      href={option.href}
                      className="text-gannetGreen hover:text-gannetGreen/80 font-medium text-sm"
                      target={option.href.startsWith('http') || option.href.startsWith('mailto') ? '_blank' : undefined}
                      rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {option.cta} →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`mt-16 ${cardBgClass} rounded-2xl shadow-lg overflow-hidden`}
        >
          <div className="p-8 md:p-12 bg-gannetGreen text-gannetDarkBg">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold">Get in touch</h3>
              <p className="mt-4 text-gannetDarkBg/80 text-lg">
                Have a specific question or need personalized support? Reach out to our team directly via email.
              </p>
              
              <div className="mt-8">
                <Link
                  href="mailto:info@gannet.ai?subject=GANNET%20Support%20Request&body=Hello%20GANNET%20Team%2C%0A%0AI%20have%20a%20question%20about%3A%0A%0A%0AThanks%2C%0A"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gannetGreen font-bold rounded-lg transition-all duration-300 hover:bg-white/90 shadow-md hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMail className="mr-2 h-5 w-5" />
                  <span>info@gannet.ai</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
} 