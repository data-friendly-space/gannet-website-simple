"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/components/ui/ThemeContext';

// Testimonial type definition
type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  organization: string;
};

// Function to get initials from name
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

// Function to generate a consistent color based on name
function getColorFromName(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-red-500',
  ];
  
  // Get a consistent index based on the name
  const charSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return colors[charSum % colors.length];
}

export default function Testimonials() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Style classes based on theme
  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subtitleClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const cardBorder = isDark ? 'border-gannetCardBg/60' : 'border-gray-200';
  const textClass = isDark ? 'text-gray-300' : 'text-gray-700';
  const nameClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const roleClass = isDark ? 'text-gray-400' : 'text-gray-500';
  
  // Sample testimonials data (placeholder)
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "DFS offers invaluable information when data is overwhelming and time in short supply, like in most emergency situation. DFS Situation Hub is a perfect example of how AI can support life-saving interventions, allowing to make timely decisions at critical times – in short, this is AI done right!",
      name: "Frédéric Fessard",
      role: "Program Development Manager",
      organization: "Fin Church Aid (FCA)",
    },
    {
      id: 2,
      text: "It has proven to me to be a very useful tool in building our earthquake response in Myanmar.",
      name: "Henry Braun",
      role: "Country Director Myanmar/Cambodia",
      organization: "Welthungerhilfe (WHH)",
    },
    {
      id: 3,
      text: "GANNET's SituationHub has revolutionized our analytical capabilities. The automated reports provide comprehensive insights that help us make better-informed decisions during critical situations.",
      name: "David Chen",
      role: "Data Analysis Lead",
      organization: "International Crisis Response",
    },
    {
      id: 4,
      text: "GANNET has completely changed how I approach analysis. Instead of spending hours digging through documents, I can now focus on sharpening the actual insights. I can finally dedicate more time to improving the quality of analysis and supporting partners more effectively.",
      name: "Hélène Pélisson",
      role: "Sr. Analyst & Project Manager",
      organization: "Data Friendly Space (DFS)",
    },
  ];

  return (
    <section className={`py-24 ${bgClass} relative`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-gannetBlue/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-1/3 w-60 h-60 bg-gannetGreen/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${headingClass}`}>
            What Our Partners Say
          </h2>
          <p className={`mt-4 text-lg ${subtitleClass} max-w-3xl mx-auto`}>
            See how GANNET is helping humanitarian organizations worldwide transform their operations and enhance their impact.
          </p>
        </motion.div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`${cardBg} border ${cardBorder} rounded-xl shadow-lg p-6 flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote icon */}
              <div className={`mb-4 ${isDark ? 'text-gannetBlue/40' : 'text-gannetBlue/20'}`}>
                <svg width="45" height="36" className="fill-current">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              
              {/* Testimonial text */}
              <p className={`${textClass} text-lg mb-6 flex-grow`}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author info */}
              <div className="flex items-center mt-4">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full border-2 border-gannetGreen ${getColorFromName(testimonial.name)} text-white font-bold`}>
                  {getInitials(testimonial.name)}
                </div>
                <div className="ml-4">
                  <h4 className={`font-semibold ${nameClass}`}>{testimonial.name}</h4>
                  <p className={`${roleClass} text-sm`}>
                    {testimonial.role}, {testimonial.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 