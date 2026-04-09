import { Mail, CalendarDays, CheckSquare, Sunrise, MessageSquare, BellRing } from 'lucide-react'

const FEATURES = [
  {
    icon: Mail,
    title: 'Email Triage',
    description:
      'Claude reads every email and categorizes it: Urgent, Response Needed, FYI, or Ignore. Zero inbox decisions before your first coffee.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: CalendarDays,
    title: 'Meeting Prep',
    description:
      'Before every meeting, Butlr pulls relevant emails from attendees and writes a focused 3-sentence brief so you always walk in prepared.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: CheckSquare,
    title: 'Smart Tasks',
    description:
      'Create tasks by priority and due date. Butlr surfaces the most important ones each morning so nothing falls through the cracks.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Sunrise,
    title: 'Morning Briefing',
    description:
      'Wake up to a tailored summary of your day: top emails, upcoming meetings, and the one thing you should focus on first.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Deep Chat',
    description:
      'Ask anything with full context of your inbox and calendar. "What did Sarah say about the Q3 budget?" — answered instantly.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
  },
  {
    icon: BellRing,
    title: 'Follow-up Tracking',
    description:
      'Butlr watches your sent emails and surfaces threads where no one has replied. Never let an important conversation go cold again.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
]

export function Features() {
  return (
    <section id="features" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">Features</p>
          <h2
            className="text-4xl font-bold text-[#F1F5F9]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Everything your chief of staff would do
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Without the $200k salary.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#1E293B] bg-[#111827] p-6 transition-all duration-300 hover:border-[#334155] hover:shadow-lg hover:shadow-black/20"
            >
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}>
                <Icon size={20} className={color} />
              </div>
              <h3
                className="mb-2 text-base font-semibold text-[#F1F5F9]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#64748B]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
