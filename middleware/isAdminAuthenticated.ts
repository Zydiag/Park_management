import { verifyJwtToken } from '@/lib/features';
import handleError from '@/lib/helper';
import { NextRequest, NextResponse } from 'next/server';
type Middleware = (req: NextRequest, next: () => void, res?:NextResponse) => void;

export const isAdminAuthenticated: Middleware = async (req, next, res) => {
  const token = req.cookies.get('appToken')?.value;
  if (!token) return handleError('Please login to access the page', 401);
  const decodedData = await verifyJwtToken(token);
  if(decodedData?.role=='admin'){
    res?.headers.set('user', JSON.stringify({ id: decodedData._id, role:decodedData.role }));
    return next();
  }else{
    return handleError('Access Denied', 401);
  }
};
