"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

const socialLinks = [
  { name: 'Twitter', icon: FiTwitter, href: 'https://x.com/DFS_org' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/company/data-friendly-space/' },
  { name: 'YouTube', icon: FiYoutube, href: 'https://www.youtube.com/@GannetAI' },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetCardBg' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const hoverClass = isDark ? 'hover:text-gannetBlue' : 'hover:text-blue-600';
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200';
  const socialIconClass = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <footer className={bgClass}>
      <div className="max-w-7xl mx-auto container-padding section-padding-small">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* GANNET Section */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={isDark ? "/images/GANNET_Logo_Green.png" : "/images/GANNET_Logo_Green_Dark.png"}
                alt="GANNET Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className={`mt-6 ${textClass} text-body max-w-xl`}>
              AI for humanitarians, by humanitarians
            </p>
            <div className="mt-8 flex space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${socialIconClass} ${hoverClass} transition-colors hover:scale-110 duration-300`}
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Data Friendly Space Section */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-right">
              <span className={`${textClass} text-body-small block mb-4`}>Created by</span>
              <a 
                href="https://www.datafriendlyspace.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Data Friendly Space"
                className="inline-block transition-transform hover:scale-105 duration-300"
              >
                <Image
                  src="/images/dfs-logo.svg"
                  alt="Data Friendly Space Logo"
                  width={150}
                  height={45}
                  className={`h-12 w-auto ${isDark ? 'brightness-0 invert' : ''}`}
                />
              </a>
              <p className={`mt-4 ${textClass} text-body-small max-w-md text-center md:text-right md:ml-auto leading-relaxed`}>
                DFS provides digital tools and actionable data for social impact organisations to just get things done.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t ${borderClass}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0">
              <p className={`${textClass} text-body-small`}>
                &copy; {new Date().getFullYear()} GANNET. All rights reserved.
              </p>
              <div className="flex space-x-8 md:ml-8">
                <Link href="/privacy" className={`${textClass} ${hoverClass} text-body-small transition-colors font-medium`}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className={`${textClass} ${hoverClass} text-body-small transition-colors font-medium`}>
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 