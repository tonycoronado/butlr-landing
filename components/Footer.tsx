import Link from 'next/link'
import { X, MessageCircle } from 'lucide-react'

const LINKS = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: 'https://github.com/tonycoronado/butlrapp/releases/latest' },
    { label: 'Changelog', href: 'https://github.com/tonycoronado/butlrapp/releases' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/usebutlr', icon: X },
    { label: 'Discord', href: 'https://discord.gg/butlr', icon: MessageCircle },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0A0F1A] px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-sm font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                B
              </div>
              <span className="text-base font-semibold text-[#F1F5F9]" style={{ fontFamily: 'var(--font-display)' }}>
                Butlr
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#64748B]">
              Your AI Chief of Staff. Email triage, meeting prep, and smart task management — powered by Claude AI.
            </p>
            <div className="mt-5 flex gap-3">
              {LINKS.social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1E293B] text-[#64748B] transition-all hover:border-[#334155] hover:text-[#94A3B8]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#64748B]">Product</h4>
            <ul className="space-y-3">
              {LINKS.product.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#94A3B8] transition-colors hover:text-[#F1F5F9]"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#64748B]">Legal</h4>
            <ul className="space-y-3">
              {LINKS.legal.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[#94A3B8] transition-colors hover:text-[#F1F5F9]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#1E293B] pt-8 text-xs text-[#64748B] sm:flex-row">
          <p>© {new Date().getFullYear()} Titan Interactive LLC. All rights reserved.</p>
          <p>Built with ♥ for productive humans</p>
        </div>
      </div>
    </footer>
  )
}
