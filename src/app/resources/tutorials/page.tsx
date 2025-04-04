"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiVideo, FiPlay, FiUsers, FiLayers } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

// Resource-specific content
const resourceInfo = {
  title: 'Video Tutorials',
  description: 'Step-by-step video guides to help field teams get up and running quickly.',
  icon: FiVideo,
};

// Tutorial categories
const categories = [
  {
    name: 'Getting Started',
    tutorials: [
      {
        title: 'Introduction to GANNET',
        duration: '3:45',
        thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'A quick overview of GANNET and its humanitarian applications.',
      },
      {
        title: 'Creating Your Account',
        duration: '2:30',
        thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Learn how to create and set up your GANNET account.',
      },
      {
        title: 'Navigating the Dashboard',
        duration: '4:15',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'A tour of the GANNET dashboard and its main features.',
      },
    ],
  },
  {
    name: 'Virtual Assistant',
    tutorials: [
      {
        title: 'Asking Effective Questions',
        duration: '5:20',
        thumbnail: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'How to phrase your questions to get the most useful responses from the GANNET Virtual Assistant.',
      },
      {
        title: 'Custom Data Analysis',
        duration: '7:45',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Using the Virtual Assistant for advanced data analysis and visualization.',
      },
    ],
  },
  {
    name: 'Situation Hubs',
    tutorials: [
      {
        title: 'Understanding Crisis Dashboards',
        duration: '6:10',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'How to interpret the data displayed in GANNET SituationHubs.',
      },
      {
        title: 'Exporting and Sharing Reports',
        duration: '3:55',
        thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Learn how to export data and share insights with your team.',
      },
      {
        title: 'Geographic Analysis Tools',
        duration: '8:30',
        thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        description: 'Using maps and location-based data in SituationHubs.',
      },
    ],
  },
];

export default function TutorialsPage() {
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

        {/* Featured Tutorial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gannetGreen/20 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gannetGreen text-white cursor-pointer hover:bg-gannetGreen/90 transition-colors">
                    <FiPlay className="h-8 w-8 ml-1" />
                  </div>
                </div>
                <h2 className="text-white text-2xl font-bold">Introduction to GANNET for Humanitarian Workers</h2>
                <p className="text-gray-300 mt-2">A comprehensive overview of how GANNET can enhance humanitarian response</p>
              </div>
            </div>
            <Image 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Featured tutorial" 
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              fill
            />
          </div>
        </motion.div>

        {/* Tutorial Categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gannetGreen/10 rounded-lg text-gannetGreen mr-4">
                  {category.name === 'Getting Started' && <FiUsers className="h-6 w-6" />}
                  {category.name === 'Virtual Assistant' && <FiVideo className="h-6 w-6" />}
                  {category.name === 'Situation Hubs' && <FiLayers className="h-6 w-6" />}
                </div>
                <h2 className={`text-2xl font-bold ${headingClass}`}>{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tutorials.map((tutorial, tutorialIndex) => (
                  <motion.div
                    key={tutorial.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + tutorialIndex * 0.1 }}
                    className={`${cardBg} rounded-xl shadow-md overflow-hidden`}
                  >
                    <div className="relative">
                      <Image 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        className="w-full h-40 object-cover"
                        width={500}
                        height={200}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                        <span className="text-white font-medium">{tutorial.duration}</span>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gannetGreen text-white cursor-pointer hover:bg-gannetGreen/90 transition-colors">
                          <FiPlay className="h-5 w-5 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className={`font-bold text-lg ${headingClass}`}>{tutorial.title}</h3>
                      <p className={`mt-1 text-sm ${textClass}`}>{tutorial.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 