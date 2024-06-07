import { TryCatch } from '@/lib/features';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const GET = TryCatch(async (req: NextRequest) => {
  cookies().set('appToken', '', {
    maxAge: 0,
    sameSite: 'none',
    httpOnly: true,
    secure: false,
  });
  return NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });
});
