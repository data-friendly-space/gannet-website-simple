"use client";

import { useTheme } from '@/components/ui/ThemeContext';

export default function TermsOfUsePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gannetDarkBg' : 'bg-white';
  const headingClass = isDark ? 'text-gannetTextLight' : 'text-gray-900';
  const textClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const linkClass = isDark ? 'text-gannetGreen hover:text-gannetGreen/80' : 'text-green-600 hover:text-green-700';

  return (
    <div className={`${bgClass} min-h-screen pt-24 pb-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-3xl font-bold ${headingClass} mb-4`}>Terms of Use for GANNET - Humanitarian AI Assistant</h1>
        <p className={`${textClass} mb-8`}>Last updated on December 2, 2024</p>
        
        <div className={`${textClass} space-y-6`}>
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>1. Introduction</h2>
            <p>
              Welcome to GANNET, the Humanitarian AI Assistant Platform ("the Platform") provided by Data Friendly Space 
              ("DFS", "we", "our", or "us"). These Terms of Use ("Terms") govern your access to and use of the Platform. 
              By accessing or using GANNET, you agree to be bound by these Terms. If you disagree with any part of the Terms, 
              you may not access the Platform.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>2. Intended Use</h2>
            <p>
              GANNET is designed specifically for use by individuals and organizations engaged in humanitarian activities. 
              The Platform is intended to support and enhance humanitarian work through AI-powered assistance, data analysis, 
              and collaboration tools.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>3. User Eligibility</h2>
            <p className="mb-3">
              3.1. GANNET is available to individuals and organizations engaged in legitimate humanitarian activities or purposes. 
              This includes, but is not limited to, professional humanitarian workers, volunteers, researchers, and individuals 
              or groups working towards humanitarian goals.
            </p>
            <p className="mb-3">
              3.2. You must be at least 18 years old and capable of forming a binding contract to use the Platform.
            </p>
            <p className="mb-3">
              3.3. DFS reserves the right to request verification of your humanitarian purpose or affiliation at any time.
            </p>
            <p>
              3.4. DFS maintains the right to deny or revoke access to individuals or organizations whose activities are 
              deemed inconsistent with humanitarian principles or the intended use of the Platform.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>4. Account Registration and Security</h2>
            <p className="mb-3">
              4.1. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <p className="mb-3">
              4.2. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              4.3. You are responsible for all activities that occur under your account.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>5. Data Privacy and Protection</h2>
            <p className="mb-3">
              5.1. DFS is committed to protecting the privacy and security of personal data. Our use of your data is governed 
              by our <a href="/privacy" className={linkClass}>Privacy Policy</a>, which is incorporated into these Terms by reference.
            </p>
            <p className="mb-3">
              5.2. You agree to use the Platform in compliance with all applicable data protection laws and regulations, 
              including but not limited to the General Data Protection Regulation (GDPR).
            </p>
            <p>
              5.3. You are responsible for obtaining necessary consents from individuals whose personal data you input into the Platform.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>6. Ethical Use of AI</h2>
            <p className="mb-3">
              6.1. You agree to use the AI-powered features of GANNET responsibly and ethically, in alignment with humanitarian principles.
            </p>
            <p className="mb-3">
              6.2. You acknowledge that AI-generated content may contain biases or inaccuracies and agree to critically evaluate 
              all AI-generated outputs before use in humanitarian contexts.
            </p>
            <p>
              6.3. You will not use the Platform to generate or promote content that is discriminatory, harmful, 
              or contrary to humanitarian principles.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>7. Content and Data Ownership</h2>
            <p className="mb-3">
              7.1. You retain ownership of any data or content you input into the Platform.
            </p>
            <p className="mb-3">
              7.2. By using GANNET, you grant DFS a non-exclusive, worldwide, royalty-free license to use, process, 
              and analyze your input data for the purposes of providing and improving the Platform's services.
            </p>
            <p className="mb-3">
              7.3. DFS does not claim ownership of the insights, reports, or other outputs generated through your use of the Platform.
            </p>
            <p className="mb-3">
              7.4. You acknowledge and agree that DFS may collect and use your prompts, queries, and interactions with the Platform 
              for internal analytics purposes. This data may be included in aggregate statistics or reporting, but will be 
              anonymized and not personally identifiable.
            </p>
            <p>
              7.5. DFS may use aggregated, anonymized data derived from user interactions to improve the Platform, 
              develop new features, or for research purposes aligned with humanitarian goals.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>8. Prohibited Uses</h2>
            <p className="mb-3">
              You agree not to use GANNET:
            </p>
            <p className="mb-3">
              8.1. In any way that violates any applicable national, federal, state, local or international law or regulation.
            </p>
            <p className="mb-3">
              8.2. To exploit or harm minors in any way.
            </p>
            <p className="mb-3">
              8.3. To transmit any data that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, 
              obscene, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
            </p>
            <p className="mb-3">
              8.4. To impersonate or attempt to impersonate DFS, a DFS employee, another user, or any other person or entity.
            </p>
            <p>
              8.5. To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Platform, 
              or which, as determined by us, may harm DFS or users of the Platform or expose them to liability.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>9. Intellectual Property Rights</h2>
            <p className="mb-3">
              9.1. The Platform and its entire contents, features, and functionality (including but not limited to all information, 
              software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned 
              by DFS, its licensors, or other providers of such material and are protected by international copyright, trademark, 
              patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              9.2. These Terms do not grant you any right, title, interest, or license to any of DFS's intellectual property rights.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>10. Disclaimer of Warranties</h2>
            <p className="mb-3">
              10.1. GANNET is provided on an "as is" and "as available" basis, without any warranties of any kind, 
              either express or implied.
            </p>
            <p className="mb-3">
              10.2. DFS does not warrant that the Platform will be uninterrupted, error-free, or free from harmful components.
            </p>
            <p>
              10.3. DFS makes no warranties regarding the accuracy, reliability, or completeness of any AI-generated content 
              or data analysis provided through the Platform.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>11. Limitation of Liability</h2>
            <p className="mb-3">
              11.1. DFS shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of or inability to use the Platform.
            </p>
            <p>
              11.2. In no event shall DFS's total liability to you for all damages exceed the amount paid by you, if any, 
              for accessing the Platform during the 12 months immediately preceding the date of the claim.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless DFS and its officers, directors, employees, agents, and affiliates 
              from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees 
              (including reasonable attorneys' fees) arising out of or relating to your use of the Platform or your violation of these Terms.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>13. Modifications to the Platform and Terms</h2>
            <p className="mb-3">
              13.1. DFS reserves the right to modify or discontinue, temporarily or permanently, the Platform or any features 
              or portions thereof without prior notice.
            </p>
            <p>
              13.2. DFS may revise and update these Terms from time to time at our sole discretion. All changes are effective 
              immediately when we post them.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>14. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Virginia, United States, 
              without regard to its conflict of law provisions. Any legal suit, action, or proceeding arising out of, or related to, 
              these Terms or the Platform shall be instituted exclusively in the federal courts of the United States or the courts 
              of the State of Virginia.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>15. Severability</h2>
            <p>
              If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, 
              illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent 
              such that the remaining provisions of the Terms will continue in full force and effect.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>16. Entire Agreement</h2>
            <p>
              These Terms, our Privacy Policy, and any other legal notices published by us on the Platform, shall constitute 
              the entire agreement between you and DFS concerning the Platform.
            </p>
          </section>
          
          <section>
            <h2 className={`text-xl font-bold ${headingClass} mb-3`}>17. Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us at:
            </p>
            <p className="mt-3">
              Data Friendly Space<br />
              205 John Wythe Place<br />
              Williamsburg, Virginia, USA 23185<br />
              Email: <a href="mailto:info@datafriendlyspace.org" className={linkClass}>info@datafriendlyspace.org</a>
            </p>
          </section>
          
          <section className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p>
              By using GANNET, you acknowledge that you have read and understood these Terms of Use and agree to be bound by them.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 