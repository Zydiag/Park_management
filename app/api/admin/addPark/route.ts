import { TryCatch } from '@/lib/features';
import { User } from '@/models/userModel';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const POST = TryCatch(async (req: NextRequest) => {
  return NextResponse.json({ok:'ok'});
});
