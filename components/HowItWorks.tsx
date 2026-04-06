import { Link2, Sparkles, Rocket } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect',
    description:
      'Link your Gmail and Google Calendar in one click. Butlr syncs everything locally — your data never leaves your machine.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Briefing',
    description:
      'Every morning, Butlr reads your inbox and calendar, then writes a focused briefing: what needs your attention today and why.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execute',
    description:
      'Triage emails, prep for meetings, manage tasks, and chat with your AI assistant — all from one unified workspace.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#111827]/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">How It Works</p>
          <h2
            className="text-4xl font-bold text-[#F1F5F9]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Simple by design
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">Three steps from chaos to clarity.</p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connector line */}
          <div className="absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] hidden h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent md:block" />

          {STEPS.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* Step number + icon */}
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#334155] bg-[#111827]">
                <Icon size={28} className="text-blue-400" />
                <span
                  className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {number.slice(1)}
                </span>
              </div>

              <h3
                className="mb-3 text-xl font-bold text-[#F1F5F9]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#94A3B8]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
