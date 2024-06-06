import handleError from '@/lib/helper';
import {
  body as Body,
  validationResult,
} from 'express-validator';
import { NextRequest, NextResponse } from 'next/server';

type ValidateMiddleware = (
  req: any,
  next: () => void,
  validations: any
) => void;
type Middleware = (req: NextRequest, next: () => void) => void;
export const validateHandler: ValidateMiddleware = async (
  req,
  next,
  validations
) => {
  const body = await parseBody(req);
  const reqWithBody = { ...req, body };
  for (let validation of validations) {
    const result = await validation.run(reqWithBody);
    if (result.errors.length) break;
  }
  const errors = validationResult(reqWithBody);
  const errMsg = errors
    .array()
    .map((e) => e.msg)
    .join(', ');
  if (errors.isEmpty()) return next();
  else return handleError(errMsg, 400);
};
export const parseBody = async (req: NextRequest) => {
  const body = await req.json();
  return body;
};
export const loginValidator: Middleware = async (req, next) => {
  const validations = [
    Body('password', 'Password not found').notEmpty(),
    Body('username', 'Username not found').notEmpty(),
  ];
  return validateHandler(req, next, validations);
};
export const registerValidator: Middleware = async (req, next) => {
  const validations = [
    Body('password', 'Password not found').notEmpty(),
    Body('username', 'Username not found').notEmpty(),
    Body('name', 'Name not found').notEmpty(),
  ];
  return validateHandler(req, next, validations);
};
export const addParkValidator: Middleware = async (req, next) => {
  const validations = [
    Body('name', 'Name not found').notEmpty(),
  ];
  return validateHandler(req, next, validations);
};

