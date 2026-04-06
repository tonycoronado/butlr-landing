import { DownloadButtons } from './DownloadButtons'

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

          <DownloadButtons />

          <p className="mt-5 text-xs text-[#64748B]">
            Free to download · No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
