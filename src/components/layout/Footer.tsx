"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook, FiInstagram } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '/features' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Guides', href: '/guides' },
      { name: 'Blog', href: '/blog' },
      { name: 'Webinars', href: '/webinars' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Support', href: '/support' },
      { name: 'Status', href: '/status' },
    ],
  },
];

const socialLinks = [
  { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com' },
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com' },
  { name: 'Facebook', icon: FiFacebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com' },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetCardBg' : 'bg-gray-50';
  const titleClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const hoverClass = isDark ? 'hover:text-gannetBlue' : 'hover:text-blue-600';
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200';
  const socialIconClass = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <footer className={bgClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
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
            <p className={`mt-4 ${textClass} text-sm`}>
              AI-powered humanitarian tools for effective crisis response. Transform complex data into actionable insights and enhance your organization&apos;s impact.
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

          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className={titleClass + " font-semibold"}>{category.title}</h3>
              <ul className="mt-4 space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className={`${textClass} ${hoverClass} text-sm transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-12 pt-8 border-t ${borderClass}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${textClass} text-sm`}>
              &copy; {new Date().getFullYear()} GANNET. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className={`${textClass} ${hoverClass} text-sm transition-colors`}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={`${textClass} ${hoverClass} text-sm transition-colors`}>
                Terms of Service
              </Link>
              <Link href="/cookies" className={`${textClass} ${hoverClass} text-sm transition-colors`}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 