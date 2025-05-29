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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <p className={`mt-4 ${textClass} text-sm max-w-xl text-left`}>
              AI for humanitarians, by humanitarians
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${socialIconClass} ${hoverClass} transition-colors`}
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Data Friendly Space Section */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-right">
              <span className={`${textClass} text-sm block mb-3`}>Created by</span>
              <a 
                href="https://www.datafriendlyspace.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Data Friendly Space"
                className="inline-block"
              >
                <Image
                  src="/images/dfs-logo.svg"
                  alt="Data Friendly Space Logo"
                  width={150}
                  height={45}
                  className={`h-12 w-auto ${isDark ? 'brightness-0 invert' : ''}`}
                />
              </a>
              <p className={`mt-3 ${textClass} text-sm max-w-md text-center md:text-right md:ml-auto`}>
                DFS provides digital tools and actionable data for social impact organisations to just get things done.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${borderClass}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center">
              <p className={`${textClass} text-sm`}>
                &copy; {new Date().getFullYear()} GANNET. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-2 md:mt-0 md:ml-6">
                <Link href="/privacy" className={`${textClass} ${hoverClass} text-sm transition-colors`}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className={`${textClass} ${hoverClass} text-sm transition-colors`}>
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