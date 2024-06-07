import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { SignJWT, jwtVerify } from 'jose';

const sendToken = async(user: any, message: string, role:string) => {
  const token = await new SignJWT({ _id: user._id, role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30s')
    .sign(getJwtSecretKey());
  cookies().set('appToken', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: 'none',
    httpOnly: true,
    secure: false,
  });
  return NextResponse.json({ success: true, message });
};

const TryCatch = (passedFun: Function) => async (req: NextRequest) => {
  try {
    return await passedFun(req);
  } catch (err) {
    return NextResponse.json({
      success:false,
      status: 404,
      name: (err as Error).name,
      message: (err as Error).message,
    });
  }
};
export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT Secret key is not matched');
  }
  return new TextEncoder().encode(secret);
}
export async function verifyJwtToken(token:string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return null;
  }
}
export { sendToken, TryCatch };
