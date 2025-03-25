"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-white/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the power of GANNET technology. Start your free trial today or schedule a personalized demo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/try-now"
              className="rounded-lg bg-white px-8 py-4 text-center text-base font-medium text-blue-600 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Try Free for 14 Days
            </Link>
            <Link
              href="/book-demo"
              className="rounded-lg bg-blue-500 px-8 py-4 text-center text-base font-medium text-white shadow-lg ring-1 ring-white/20 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Book a Demo
            </Link>
          </div>

          <p className="mt-8 text-sm text-blue-100">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 