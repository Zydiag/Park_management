import { sendToken } from '@/lib/features';
import connectDB from '@/lib/mongoDB';
import handleError from '@/lib/helper';
import { Admin } from '@/models/adminModel';
import { compare } from 'bcrypt';

export async function POST(req: Request) {
  await connectDB();
  const { username, password } = await req.json();
  const user = await Admin.findOne({ username }).select('+password');
  if (!user) return handleError('Invalid username or password', 404);
  const isMatch = await compare(password, user.password);
  if (!isMatch) return handleError('Invalid username or password', 404);
  return sendToken(user, `Welcome ${user.name}`, 'admin');
}
