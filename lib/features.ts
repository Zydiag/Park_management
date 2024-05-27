import jwtk from 'jsonwebtoken';
import mongoose from 'mongoose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
const sendToken = (user: any, message: string) => {
  console.log("working in send token");
  const { JWT_SECRET } = process.env;
  const token = jwtk.sign({ _id: user._id }, JWT_SECRET as string);
  cookies().set('appToken', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: 'none',
    httpOnly: true,
    secure: false,
  });
  console.log('about to send response');

  return NextResponse.json({ success: true, message });
};

const connectDB = () => {
  const uri = process.env.DATABASE_URL;
  console.log(uri);
  mongoose
    .connect(uri as string, { dbName: 'park' })
    .then((data) => {
      console.log(`Connected to DB: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};
const TryCatch=(passedFun:Function)=>async(req:NextRequest)=>{
  try{
    return await passedFun(req);

  }catch(err){
    return NextResponse.json({
      status: 404,
      name: (err as Error).name,
      message: (err as Error).message,
    });
  }
}
export { sendToken, connectDB, TryCatch };
