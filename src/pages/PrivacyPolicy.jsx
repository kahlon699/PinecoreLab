export default function PrivacyPolicy() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Pinecore Lab ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your personal
              information when you visit our website or contact us through our contact form.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              We collect information you voluntarily provide when contacting us:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Message content you submit via our contact form</li>
            </ul>
            <p className="mt-3">
              We may also automatically collect technical information such as your browser
              type, IP address, and pages visited to improve our website's performance.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>To respond to your inquiries and messages</li>
              <li>To provide information about our services</li>
              <li>To improve our website and service offerings</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Data Storage and Security</h2>
            <p>
              Your contact form submissions are stored securely in our database. We implement
              industry-standard security measures including HTTPS encryption, access controls,
              and regular security reviews to protect your data from unauthorized access,
              disclosure, or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable
              information to outside parties. We do not share your data with third parties
              except as required by law or to protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can
              configure your browser to refuse cookies; however, some parts of the site
              may not function properly as a result.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{' '}
              <a href="mailto:contact@pinecorelab.com" className="text-sky-500 hover:underline">
                contact@pinecorelab.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted
              on this page with an updated revision date. Continued use of our website
              after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:contact@pinecorelab.com" className="text-sky-500 hover:underline">
                contact@pinecorelab.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
