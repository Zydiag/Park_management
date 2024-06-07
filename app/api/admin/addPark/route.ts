import { TryCatch } from '@/lib/features';
import { NextRequest, NextResponse } from 'next/server';

export const POST = TryCatch(async (req: NextRequest) => {
  return NextResponse.json({ok:'ok'});
});
