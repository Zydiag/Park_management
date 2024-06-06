import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

type Middleware = (
  req: NextRequest,
  next: () => void
) => void;

export const middleware1: Middleware = (req, next) => {
  console.log('Middleware 1');
  // Perform actions or modify req/res
  return NextResponse.json({ name: 'midd1' });
  next();
};

export const middleware2: Middleware = (req, next) => {
  console.log('Middleware 2');
  // Perform actions or modify req/res
  next();
};
