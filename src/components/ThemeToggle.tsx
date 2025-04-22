'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#333333] transition-colors"
    >
      {theme === 'dark' ? (
        <span className="text-white">🌞</span>
      ) : (
        <span className="text-[#0E0E0E]">🌙</span>
      )}
    </button>
  )
} 