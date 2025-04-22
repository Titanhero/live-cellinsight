'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const t = useTranslations('navbar')

  return (
    <nav className="bg-[#0E0E0E] border-b border-[#333333]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-medium">
            {t('logo')}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/modules" className="text-white/50 hover:text-white transition-colors">
              {t('modules')}
            </Link>
            <Link href="/resources" className="text-white/50 hover:text-white transition-colors">
              {t('resources')}
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link href="/register" className="text-white/50 hover:text-white transition-colors">
              {t('register')}
            </Link>
            <Link
              href="/start-trial"
              className="px-4 py-2 bg-[#FAA819] text-[#0E0E0E] rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              {t('startTrial')}
            </Link>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 