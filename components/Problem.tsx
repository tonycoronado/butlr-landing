import { Clock, BarChart2, Moon } from 'lucide-react'

const PAIN_POINTS = [
  {
    icon: Clock,
    stat: '2.5 hrs',
    label: 'Average time spent on email daily',
    description:
      'Most professionals spend more time managing their inbox than doing the work that actually matters.',
  },
  {
    icon: BarChart2,
    stat: '15+ meetings',
    label: 'Per week, most with no clear outcome',
    description:
      'Back-to-back calls with no prep time and no follow-through. Your calendar controls you.',
  },
  {
    icon: Moon,
    stat: 'Midnight',
    label: 'When your real work happens',
    description:
      'When the chaos quiets down, you finally get things done. That\'s not productivity — that\'s survival.',
  },
]

export function Problem() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section headline */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">The Problem</p>
          <h2
            className="text-4xl font-bold text-[#F1F5F9] leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            2.5 hours on email. 15 meetings a week.
            <br className="hidden md:block" />
            <span className="text-[#94A3B8]"> Your real work happens at midnight.</span>
          </h2>
        </div>

        {/* Pain point cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PAIN_POINTS.map(({ icon: Icon, stat, label, description }) => (
            <div
              key={stat}
              className="group rounded-2xl border border-[#1E293B] bg-[#111827] p-7 transition-all duration-300 hover:border-[#334155] hover:shadow-lg hover:shadow-black/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1F2937]">
                <Icon size={22} className="text-[#94A3B8]" />
              </div>
              <p
                className="mb-1 text-3xl font-bold text-[#F1F5F9]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat}
              </p>
              <p className="mb-3 text-sm font-medium text-[#94A3B8]">{label}</p>
              <p className="text-sm leading-relaxed text-[#64748B]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
