'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'tr' : 'en'
    router.push(`/${newLocale}${pathname}`)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#333333] transition-colors"
    >
      <span className="text-white">{locale === 'en' ? '🇹🇷' : '🇬🇧'}</span>
    </button>
  )
} 