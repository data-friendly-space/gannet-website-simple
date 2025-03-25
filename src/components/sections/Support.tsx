"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiMessageSquare, FiHelpCircle, FiFileText } from 'react-icons/fi';

const supportOptions = [
  {
    name: 'Email Support',
    description: 'Get help directly from our support team via email.',
    icon: FiMail,
    href: '/support/email',
  },
  {
    name: 'Live Chat',
    description: 'Chat with our support team in real-time during business hours.',
    icon: FiMessageSquare,
    href: '/support/chat',
  },
  {
    name: 'Help Center',
    description: 'Browse our comprehensive knowledge base for instant answers.',
    icon: FiHelpCircle,
    href: '/support/help-center',
  },
  {
    name: 'Submit a Ticket',
    description: 'Create a support ticket for complex technical issues.',
    icon: FiFileText,
    href: '/support/create-ticket',
  },
];

export default function Support() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission (replace with actual API call in a real application)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Support</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            We're here to help
          </p>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Our dedicated support team is available to assist you with any questions or issues.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gannetGreen text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{option.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{option.description}</p>
                <div className="mt-4">
                  <Link
                    href={option.href}
                    className="text-gannetGreen hover:text-gannetGreen/80 font-medium text-sm"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="p-8 md:p-12 bg-gannetGreen text-white md:max-w-md">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-4 text-green-100">
                Have a specific question or need personalized support? Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <FiMail className="h-6 w-6 text-green-300" />
                  <span className="ml-3 text-green-100">support@gannet.com</span>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-base font-semibold">Our support hours</h4>
                <p className="mt-2 text-green-100">
                  Monday - Friday: 9am - 6pm EST<br />
                  Saturday: 10am - 2pm EST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 md:flex-1">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Message sent!</h3>
                  <p className="mt-2 text-gray-500">
                    Thank you for contacting us. We'll respond to your message as soon as possible.
                  </p>
                  <button
                    className="mt-6 text-green-600 font-medium"
                    onClick={() => setFormStatus('idle')}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gannetGreen focus:ring-gannetGreen sm:text-sm px-4 py-2 border"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gannetGreen focus:ring-gannetGreen sm:text-sm px-4 py-2 border"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gannetGreen focus:ring-gannetGreen sm:text-sm px-4 py-2 border"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General inquiry</option>
                      <option value="technical">Technical issue</option>
                      <option value="billing">Billing question</option>
                      <option value="feature">Feature request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gannetGreen focus:ring-gannetGreen sm:text-sm px-4 py-2 border"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gannetGreen ${
                        formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'hover:bg-gannetGreen/90'
                      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gannetGreen`}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 