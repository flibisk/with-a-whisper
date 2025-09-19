import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - With a Whisper',
  description: 'Privacy policy for With a Whisper - Creative Luxury Studio',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-white/90 leading-relaxed">
            <strong>Last updated:</strong> December 2024
          </p>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              When you contact us through our website, we collect the following information:
            </p>
            <ul className="text-white/90 leading-relaxed list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number</li>
              <li>Budget information</li>
              <li>Any additional information you provide in your message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              We use the information you provide to:
            </p>
            <ul className="text-white/90 leading-relaxed list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and requests</li>
              <li>Provide information about our services</li>
              <li>Communicate with you about potential projects</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Information Sharing</h2>
            <p className="text-white/90 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Data Security</h2>
            <p className="text-white/90 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-white/90 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Your Rights</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-white/90 leading-relaxed list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/90 leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="text-white/90 leading-relaxed mt-4">
              <strong>Email:</strong> ps@withawhisper.co<br />
              <strong>Website:</strong> withawhisper.co
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-white/90 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <a 
            href="/" 
            className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
