'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Download, ChevronDown } from 'lucide-react'

function WindowsIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5.6 10.5 4.5V12H3zm7.5 6.9H3v5.9l7.5-2.1zm3.5-8.15L21 3v9h-7.5zm0 8.15H21v9l-7.5-1.95z" />
    </svg>
  )
}

function AppleIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.29.07 2.18.74 2.94.76.9 0 2.6-.93 4.38-.79 1.08.07 2.99.44 3.96 2.09-3.76 2.25-3.18 7.76 1.72 9.22zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

const PLATFORM_OPTIONS = [
  {
    key: 'windows',
    label: 'Windows',
    sub: '.exe · Windows 10+',
    href: '/api/download/windows',
    Icon: WindowsIcon,
  },
  {
    key: 'mac',
    label: 'macOS',
    sub: '.dmg · macOS 12+',
    href: '/api/download/mac',
    Icon: AppleIcon,
  },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1A]/90 border-b border-[#1E293B] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            B
          </div>
          <span className="text-base font-semibold text-[#F1F5F9]" style={{ fontFamily: 'var(--font-display)' }}>
            Butlr
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'FAQ', href: '#faq' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-[#94A3B8] transition-colors hover:text-[#F1F5F9]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Download dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-400 active:scale-95"
          >
            <Download size={14} />
            Download
            <ChevronDown
              size={13}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-[#1E293B] bg-[#0A0F1A] shadow-2xl shadow-black/50">
              {PLATFORM_OPTIONS.map(({ key, label, sub, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[#111827]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1E293B] text-[#94A3B8]">
                    <Icon size={13} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F1F5F9]">{label}</p>
                    <p className="text-xs text-[#64748B]">{sub}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
