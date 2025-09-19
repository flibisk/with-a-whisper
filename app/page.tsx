'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Form from '@/components/Form'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormSuccess = () => {
    setIsFormSubmitted(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setIsFormSubmitted(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Video Support */}
      {process.env.NEXT_PUBLIC_BG_VIDEO_URL && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={process.env.NEXT_PUBLIC_BG_VIDEO_POSTER}
          >
            <source src={process.env.NEXT_PUBLIC_BG_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay" />
        </div>
      )}

      {/* Default Background */}
      {!process.env.NEXT_PUBLIC_BG_VIDEO_URL && (
        <div className="absolute inset-0 bg-black radial-vignette" />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center space-y-12"
        >
          {/* Logo */}
          <motion.div
            animate={isFormOpen ? { scale: 0.9, opacity: 0.6 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="shimmer"
          >
            <Image
              src="/logo.svg"
              alt="With a Whisper"
              width={240}
              height={96}
              className="mx-auto"
              priority
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Button onClick={() => setIsModalOpen(true)}>
              What we do
            </Button>
            <Button onClick={() => setIsFormOpen(true)}>
              Start a conversation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 id="modal-title" className="text-2xl font-serif font-bold text-white mb-6">
          What we do
        </h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-white/90 leading-relaxed mb-4">
            With a Whisper is a creative luxury-branding studio. We take brands that are stuck in the middle and lift them into the realm of the aspirational and the timeless. Using cinematic storytelling, high-end design, immersive technology, and a whole-of-brand approach, we don&apos;t just market products - we build desire, prestige, and legacy.
          </p>
          <p className="text-white/90 leading-relaxed">
            Our name reflects the truth that real luxury never shouts - it whispers, and people lean in.
          </p>
        </div>
      </Modal>

      {/* Split Screen Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                handleCloseForm()
              }
            }}
          >
            <div className="w-full max-w-4xl mx-4 flex justify-end">
              <div className="w-full max-w-lg">
                {isFormSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="bg-black/70 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl p-8 text-center"
                  >
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white">
                        Thank you
                      </h3>
                      <p className="text-white/80">
                        We look forward to chatting.
                      </p>
                      <Button
                        onClick={handleCloseForm}
                        variant="secondary"
                        className="mt-6"
                      >
                        Close
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <Form onSuccess={handleFormSuccess} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2024 With a Whisper. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a 
              href="/privacy-policy" 
              className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-white/40">•</span>
            <a 
              href="/terms-of-service" 
              className="text-white/60 hover:text-white/80 text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
