"use client";

import { useTheme } from '@/components/ui/ThemeContext';

export default function TermsOfUsePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`${bgClass} min-h-screen pt-24 pb-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl font-bold ${headingClass} mb-8`}>Terms of Use</h1>
        
        <div className={`${textClass} space-y-6`}>
          <p>
            <strong className={headingClass}>1. Introduction</strong>
          </p>
          
          <p>
            These Terms of Use govern your use of GANNET products and services operated by Data Friendly Space (hereafter referred to as &quot;DFS&quot;), registered at 700 E Main St Unit 707, Richmond, Virginia 23218, USA.
          </p>
          
          <p>
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
          </p>
          
          <p>
            <strong className={headingClass}>2. Use of Service</strong>
          </p>
          
          <p>
            GANNET services are intended for use by humanitarian organizations and professionals. By using our services, you represent that you are an authorized representative of a humanitarian organization or a professional in the humanitarian sector.
          </p>
          
          <p>
            You agree to use the service only for lawful purposes and in a way that does not infringe upon the rights of others or restrict or inhibit anyone else&apos;s use of the service.
          </p>
          
          <p>
            <strong className={headingClass}>3. User Accounts</strong>
          </p>
          
          <p>
            When you create an account with us, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of these Terms, which may result in immediate termination of your account.
          </p>
          
          <p>
            You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password. You agree not to disclose your password to any third party.
          </p>
          
          <p>
            <strong className={headingClass}>4. Intellectual Property</strong>
          </p>
          
          <p>
            The service and its original content, features, and functionality are owned by DFS and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <p>
            <strong className={headingClass}>5. User Content</strong>
          </p>
          
          <p>
            Our service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post, including its legality, reliability, and appropriateness.
          </p>
          
          <p>
            By posting content, you grant DFS a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.
          </p>
          
          <p>
            <strong className={headingClass}>6. Third-Party Links</strong>
          </p>
          
          <p>
            Our service may contain links to third-party websites or services that are not owned or controlled by DFS. DFS has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services.
          </p>
          
          <p>
            <strong className={headingClass}>7. Termination</strong>
          </p>
          
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          
          <p>
            <strong className={headingClass}>8. Limitation of Liability</strong>
          </p>
          
          <p>
            In no event shall DFS, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
          
          <p>
            <strong className={headingClass}>9. Changes to Terms</strong>
          </p>
          
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          
          <p>
            <strong className={headingClass}>10. Governing Law</strong>
          </p>
          
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          
          <p>
            <strong className={headingClass}>11. Disclaimer</strong>
          </p>
          
          <p>
            The GANNET service is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          
          <p>
            DFS does not warrant that the service will be uninterrupted or error-free, that defects will be corrected, or that the service or the server that makes it available are free of viruses or other harmful components.
          </p>
          
          <p>
            <strong className={headingClass}>12. Contact Us</strong>
          </p>
          
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          
          <p className="mt-2">
            <strong>By email:</strong> hello@datafriendlyspace.org
          </p>
          
          <p className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            Last Updated: April 2024
          </p>
        </div>
      </div>
    </div>
  );
} 