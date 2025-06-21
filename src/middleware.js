import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/api/stripe/webhook'],
};

export function middleware(req) {
  return NextResponse.next();
}
