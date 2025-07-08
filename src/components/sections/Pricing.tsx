"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { useTheme } from '@/components/ui/ThemeContext';

type PricingTier = {
  name: string;
  id: string;
  price: { monthly: string; annually: string };
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    id: 'tier-starter',
    price: { monthly: '$29', annually: '$24' },
    description: 'Perfect for small NGOs and local social impact teams.',
    features: [
      'Up to 5 team members',
      'SituationHub access (limited countries)',
      'Virtual Assistant (basic queries)',
      'Email support',
      'Community access',
    ],
    cta: {
      text: 'Start with Starter',
      href: '/signup?plan=starter',
    },
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    price: { monthly: '$79', annually: '$69' },
    description: 'Ideal for mid-sized social impact organizations.',
    features: [
      'Up to 50 team members',
      'Full SituationHub access',
      'Advanced Virtual Assistant',
      'Media monitoring',
      'Priority support',
      'Custom data integration',
    ],
    cta: {
      text: 'Start with Professional',
      href: '/signup?plan=professional',
    },
    highlighted: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: { monthly: '$199', annually: '$179' },
    description: 'For large international organizations with complex needs.',
    features: [
      'Unlimited team members',
      'Complete platform access',
      'Full analytics suite',
      'Custom country deployments',
      '24/7 dedicated support',
      'Advanced security',
      'Custom integrations',
      'Dedicated account manager',
      'Customized onboarding',
    ],
    cta: {
      text: 'Contact Sales',
      href: '/contact-sales',
    },
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const subheadingClass = isDark ? 'text-gannetGreen' : 'text-green-600';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const cardBgClass = isDark ? 'bg-gannetCardBg' : 'bg-white';
  const cardBorderClass = isDark ? 'ring-gray-700' : 'ring-gray-200';
  const toggleBgClass = isDark ? 'bg-gray-800' : 'bg-gray-100';
  const toggleActiveClass = isDark ? 'bg-gannetCardBg shadow-sm text-gannetTextLight' : 'bg-white shadow-sm text-gray-900';
  const toggleInactiveClass = isDark ? 'text-gray-400' : 'text-gray-500';
  const featureTextClass = isDark ? 'text-gray-300' : 'text-gray-700';
  const sponsoredBgClass = isDark ? 'bg-gannetCardBg' : 'bg-gray-50';

  return (
    <section id="pricing" className={`section-padding ${bgClass}`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className={`section-eyebrow ${subheadingClass}`}>Pricing</h2>
          <p className={`mt-4 heading-section ${headingClass}`}>
            Choose the perfect plan for your organization
          </p>
          <p className={`mt-6 section-subtitle ${textClass}`}>
            No hidden fees, flexible sponsorship options available.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-12 flex justify-center">
            <div className={`relative ${toggleBgClass} p-1 rounded-full flex`}>
              <button
                type="button"
                className={`${
                  !annual ? toggleActiveClass : toggleInactiveClass
                } relative py-3 px-6 border-transparent rounded-full text-body-small font-medium whitespace-nowrap focus:outline-none focus:z-10 transition-colors`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${
                  annual ? toggleActiveClass : toggleInactiveClass
                } ml-0.5 relative py-3 px-6 border-transparent rounded-full text-body-small font-medium whitespace-nowrap focus:outline-none focus:z-10 transition-colors`}
                onClick={() => setAnnual(true)}
              >
                Annually <span className="text-gannetGreen font-semibold">Save 15%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-8 sm:gap-x-6 lg:gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${cardBgClass} rounded-2xl shadow-md ring-1 overflow-hidden ${
                tier.highlighted
                  ? 'ring-gannetGreen scale-105 z-10 shadow-xl'
                  : cardBorderClass
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-gannetGreen py-2 text-center">
                  <p className="text-caption font-semibold text-gannetDarkBg uppercase tracking-wide">
                    Most Popular
                  </p>
                </div>
              )}
              
              <div className="card-padding">
                <div className={tier.highlighted ? 'pt-4' : ''}>
                  <h3 className={`heading-subsection ${headingClass}`}>{tier.name}</h3>
                  <p className="mt-6 flex items-baseline">
                    <span className={`text-5xl font-bold ${headingClass}`}>
                      {annual ? tier.price.annually : tier.price.monthly}
                    </span>
                    <span className={`ml-2 text-body ${textClass}`}>/month</span>
                  </p>
                  <p className={`mt-3 text-body ${textClass}`}>{tier.description}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiCheck className="h-5 w-5 text-gannetGreen mt-0.5" />
                      </div>
                      <p className={`ml-3 text-body-small ${featureTextClass}`}>{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={tier.cta.href}
                    className={`block w-full py-4 px-4 rounded-lg text-center text-body-small font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-gannetGreen text-gannetDarkBg hover:bg-gannetGreen/90 hover:scale-105'
                        : isDark
                        ? 'bg-gannetGreen/20 text-gannetGreen hover:bg-gannetGreen/30'
                        : 'bg-green-50 text-gannetGreen hover:bg-green-100'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gannetGreen`}
                  >
                    {tier.cta.text}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${sponsoredBgClass} rounded-xl card-padding`}>
          <h3 className={`text-xl font-medium ${headingClass}`}>Need a sponsored solution?</h3>
          <p className={`mt-2 ${textClass}`}>
            We offer sponsorship options for social impact organizations operating in resource-constrained environments.
          </p>
          <Link
            href="/contact-sales"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gannetDarkBg bg-gannetGreen hover:bg-gannetGreen/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gannetGreen"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
} 