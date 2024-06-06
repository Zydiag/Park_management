import { verifyJwtToken } from '@/lib/features';
import handleError from '@/lib/helper';
import { NextRequest } from 'next/server';
type Middleware = (req: NextRequest, next: () => void) => void;

export const authMiddleware: Middleware = async (req, next) => {
  const token = req.cookies.get('appToken')?.value;
  if (!token) return handleError('Please login to access the page', 401);
  const decodedData = await verifyJwtToken(token);
  req.headers.set('x-user-data', decodedData?._id as string);
  next();
};

