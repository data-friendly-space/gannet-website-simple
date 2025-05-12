"use client";

import { useTheme } from '@/components/ui/ThemeContext';

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const linkClass = isDark ? 'text-gannetGreen hover:text-gannetGreen/80' : 'text-green-600 hover:text-green-700';

  return (
    <div className={`${bgClass} min-h-screen pt-24 pb-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl font-bold ${headingClass} mb-4`}>Privacy Policy for GANNET - Humanitarian AI Assistant</h1>
        <p className={`${textClass} mb-8`}>Last updated on December 2, 2024</p>
        
        <div className={`${textClass} space-y-6`}>
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>Introduction</h2>
            <p>
              Welcome to GANNET, an AI-powered assistant developed by Data Friendly Space (DFS). 
              We are committed to ensuring the privacy and security of our users' data. 
              This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>Information We Collect</h2>
            <p className="mb-3">
              <strong className={headingClass}>Email Address:</strong> The only Personally Identifiable Information (PII) 
              we collect is your email address, which is used for user account creation and communication purposes.
            </p>
            <p>
              <strong className={headingClass}>User Prompts:</strong> We collect the queries and prompts you input into GANNET. 
              These are used for internal analysis to improve our services and may be sent back to the underlying 
              AI system to enhance the accuracy and relevance of responses.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>How We Use Your Information</h2>
            <p className="mb-3">
              <strong className={headingClass}>Service Improvement:</strong> User prompts are analyzed to identify patterns 
              and improve the quality of responses provided by GANNET. This helps us ensure that our AI system remains 
              accurate, relevant, and useful.
            </p>
            <p className="mb-3">
              <strong className={headingClass}>Internal Analysis:</strong> Data from user interactions is used to analyze 
              trends and performance, helping us refine and optimize our AI models.
            </p>
            <p>
              <strong className={headingClass}>Feedback Loop for LLM Improvement:</strong> When users identify answers 
              provided by GANNET as incorrect or unsatisfactory, we send the associated prompts and responses back to 
              the underlying language model (LLM) service. This feedback loop helps the LLM service learn from its mistakes 
              and improve its performance over time, reducing the likelihood of repeated inaccurate answers.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>Data Sharing and Protection</h2>
            <p className="mb-3">
              <strong className={headingClass}>No Third-Party Sharing:</strong> We do not share your email address or any 
              collected data with third parties. All data is used solely within DFS to improve GANNET's functionality 
              and user experience.
            </p>
            <p>
              <strong className={headingClass}>Data Security:</strong> We implement robust security measures to protect your 
              data from unauthorized access, alteration, disclosure, or destruction. Our security protocols are designed 
              to safeguard the information we collect and maintain user privacy.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>User Rights</h2>
            <p className="mb-3">
              <strong className={headingClass}>Access and Correction:</strong> You have the right to access the information 
              we hold about you. If you believe any information we have is incorrect or incomplete, please contact us to 
              update your data.
            </p>
            <p>
              <strong className={headingClass}>Data Deletion:</strong> You may request the deletion of your data at any time. 
              To do so, please contact us, and we will promptly remove your information from our systems.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>Contact Information</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or how your data is handled, 
              please contact us at <a href="mailto:hello@datafriendlyspace.org" className={linkClass}>hello@datafriendlyspace.org</a>.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. We will notify you of any significant changes by email or 
              through a notice on our website.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>Consent</h2>
            <p>
              By using GANNET, you consent to the collection and use of your information as outlined in this Privacy Policy.
            </p>
          </section>
          
          <section className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p>
              Thank you for trusting GANNET and DFS with your data. We are committed to maintaining your privacy and 
              ensuring a secure and beneficial user experience.
            </p>
            <p className="mt-4">
              For more detailed information about our general data practices, please visit our 
              <a href="https://www.datafriendlyspace.org/privacy" target="_blank" rel="noopener noreferrer" className={`${linkClass} ml-1`}>
                DFS Privacy Policy
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 