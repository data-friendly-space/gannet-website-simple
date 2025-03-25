"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

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
    name: 'Starter',
    id: 'tier-starter',
    price: { monthly: '$29', annually: '$24' },
    description: 'Perfect for small teams and startups just getting started.',
    features: [
      'Up to 5 team members',
      '20GB storage',
      'Basic analytics',
      'API access',
      'Email support',
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
    description: 'Ideal for growing teams needing more power and features.',
    features: [
      'Up to 20 team members',
      '100GB storage',
      'Advanced analytics',
      'API access',
      'Priority email support',
      'Advanced security',
      'Custom integrations',
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
    description: 'For large organizations with complex needs and custom requirements.',
    features: [
      'Unlimited team members',
      '500GB storage',
      'Full analytics suite',
      'Unlimited API access',
      '24/7 dedicated support',
      'Advanced security',
      'Custom integrations',
      'Dedicated account manager',
      'Custom onboarding',
    ],
    cta: {
      text: 'Contact Sales',
      href: '/contact-sales',
    },
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose the perfect plan for your business
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            No hidden fees, no surprise charges. Start with a 14-day free trial.
          </p>
          
          {/* Billing toggle */}
          <div className="mt-12 flex justify-center">
            <div className="relative bg-gray-100 p-1 rounded-full flex">
              <button
                type="button"
                className={`${
                  !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
                } relative py-2 px-6 border-transparent rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 transition-colors`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${
                  annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
                } ml-0.5 relative py-2 px-6 border-transparent rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 transition-colors`}
                onClick={() => setAnnual(true)}
              >
                Annually <span className="text-blue-600 font-medium">Save 15%</span>
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
              className={`relative bg-white rounded-2xl shadow-md ring-1 overflow-hidden ${
                tier.highlighted
                  ? 'ring-blue-500 scale-105 z-10 shadow-xl'
                  : 'ring-gray-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-blue-600 py-1.5 text-center">
                  <p className="text-xs font-medium text-white uppercase tracking-wide">
                    Most Popular
                  </p>
                </div>
              )}
              
              <div className="p-8 pt-6">
                <div className={tier.highlighted ? 'pt-4' : ''}>
                  <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                  <p className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      {annual ? tier.price.annually : tier.price.monthly}
                    </span>
                    <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiCheck className="h-5 w-5 text-blue-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={tier.cta.href}
                    className={`block w-full py-3 px-4 rounded-md text-center text-sm font-medium ${
                      tier.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    {tier.cta.text}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-10">
          <h3 className="text-xl font-medium text-gray-900">Need a custom solution?</h3>
          <p className="mt-2 text-gray-600">
            Our enterprise plan can be tailored to your company's specific requirements.
          </p>
          <Link
            href="/contact-sales"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </div>
    </section>
  );
} 