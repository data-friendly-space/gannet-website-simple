"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBarChart2, FiServer, FiShield, FiUsers, FiClock, FiGlobe } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

const solutions = [
  {
    name: 'Virtual Assistant',
    description: 'Your AI-powered analysis staff that delivers instant, verified information when you need it most.',
    icon: FiBarChart2,
    href: '/solutions/virtual-assistant',
  },
  {
    name: 'SituationHub',
    description: 'Transform complex humanitarian data into actionable insights with our comprehensive crisis dashboard.',
    icon: FiServer,
    href: '/solutions/situation-hub',
  },
  {
    name: 'Media Monitoring',
    description: 'Stay ahead with 24/7 monitoring of global news, social media, and local sources, all verified for accuracy.',
    icon: FiShield,
    href: '/solutions/media-monitoring',
  },
  {
    name: 'Data Analysis',
    description: 'Make data-driven decisions with automated situation analysis combining AI efficiency with human expertise.',
    icon: FiUsers,
    href: '/solutions/data-analysis',
  },
  {
    name: 'Multi-lingual Support',
    description: 'Break down language barriers with ingestion and analysis support for English, French, Spanish, and Arabic.',
    icon: FiClock,
    href: '/solutions/multi-lingual-support',
  },
  {
    name: 'Secure Data',
    description: 'Protect sensitive humanitarian data with our Private Context functionality (coming soon).',
    icon: FiGlobe,
    href: '/solutions/secure-data',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

export default function Solutions() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subheadingClass = isDark ? 'text-gannetGreen' : 'text-green-600';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBgClass = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const cardBorderClass = isDark ? 'ring-gray-700' : 'ring-gray-200';
  const cardHoverBorderClass = isDark ? 'hover:ring-gannetGreen' : 'hover:ring-green-500';
  const linkClass = isDark ? 'text-gannetGreen hover:text-gannetGreen/80' : 'text-green-600 hover:text-green-800';

  return (
    <section id="solutions" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-base font-semibold ${subheadingClass} tracking-wide uppercase`}>Solutions</h2>
          <p className={`mt-2 text-3xl font-bold ${headingClass} sm:text-4xl`}>
            Comprehensive solutions for humanitarian organizations
          </p>
          <p className={`mt-5 max-w-2xl mx-auto text-xl ${textClass}`}>
            Our cutting-edge platform offers a range of powerful solutions designed specifically for humanitarian contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.name}
                className="relative group"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className={`h-full flex flex-col rounded-2xl ${cardBgClass} p-8 shadow-md ring-1 ${cardBorderClass} transition-all duration-300 hover:shadow-xl ${cardHoverBorderClass} hover:-translate-y-1`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gannetGreen text-gannetDarkBg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`mt-6 text-lg font-medium ${headingClass}`}>{solution.name}</h3>
                  <p className={`mt-2 text-base ${textClass}`}>{solution.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 