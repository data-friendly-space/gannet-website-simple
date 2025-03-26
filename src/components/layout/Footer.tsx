import Link from 'next/link';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook, FiInstagram } from 'react-icons/fi';

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
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-gannetGreen to-gannetLightGreen bg-clip-text text-transparent">GANNET</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
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
                    className="text-gray-500 hover:text-blue-600 transition-colors"
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
              <h3 className="text-gray-900 font-semibold">{category.title}</h3>
              <ul className="mt-4 space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GANNET. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 