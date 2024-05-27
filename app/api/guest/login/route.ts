import { sendToken } from "@/lib/features";
import { ErrorHandler } from "@/lib/utility";
import { User } from "@/models/userModel";
import { compare } from "bcrypt";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse, next: any) {
  const { username, password } = await req.json();
  const user = await User.findOne({ username }).select('+password');
  if (!user) return next(new ErrorHandler('Invalid Username or Password'));
  const isMatch = await compare(password, user.password);
  if (!isMatch) return next(new ErrorHandler('Invalid Credendialts'));
  sendToken(user, `Welcome ${user.name}`);
}