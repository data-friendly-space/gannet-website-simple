"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBarChart2, FiServer, FiShield, FiUsers, FiClock, FiGlobe } from 'react-icons/fi';

const solutions = [
  {
    name: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our powerful analytics platform.',
    icon: FiBarChart2,
    href: '/solutions/data-analytics',
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions to power your business operations.',
    icon: FiServer,
    href: '/solutions/cloud-infrastructure',
  },
  {
    name: 'Security Management',
    description: 'Protect your critical assets with our advanced security framework.',
    icon: FiShield,
    href: '/solutions/security',
  },
  {
    name: 'Team Collaboration',
    description: 'Streamline communication and boost productivity across your organization.',
    icon: FiUsers,
    href: '/solutions/collaboration',
  },
  {
    name: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors.',
    icon: FiClock,
    href: '/solutions/automation',
  },
  {
    name: 'Global Deployment',
    description: 'Deploy your solutions worldwide with our distributed infrastructure.',
    icon: FiGlobe,
    href: '/solutions/deployment',
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
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive solutions for modern businesses
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Our cutting-edge platform offers a range of powerful solutions to address your business challenges.
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
                <div className="h-full flex flex-col rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-green-500 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">{solution.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{solution.description}</p>
                  <div className="mt-6 flex-grow flex items-end">
                    <Link
                      href={solution.href}
                      className="text-green-600 hover:text-green-800 font-medium flex items-center"
                    >
                      Learn more
                      <svg
                        className="ml-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 