"use client";

import { useTheme } from '@/components/ui/ThemeContext';

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`${bgClass} min-h-screen pt-24 pb-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl font-bold ${headingClass} mb-8`}>Privacy Policy</h1>
        
        <div className={`${textClass} space-y-6`}>
          <p>
            <strong className={headingClass}>1. Introduction</strong>
          </p>
          
          <p>
            This privacy policy applies to GANNET products, managed by Data Friendly Space (here after referred to as DFS) registered at 700 E Main St Unit 707, Richmond, Virginia 23218, USA.
          </p>
          
          <p>
            DFS is committed to maintaining the accuracy, confidentiality, and security of your personal information. This Privacy Policy describes the personal information that DFS collects from or about you, how we use and to whom we disclose that information.
          </p>
          
          <p>
            <strong className={headingClass}>2. Privacy Compliance</strong>
          </p>
          
          <p>
            DFS has appointed a Privacy Officer who is responsible for ensuring our compliance with this policy and data protection legislation.
          </p>
          
          <p>
            <strong className={headingClass}>3. Personal Information We Collect</strong>
          </p>
          
          <p>
            GANNET collects and processes the following categories of personal data from users:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Contact details including name, email, organization, position, and country</li>
            <li>Device information (e.g., IP address, browser type)</li>
            <li>Authentication data and login credentials</li>
          </ul>
          
          <p>
            <strong className={headingClass}>4. How We Use Personal Information</strong>
          </p>
          
          <p>
            DFS uses personal data for the following purposes:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>To provide and maintain our service</li>
            <li>To notify users about changes to our service</li>
            <li>To allow users to participate in interactive features when they choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis to improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>
          
          <p>
            <strong className={headingClass}>5. Sharing Your Personal Information</strong>
          </p>
          
          <p>
            DFS does not sell, rent, or lease its customer lists to third parties. DFS may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to DFS, and they are required to maintain the confidentiality of your information.
          </p>
          
          <p>
            <strong className={headingClass}>6. Retention of Personal Information</strong>
          </p>
          
          <p>
            DFS retains personal information only as long as necessary to fulfill the purposes for which it was collected and processed, in accordance with our retention policy, and in compliance with applicable laws.
          </p>
          
          <p>
            <strong className={headingClass}>7. International Data Transfers</strong>
          </p>
          
          <p>
            Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. DFS will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your personal data will take place to an organization or a country unless there are adequate controls in place.
          </p>
          
          <p>
            <strong className={headingClass}>8. Your Rights</strong>
          </p>
          
          <p>
            Users have the following rights regarding their personal data:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>The right to access - You have the right to request copies of your personal data.</li>
            <li>The right to rectification - You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>The right to erasure - You have the right to request that we erase your personal data.</li>
            <li>The right to restrict processing - You have the right to request that we restrict the processing of your personal data.</li>
            <li>The right to data portability - You have the right to request that we transfer the data we have collected to another organization, or directly to you.</li>
            <li>The right to object - You have the right to object to our processing of your personal data.</li>
          </ul>
          
          <p>
            <strong className={headingClass}>9. Security of Personal Information</strong>
          </p>
          
          <p>
            DFS is committed to ensuring the security of your personal information. We have physical, electronic, and procedural safeguards in place to protect personal information from unauthorized access, use, or disclosure.
          </p>
          
          <p>
            <strong className={headingClass}>10. Cookies and Similar Technologies</strong>
          </p>
          
          <p>
            GANNET uses cookies and similar tracking technologies to track the activity on our service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
          
          <p>
            <strong className={headingClass}>11. Children&apos;s Privacy</strong>
          </p>
          
          <p>
            Our service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
          </p>
          
          <p>
            <strong className={headingClass}>12. Changes to This Privacy Policy</strong>
          </p>
          
          <p>
            DFS may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>
          
          <p>
            <strong className={headingClass}>13. Contact Us</strong>
          </p>
          
          <p>
            If you have any questions about this Privacy Policy, please contact us:
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