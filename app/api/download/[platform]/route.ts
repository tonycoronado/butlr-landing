import { NextRequest, NextResponse } from 'next/server'

const FALLBACK = 'https://github.com/tonycoronado/butlrapp/releases/latest'
const API_URL = 'https://api.github.com/repos/tonycoronado/butlrapp/releases/latest'

type AssetItem = { name: string; browser_download_url: string }

function findAsset(assets: AssetItem[], platform: 'windows' | 'mac') {
  if (platform === 'windows') return assets.find((a) => a.name.endsWith('-setup.exe'))
  if (platform === 'mac') return assets.find((a) => a.name.endsWith('.dmg'))
  return undefined
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ platform: string }> },
) {
  const { platform } = await params

  if (platform !== 'windows' && platform !== 'mac') {
    return NextResponse.redirect(FALLBACK)
  }

  try {
    const res = await fetch(API_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: { revalidate: 300 }, // cache 5 min — one fetch per Vercel edge region
    })

    if (!res.ok) return NextResponse.redirect(FALLBACK)

    const release = (await res.json()) as { assets: AssetItem[] }
    const asset = findAsset(release.assets, platform as 'windows' | 'mac')

    return NextResponse.redirect(asset ? asset.browser_download_url : FALLBACK)
  } catch {
    return NextResponse.redirect(FALLBACK)
  }
}
