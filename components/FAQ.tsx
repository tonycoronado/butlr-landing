'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Is my email data safe?',
    a: 'Yes. Butlr syncs your emails and calendar locally to a SQLite database on your own machine. Your email content is never sent to Butlr\'s servers. AI requests go directly from your computer to Anthropic\'s API (BYOK) or through our privacy-first proxy — we never store or log email content.',
  },
  {
    q: 'Do I need an Anthropic API key?',
    a: 'You have two options. You can bring your own Anthropic API key (BYOK), which is stored securely in your OS keychain and used directly — we never see it. Or you can use Butlr\'s managed AI mode, which proxies requests through our rate-limited service (no key needed). Managed mode is included in all plans.',
  },
  {
    q: 'Which email clients does Butlr work with?',
    a: 'Butlr currently supports Gmail via Google OAuth. Support for Outlook/Microsoft 365 is on the roadmap for Q2 2026. You can join the waitlist for early access to Outlook support.',
  },
  {
    q: 'How accurate is the email triage?',
    a: 'In our testing with real inboxes, Claude correctly categorizes over 92% of emails on the first pass. The categories (Urgent, Response Needed, FYI, Ignore) are designed to be conservative — when in doubt, Claude categorizes upward. You can always override any categorization.',
  },
  {
    q: 'Can I use Butlr on multiple computers?',
    a: 'Each license activation covers one machine. Pro plan users can deactivate their license from Settings and reactivate on a new machine at any time. Multi-seat team licenses are coming in Q3 2026.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data is stored locally on your machine in a SQLite database. Canceling your subscription does not delete anything — you keep all your data. You\'ll simply lose access to paid-tier features (Sonnet/Opus models, higher chat limits). You can export or delete your local database at any time.',
  },
  {
    q: 'What\'s the difference between Free and Starter?',
    a: 'The Free plan gives you 10 AI chat messages per day and access to Claude Haiku. Starter unlocks 100 messages/day, Claude Sonnet (significantly smarter for complex tasks), and meeting prep briefs. Pro unlocks unlimited messages, all Claude models including Opus, and priority support.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">FAQ</p>
          <h2
            className="text-4xl font-bold text-[#F1F5F9]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Common questions
          </h2>
        </div>

        <div className="space-y-2">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-[#1E293B] bg-[#111827]"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span
                  className="text-sm font-semibold text-[#F1F5F9] pr-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#64748B] transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-[#1E293B] px-6 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
