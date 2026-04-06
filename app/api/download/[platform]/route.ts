import { NextRequest, NextResponse } from 'next/server'

// R2 public base URL — set via VERCEL env var (no trailing slash)
// e.g. https://pub-abc123.r2.dev
const R2_URL = process.env.R2_PUBLIC_URL ?? ''

// Fallback if R2 is not yet configured
const FALLBACK = 'https://github.com/tonycoronado/butlrapp/releases'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ platform: string }> },
) {
  const { platform } = await params

  if (!R2_URL) {
    // R2 not configured yet — fall back to GitHub releases page
    return NextResponse.redirect(FALLBACK)
  }

  if (platform === 'windows') {
    return NextResponse.redirect(`${R2_URL}/latest/butlr-setup.exe`)
  }

  if (platform === 'mac') {
    return NextResponse.redirect(`${R2_URL}/latest/butlr.dmg`)
  }

  return NextResponse.redirect(FALLBACK)
}
