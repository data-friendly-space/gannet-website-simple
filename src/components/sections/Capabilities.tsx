"use client";

import { motion } from 'framer-motion';
import { FiMessageSquare, FiMap, FiRadio, FiPieChart, FiGlobe, FiLock } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

const capabilities = [
  {
    name: 'Virtual Assistant',
    description: 'Your AI-powered analysis staff that delivers instant, verified information when you need it most.',
    icon: FiMessageSquare,
    href: '/capabilities/virtual-assistant',
  },
  {
    name: 'SituationHub',
    description: 'Transform complex humanitarian data into actionable insights with our comprehensive crisis dashboard.',
    icon: FiMap,
    href: '/capabilities/situation-hub',
  },
  {
    name: 'Media Monitoring',
    description: 'Stay ahead with 24/7 monitoring of global news, social media, and local sources, all verified for accuracy.',
    icon: FiRadio,
    href: '/capabilities/media-monitoring',
  },
  {
    name: 'Data Analysis',
    description: 'Make data-driven decisions with automated situation analysis combining AI efficiency with human expertise.',
    icon: FiPieChart,
    href: '/capabilities/data-analysis',
  },
  {
    name: 'Multi-lingual Support',
    description: 'Break down language barriers with ingestion and analysis support for any Language.',
    icon: FiGlobe,
    href: '/capabilities/multi-lingual-support',
  },
  {
    name: 'Secure Data',
    description: 'Protect sensitive humanitarian data with our Private Context functionality (coming soon).',
    icon: FiLock,
    href: '/capabilities/secure-data',
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

export default function Capabilities() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subheadingClass = isDark ? 'text-gannetGreen' : 'text-green-600';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBgClass = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const cardBorderClass = isDark ? 'ring-gray-700' : 'ring-gray-200';
  const cardHoverBorderClass = isDark ? 'hover:ring-gannetGreen' : 'hover:ring-green-500';

  return (
    <section id="capabilities" className={`section-padding ${bgClass}`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className={`section-eyebrow ${subheadingClass}`}>Capabilities</h2>
          <p className={`mt-4 heading-section ${headingClass}`}>
            Comprehensive capabilities for humanitarian organizations
          </p>
          <p className={`mt-6 section-subtitle ${textClass}`}>
            Our cutting-edge platform offers a range of powerful capabilities designed specifically for humanitarian contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.name}
                className="relative group"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className={`h-full flex flex-col rounded-2xl ${cardBgClass} card-padding shadow-md ring-1 ${cardBorderClass} transition-all duration-300 hover:shadow-xl ${cardHoverBorderClass} hover:-translate-y-1`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gannetGreen text-gannetDarkBg mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`heading-subsection ${headingClass} mb-3`}>{capability.name}</h3>
                  <p className={`text-body ${textClass}`}>{capability.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 