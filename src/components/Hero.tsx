'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <div className="relative w-full h-[874px] bg-[#0E0E0E] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] via-[#0E0E0E] to-[#1A1A1A]" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        {/* Left Content */}
        <div className="w-1/2 space-y-8">
          <h1 className="text-white text-[60px] leading-[66px] font-normal">
            {t('title')}
          </h1>
          
          <p className="text-white/50 text-[24px] leading-[36px] font-normal">
            {t('subtitle')}
          </p>

          <div className="flex gap-4">
            <Link 
              href="/dashboard" 
              className="w-[253px] h-[88px] bg-[#FAA819] rounded-[50px] flex items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              <span className="text-[#0E0E0E] text-[18px] leading-[27px] font-normal">
                {t('startTrial')}
              </span>
            </Link>

            <Link 
              href="/modules" 
              className="w-[262px] h-[88px] border border-[#333333] rounded-[50px] flex items-center justify-center hover:border-[#FAA819] transition-colors"
            >
              <span className="text-white text-[18px] leading-[27px] font-normal">
                {t('exploreModules')}
              </span>
            </Link>
          </div>
        </div>

        {/* Right Content - Feature Preview */}
        <div className="w-1/2 relative">
          <div className="absolute left-0 top-0 w-[600px] h-[434px] bg-[#1A1A1A] border border-[#333333] backdrop-blur-sm rounded-[24px] p-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[48px] h-[48px] bg-[#FAA819] rounded-full flex items-center justify-center">
                <span className="text-[24px]">🔬</span>
              </div>
              <h3 className="text-white text-[24px] leading-[36px] font-normal">
                Feature Preview
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#333333] rounded-[20px] text-white">
                <p className="text-[16px] leading-[24px]">
                  • Advanced Image Processing
                </p>
              </div>
              <div className="p-4 bg-[#333333] rounded-[20px] text-white">
                <p className="text-[16px] leading-[24px]">
                  • AI-Powered Analysis
                </p>
              </div>
              <div className="p-4 bg-[#333333] rounded-[20px] text-white">
                <p className="text-[16px] leading-[24px]">
                  • Real-time Results
                </p>
              </div>
              <div className="p-4 bg-[#333333] rounded-[20px] text-white">
                <p className="text-[16px] leading-[24px]">
                  • Detailed Reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 