import handleError from '@/lib/helper';
import * as yup from 'yup';
import { NextRequest } from 'next/server';
import multer from 'multer';

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
  try {
    await validations.validate(body, {
      abortEarly: false,
    });
  } catch (error:any) {
    const errMsg = error.errors
      .map((e:any) => e)
      .join(', ');
      return handleError(errMsg, 400);
  }
    return next();
};
export const parseBody = async (req: NextRequest) => {
  const body = await req.json();
  return body;
};
export const loginValidator: Middleware = async (req, next) => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  return validateHandler(req, next, schema);
};
export const registerValidator: Middleware = async (req, next) => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
  });
  return validateHandler(req, next, schema);
};
export const addParkValidator: Middleware = async (req, next) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });
  return validateHandler(req, next, schema);
};

