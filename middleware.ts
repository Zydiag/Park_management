import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import handleError from './middleware/error';
import jwt from 'jsonwebtoken';
export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.startsWith('/api')) {
    if (path.startsWith('/api/guest')) {
      const token = cookies().get('appToken');
      if(!token){
        return handleError('Please login to access the page', 401);
      }
      console.log(jwt.verify(token?.value, process.env.JWT_SECRET as string));
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}
export const config = {
  matcher: '/api/:path*',
};