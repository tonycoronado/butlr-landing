'use client'

import { useEffect, useState } from 'react'

type Platform = 'windows' | 'mac' | 'unknown'

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'unknown'
  const ua = navigator.userAgent
  if (/Win/i.test(ua)) return 'windows'
  if (/Mac/i.test(ua)) return 'mac'
  return 'unknown'
}

/* ---------- platform icons (inline SVG — no extra deps) ---------- */

function WindowsIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.6 10.5 4.5V12H3zm7.5 6.9H3v5.9l7.5-2.1zm3.5-8.15L21 3v9h-7.5zm0 8.15H21v9l-7.5-1.95z" />
    </svg>
  )
}

function AppleIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.29.07 2.18.74 2.94.76.9 0 2.6-.93 4.38-.79 1.08.07 2.99.44 3.96 2.09-3.76 2.25-3.18 7.76 1.72 9.22zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

/* ---------- constants ---------- */

const PLATFORMS = [
  {
    key: 'windows' as const,
    label: 'Download for Windows',
    sub: '.exe · Windows 10+',
    href: '/api/download/windows',
    Icon: WindowsIcon,
  },
  {
    key: 'mac' as const,
    label: 'Download for macOS',
    sub: '.dmg · macOS 12+',
    href: '/api/download/mac',
    Icon: AppleIcon,
  },
]

/* ---------- component ---------- */

interface DownloadButtonsProps {
  /** Extra classes on the wrapper */
  className?: string
}

export function DownloadButtons({ className = '' }: DownloadButtonsProps) {
  const [platform, setPlatform] = useState<Platform>('unknown')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
    setMounted(true)
  }, [])

  // Reorder: detected platform first, avoids layout shift by sorting after mount
  const sorted = mounted && platform !== 'unknown'
    ? [...PLATFORMS].sort((a) => (a.key === platform ? -1 : 1))
    : PLATFORMS

  return (
    <div className={`flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center ${className}`}>
      {sorted.map(({ key, label, sub, href, Icon }) => {
        const isPrimary = mounted && (platform === key || (platform === 'unknown' && key === 'windows'))
        return (
          <a
            key={key}
            href={href}
            className={`flex flex-col items-center gap-0.5 rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-150 active:scale-95
              ${isPrimary
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-400 hover:shadow-blue-400/30'
                : 'border border-[#1E293B] bg-[#111827] text-[#94A3B8] hover:border-[#334155] hover:text-[#F1F5F9]'
              }`}
          >
            <span className="flex items-center gap-2">
              <Icon size={15} />
              {label}
            </span>
            <span className={`text-xs font-normal ${isPrimary ? 'text-blue-100/70' : 'text-[#64748B]'}`}>
              {sub}
            </span>
          </a>
        )
      })}
    </div>
  )
}
