'use client'

import { motion } from 'framer-motion'
import { Download, Play, Mail, Calendar, CheckSquare, Zap } from 'lucide-react'

const DOWNLOAD_URL = 'https://github.com/tonycoronado/butlrapp/releases/latest'

export function Hero() {
  return (
    <section className="hero-grid relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400"
        >
          <Zap size={11} className="fill-current" />
          Powered by Claude AI
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[#F1F5F9] md:text-6xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Your AI{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Chief of Staff
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#94A3B8] md:text-xl"
        >
          Butlr reads your email, knows your calendar, and tells you what to focus
          on every morning. No more inbox anxiety. No more missed priorities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-blue-400/30 active:scale-95"
          >
            <Download size={16} />
            Download for Free
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2.5 rounded-xl border border-[#1E293B] px-7 py-3.5 text-sm font-medium text-[#94A3B8] transition-all hover:border-[#334155] hover:text-[#F1F5F9] active:scale-95"
          >
            <Play size={14} className="fill-current" />
            See How It Works
          </a>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="relative mx-auto max-w-4xl"
        >
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------------------
   Inline product mockup — mimics the Butlr dashboard
-------------------------------------------------------------------------- */
function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1E293B] bg-[#111827] shadow-2xl shadow-black/60">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-[#1E293B] bg-[#0A0F1A] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#EF4444]/70" />
        <div className="h-3 w-3 rounded-full bg-[#F59E0B]/70" />
        <div className="h-3 w-3 rounded-full bg-[#22C55E]/70" />
        <span className="ml-3 text-xs text-[#64748B]">Butlr — Dashboard</span>
      </div>

      <div className="flex h-80">
        {/* Sidebar */}
        <div className="flex w-14 flex-col items-center gap-4 border-r border-[#1E293B] bg-[#0A0F1A] pt-4">
          {[Mail, Calendar, CheckSquare, Zap].map((Icon, i) => (
            <div
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${i === 0 ? 'bg-blue-500/20 text-blue-400' : 'text-[#64748B]'}`}
            >
              <Icon size={16} />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-5">
          {/* Greeting */}
          <div className="mb-4">
            <div className="mb-1 h-4 w-48 rounded bg-[#F1F5F9]/80" />
            <div className="h-3 w-36 rounded bg-[#94A3B8]/40" />
          </div>

          {/* Briefing card */}
          <div className="mb-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <div className="h-3 w-24 rounded bg-blue-400/60" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2.5 w-full rounded bg-[#94A3B8]/30" />
              <div className="h-2.5 w-5/6 rounded bg-[#94A3B8]/30" />
              <div className="h-2.5 w-4/6 rounded bg-[#94A3B8]/30" />
            </div>
          </div>

          {/* Email rows */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[#1E293B] bg-[#0A0F1A] p-3">
              <div className="mb-2 h-3 w-20 rounded bg-[#F1F5F9]/50" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="mb-1.5 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF4444]/60" />
                  <div className="h-2 flex-1 rounded bg-[#64748B]/40" />
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-[#1E293B] bg-[#0A0F1A] p-3">
              <div className="mb-2 h-3 w-20 rounded bg-[#F1F5F9]/50" />
              {[1, 2].map((i) => (
                <div key={i} className="mb-1.5 flex items-center gap-2">
                  <div className="h-4 w-4 shrink-0 rounded bg-blue-500/20" />
                  <div className="space-y-1">
                    <div className="h-2 w-24 rounded bg-[#94A3B8]/50" />
                    <div className="h-1.5 w-16 rounded bg-[#64748B]/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
