'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function MidSection() {
  const t = useTranslations('midSection')

  return (
    <section className="py-20 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-normal mb-6">
            {t('title')}
          </h2>
          <p className="text-white/50 text-xl max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Dashboard Animation Placeholder */}
        <div className="relative mb-16">
          <div className="aspect-video bg-[#1A1A1A] rounded-2xl border border-[#333333] flex items-center justify-center">
            <button className="w-20 h-20 bg-[#FAA819] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
              <svg
                className="w-8 h-8 text-[#0E0E0E]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="#"
            className="px-8 py-4 bg-[#FAA819] text-[#0E0E0E] rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            {t('startAnalysis')}
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border border-[#333333] text-white rounded-full font-medium hover:border-[#FAA819] transition-colors"
          >
            {t('watchDemo')}
          </Link>
        </div>
      </div>
    </section>
  )
} 