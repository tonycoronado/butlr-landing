'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Download } from 'lucide-react'

const DOWNLOAD_URL = 'https://github.com/tonycoronado/butlrapp/releases/latest'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

        {/* CTA */}
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 active:scale-95"
        >
          <Download size={14} />
          Download free
        </a>
      </div>
    </header>
  )
}
