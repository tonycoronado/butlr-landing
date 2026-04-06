'use client'

import { useEffect, useState } from 'react'
import { Check, Minus, Zap, Crown } from 'lucide-react'

const CHECKOUT = {
  starter: {
    monthly: 'https://butlr.lemonsqueezy.com/checkout/buy/fc65fbc0-7bc4-4add-a9d1-08a9d9a79df9',
    annual: 'https://butlr.lemonsqueezy.com/checkout/buy/041bfa80-43c5-4e74-bfa5-6997ca08a7c6',
  },
  pro: {
    monthly: 'https://butlr.lemonsqueezy.com/checkout/buy/a08d8155-47f5-4ff9-963e-3fcf1e3f29a0',
    annual: 'https://butlr.lemonsqueezy.com/checkout/buy/0fd82d93-b909-44ac-a378-630b9973276f',
  },
}

const FEATURES = [
  { label: 'Chat messages / day', free: '10', starter: '100', pro: 'Unlimited' },
  { label: 'AI models', free: 'Haiku', starter: 'Haiku + Sonnet', pro: 'All models' },
  { label: 'Email triage', free: true, starter: true, pro: true },
  { label: 'Morning briefings', free: true, starter: true, pro: true },
  { label: 'Calendar integration', free: true, starter: true, pro: true },
  { label: 'Task management', free: true, starter: true, pro: true },
  { label: 'Meeting prep briefs', free: false, starter: true, pro: true },
  { label: 'Follow-up detection', free: false, starter: true, pro: true },
  { label: 'Priority support', free: false, starter: false, pro: true },
]

type Billing = 'monthly' | 'annual'

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const [freeDownloadHref, setFreeDownloadHref] = useState('/api/download/windows')

  useEffect(() => {
    const isMac = /Mac/i.test(navigator.userAgent)
    if (isMac) setFreeDownloadHref('/api/download/mac')
  }, [])

  const prices = {
    starter: { monthly: 9, annual: 7 },
    pro: { monthly: 19, annual: 15 },
  }

  return (
    <section id="pricing" className="py-28 px-6 bg-[#111827]/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">Pricing</p>
          <h2
            className="text-4xl font-bold text-[#F1F5F9]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8]">No credit card required to download.</p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-xl border border-[#1E293B] bg-[#0A0F1A] p-1">
            {(['monthly', 'annual'] as Billing[]).map((cycle) => (
              <button
                key={cycle}
                type="button"
                onClick={() => setBilling(cycle)}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-150 ${
                  billing === cycle
                    ? 'bg-blue-500 text-white shadow'
                    : 'text-[#64748B] hover:text-[#94A3B8]'
                }`}
              >
                {cycle === 'monthly' ? 'Monthly' : 'Annual'}
                {cycle === 'annual' && (
                  <span className="ml-1.5 rounded-full bg-green-500/20 px-1.5 py-0.5 text-xs font-medium text-green-400">
                    −25%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {/* Free */}
          <PlanCard
            name="Free"
            badge={null}
            price={0}
            billing={billing}
            description="For individuals exploring AI productivity."
            cta={{ label: 'Download free', href: freeDownloadHref, variant: 'ghost', external: false }}
            highlighted={false}
          />

          {/* Starter */}
          <PlanCard
            name="Starter"
            badge={{ icon: Zap, label: 'Most Popular' }}
            price={prices.starter[billing]}
            billing={billing}
            description="For professionals serious about reclaiming their time."
            cta={{ label: 'Get Starter', href: CHECKOUT.starter[billing], variant: 'primary' }}
            highlighted
          />

          {/* Pro */}
          <PlanCard
            name="Pro"
            badge={{ icon: Crown, label: 'Power Users' }}
            price={prices.pro[billing]}
            billing={billing}
            description="For executives and founders who need unlimited everything."
            cta={{ label: 'Get Pro', href: CHECKOUT.pro[billing], variant: 'warning' }}
            highlighted={false}
          />
        </div>

        {/* Feature table */}
        <div className="overflow-hidden rounded-2xl border border-[#1E293B]">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-[#1E293B] bg-[#0A0F1A] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
            <span>Feature</span>
            <span className="text-center">Free</span>
            <span className="text-center text-blue-400">Starter</span>
            <span className="text-center text-amber-400">Pro</span>
          </div>
          {FEATURES.map((feat, i) => (
            <div
              key={feat.label}
              className={`grid grid-cols-4 items-center px-6 py-3.5 text-sm ${i % 2 === 0 ? 'bg-[#111827]' : 'bg-[#0A0F1A]'}`}
            >
              <span className="text-[#94A3B8]">{feat.label}</span>
              <Cell value={feat.free} />
              <Cell value={feat.starter} accent="blue" />
              <Cell value={feat.pro} accent="amber" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface PlanCardProps {
  name: string
  badge: { icon: React.ElementType; label: string } | null
  price: number
  billing: Billing
  description: string
  cta: { label: string; href: string; variant: 'primary' | 'ghost' | 'warning'; external?: boolean }
  highlighted: boolean
}

function PlanCard({ name, badge, price, billing, description, cta, highlighted }: PlanCardProps) {
  const border = highlighted ? 'border-blue-500' : 'border-[#1E293B]'
  const bg = highlighted ? 'bg-[#111827]' : 'bg-[#0A0F1A]'

  const ctaClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/20',
    ghost: 'border border-[#334155] text-[#94A3B8] hover:border-[#64748B] hover:text-[#F1F5F9]',
    warning: 'bg-amber-500 text-black hover:bg-amber-400 font-semibold',
  }[cta.variant]

  return (
    <div className={`relative rounded-2xl border ${border} ${bg} p-7`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-1 flex items-center gap-2">
        {badge && <badge.icon size={14} className={highlighted ? 'text-blue-400' : 'text-amber-400'} />}
        <h3 className="font-bold text-[#F1F5F9]" style={{ fontFamily: 'var(--font-display)' }}>{name}</h3>
      </div>

      <div className="my-5">
        {price === 0 ? (
          <span className="text-4xl font-extrabold text-[#F1F5F9]" style={{ fontFamily: 'var(--font-display)' }}>Free</span>
        ) : (
          <div className="flex items-end gap-1">
            <span className="text-4xl font-extrabold text-[#F1F5F9]" style={{ fontFamily: 'var(--font-display)' }}>${price}</span>
            <span className="mb-1 text-sm text-[#64748B]">/mo{billing === 'annual' ? ', billed annually' : ''}</span>
          </div>
        )}
      </div>

      <p className="mb-6 text-sm text-[#64748B]">{description}</p>

      <a
        href={cta.href}
        {...(cta.external !== false ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={`block w-full rounded-xl px-4 py-2.5 text-center text-sm transition-all active:scale-95 ${ctaClass}`}
      >
        {cta.label}
      </a>
    </div>
  )
}

function Cell({ value, accent }: { value: string | boolean; accent?: 'blue' | 'amber' }) {
  const color = accent === 'amber' ? 'text-amber-400' : accent === 'blue' ? 'text-blue-400' : 'text-[#64748B]'
  const checkColor = accent === 'amber' ? 'text-amber-400' : accent === 'blue' ? 'text-blue-400' : 'text-[#64748B]'

  if (typeof value === 'boolean') {
    return (
      <div className="flex justify-center">
        {value
          ? <Check size={15} className={checkColor} />
          : <Minus size={14} className="text-[#334155]" />}
      </div>
    )
  }
  return <span className={`block text-center text-xs font-medium ${color}`}>{value}</span>
}
