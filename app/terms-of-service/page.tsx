import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - With a Whisper',
  description: 'Terms of service for With a Whisper - Creative Luxury Studio',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-6">
          <p className="text-white/90 leading-relaxed">
            <strong>Last updated:</strong> December 2024
          </p>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-white/90 leading-relaxed">
              By accessing and using the With a Whisper website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Use License</h2>
            <p className="text-white/90 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on With a Whisper's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-white/90 leading-relaxed list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Services</h2>
            <p className="text-white/90 leading-relaxed">
              With a Whisper provides creative luxury branding services including but not limited to cinematic storytelling, brand strategy, design, and immersive technology solutions. All services are provided subject to separate service agreements and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-white/90 leading-relaxed">
              The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-white/90 leading-relaxed">
              The materials on With a Whisper's website are provided on an 'as is' basis. With a Whisper makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Limitations</h2>
            <p className="text-white/90 leading-relaxed">
              In no event shall With a Whisper or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on With a Whisper's website, even if With a Whisper or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Accuracy of Materials</h2>
            <p className="text-white/90 leading-relaxed">
              The materials appearing on With a Whisper's website could include technical, typographical, or photographic errors. With a Whisper does not warrant that any of the materials on its website are accurate, complete, or current. With a Whisper may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Links</h2>
            <p className="text-white/90 leading-relaxed">
              With a Whisper has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by With a Whisper of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Modifications</h2>
            <p className="text-white/90 leading-relaxed">
              With a Whisper may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Governing Law</h2>
            <p className="text-white/90 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">Contact Information</h2>
            <p className="text-white/90 leading-relaxed">
              If you have any questions about these terms of service, please contact us at:
            </p>
            <p className="text-white/90 leading-relaxed mt-4">
              <strong>Email:</strong> ps@withawhisper.co<br />
              <strong>Website:</strong> withawhisper.co
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
