import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
type Middleware = (
  req: NextRequest,
  next: () => void,
  res?: NextResponse
) => void;
const runMiddlewares = (middlewares: Middleware[]) => {
  return (req: NextRequest, finalHandler: () => void, res?: NextResponse) => {
    let index = 0;
    const next = () => {
      if (index < middlewares.length) {
        const middleware = middlewares[index];
        index++;
        return middleware(req, next, res);
      } else {
        return finalHandler();
      }
    };

    return next();
  };
};
export default runMiddlewares;
