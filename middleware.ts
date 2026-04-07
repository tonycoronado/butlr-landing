import { NextRequest, NextResponse } from 'next/server'

const PREVIEW_KEY = process.env.PREVIEW_KEY
const COOKIE_NAME = 'butlr_preview'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Always allow API routes (download links must work)
  if (pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // If PREVIEW_KEY is not configured, allow all traffic
  if (!PREVIEW_KEY) {
    return NextResponse.next()
  }

  // Check if the request has the key in the query string
  const keyParam = searchParams.get('preview')
  if (keyParam === PREVIEW_KEY) {
    // Valid key — set cookie and redirect to clean URL (no ?preview= in address bar)
    const url = request.nextUrl.clone()
    url.searchParams.delete('preview')
    const response = NextResponse.redirect(url)
    response.cookies.set(COOKIE_NAME, PREVIEW_KEY, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    })
    return response
  }

  // Check if the request has a valid cookie
  const cookie = request.cookies.get(COOKIE_NAME)
  if (cookie?.value === PREVIEW_KEY) {
    return NextResponse.next()
  }

  // No valid key or cookie — return blank 404-like page
  return new NextResponse(
    `<!DOCTYPE html><html><head><title>Not Found</title></head><body></body></html>`,
    { status: 404, headers: { 'content-type': 'text/html' } },
  )
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
