import { sendToken, TryCatch } from '@/lib/features';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/userModel';
import { NextRequest } from 'next/server';

export const POST = TryCatch(async (req: NextRequest) => {
  await connectDB();
  const { name, username, password } = await req.json();
  const avatar = {
    public_id: 'ssss',
    url: 'adadx',
  };
  const newuser = await User.create({
    name: name,
    username: username,
    password: password,
    avatar: avatar,
  });
  return sendToken(newuser, 'User registered successfully',"user");
});
