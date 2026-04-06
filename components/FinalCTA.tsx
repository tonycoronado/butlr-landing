import { Download } from 'lucide-react'

const DOWNLOAD_URL = 'https://github.com/tonycoronado/butlrapp/releases/latest'

export function FinalCTA() {
  return (
    <section className="py-28 px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-[#111827] to-[#111827] px-8 py-20 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2
            className="mb-4 text-4xl font-extrabold leading-tight text-[#F1F5F9] md:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Stop organizing.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Start executing.
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg text-[#94A3B8]">
            Join professionals who reclaimed their mornings with Butlr.
            Free to download. No credit card required.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-blue-400/40 active:scale-95"
          >
            <Download size={18} />
            Download Butlr — It&apos;s Free
          </a>

          <p className="mt-5 text-xs text-[#64748B]">
            Available for Windows 10+ and macOS 12+
          </p>
        </div>
      </div>
    </section>
  )
}
