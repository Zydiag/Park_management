import { sendToken } from '@/lib/features';
import { ErrorHandler } from '@/lib/utility';
import { User } from '@/models/userModel';
import { compare } from 'bcrypt';
import { NextApiResponse } from 'next';

export async function POST(req: Request, res: NextApiResponse) {
    const {userId} = await req.json();
  const user = await User.findById(userId);
  return res
    .status(200)
    .setHeader(
      'Set-Cookie',
      `appToken=; sameSite=strict; httpOnly=true; maxAge=60*60*24`
    )
    .json({
      success: true,
      message:"Loggedout Successfully"
    });
}
