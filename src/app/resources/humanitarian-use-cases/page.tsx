"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCpu } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

// Resource-specific content
const resourceInfo = {
  title: 'Humanitarian Use Cases',
  description: 'Real-world examples of how GANNET tools are transforming crisis response.',
  icon: FiCpu,
};

// Use cases
const useCases = [
  {
    title: 'Rapid Needs Assessment in Lebanon',
    organization: 'International Relief Organization',
    challenge: 'Following the Beirut port explosion, humanitarian teams needed to quickly assess needs across affected neighborhoods while resources were limited.',
    solution: 'Using GANNET\'s Virtual Assistant and SituationHub for Lebanon, the team was able to rapidly identify priority areas, track dynamic needs, and allocate resources effectively.',
    outcomes: [
      'Reduced assessment time by 60%',
      'Identified vulnerable populations missed by traditional methods',
      'Enabled daily updates to response strategies based on changing conditions',
      'Improved coordination among 12 partner organizations',
    ],
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Enhanced Food Security Monitoring in Sudan',
    organization: 'Global Food Initiative',
    challenge: 'Tracking changing food security conditions across conflict-affected regions of Sudan with limited field access and connectivity.',
    solution: 'GANNET tools enabled remote monitoring by aggregating data from multiple sources, including local reports, satellite imagery, and market pricing information.',
    outcomes: [
      'Created real-time food security dashboard for 3 regions',
      'Detected early warning signs of price inflation 2 weeks before official reports',
      'Facilitated evidence-based advocacy resulting in increased funding',
      'Improved targeting of food distribution to most vulnerable communities',
    ],
    image: 'https://images.unsplash.com/photo-1594708767771-a5f3382c22df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Coordinated Healthcare Response in Myanmar',
    organization: 'Medical Relief Network',
    challenge: 'Coordinating mobile healthcare clinics across remote areas with limited information about local healthcare needs and constantly changing security situations.',
    solution: 'GANNET SituationHub for Myanmar provided comprehensive, real-time information about healthcare gaps, security incidents, and population movements.',
    outcomes: [
      'Increased clinic coverage by 35% through optimized routing',
      'Reduced duplication of services with other healthcare providers',
      'Enabled proactive stocking of medicines based on predicted disease outbreaks',
      'Improved security protocols for field teams based on near real-time incident reporting',
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
];

export default function HumanitarianUseCasesPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-gray-50';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const accentTextClass = isDark ? 'text-gannetGreen' : 'text-green-600';

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

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${cardBg} rounded-xl shadow-md p-6 mb-12`}
        >
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2>Transforming Crisis Response with AI</h2>
            <p>
              GANNET tools are being deployed in humanitarian contexts around the world, helping organizations
              respond more effectively to complex crises. The following case studies demonstrate how our technology
              is making a real difference in the field.
            </p>
            <p>
              Each case highlights the challenges faced by humanitarian organizations, how GANNET tools were implemented,
              and the measurable outcomes achieved. These real-world examples show the practical applications of
              our technology in various humanitarian contexts.
            </p>
          </div>
        </motion.div>

        {/* Use Cases */}
        <div className="space-y-12">
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`${cardBg} rounded-xl shadow-md overflow-hidden`}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 md:bg-gradient-to-l"></div>
                  <Image 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h2 className={`text-2xl font-bold ${headingClass} mb-2`}>{useCase.title}</h2>
                  <p className={`${accentTextClass} font-medium mb-4`}>{useCase.organization}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-lg font-semibold ${headingClass}`}>Challenge</h3>
                      <p className={textClass}>{useCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className={`text-lg font-semibold ${headingClass}`}>Solution</h3>
                      <p className={textClass}>{useCase.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className={`text-lg font-semibold ${headingClass}`}>Outcomes</h3>
                      <ul className="mt-2 space-y-1">
                        {useCase.outcomes.map((outcome, i) => (
                          <li key={i} className={`flex items-start ${textClass}`}>
                            <span className="text-gannetGreen mr-2">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className={`text-2xl font-bold ${headingClass} mb-4`}>Want to see how GANNET can help your organization?</h2>
          <p className={`${textClass} max-w-2xl mx-auto mb-8`}>
            Contact us to discuss your specific humanitarian challenges and learn how our tools can enhance your response capabilities.
          </p>
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1L0hfYi_Go8OWgzc3t1gO_JIg0wRwxIs3Uzyvuyx_dnP7VrE5SDbfbZjZCKk9PeIV1XhztDYBj"
            className="inline-flex items-center px-6 py-3 bg-gannetGreen text-gannetDarkBg font-bold rounded-lg hover:bg-gannetGreen/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 