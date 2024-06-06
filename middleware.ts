import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import handleError from './lib/helper';
import { authMiddleware } from './middleware/authMiddleware';
import runMiddlewares from './middleware/runner';
import { middleware1, middleware2 } from './middleware/midd';
import { addParkValidator, loginValidator, registerValidator, validateHandler } from './middleware/validator';
import { NextApiRequest } from 'next';
import { bodyParser } from './middleware/bodyParser';
import { isAdminAuthenticated } from './middleware/isAdminAuthenticated';

// export const config = {
//   matcher: '/api/:path*',
// };
const middlewares = [middleware1, middleware2];
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default (req: NextRequest) => {
  const finalHandler = () => {
    // NextResponse.json({ void: true });
  };
  const path = req.nextUrl.pathname;
  if (path.startsWith('/api')) {
    if(path.startsWith('/api/admin')){
      if (path.startsWith('/api/admin/login')) {
        const middleware = [loginValidator];
        return runMiddlewares(middleware)(req, finalHandler);
      } else if (path.startsWith('/api/admin/register')) {
        const middleware = [registerValidator];
        return runMiddlewares(middleware)(req, finalHandler);
      } else if (path.startsWith('/api/admin/addPark')) {
        const middleware = [isAdminAuthenticated, addParkValidator];
        return runMiddlewares(middleware)(req, finalHandler);
      }
    }
    if (path.startsWith('/api/guest/login')) {
      const middleware = [loginValidator];
      return runMiddlewares(middleware)(req, finalHandler);
    } else if (path.startsWith('/api/guest/register')) {
      const middleware = [registerValidator];
      return runMiddlewares(middleware)(req, finalHandler);
    } 
  }
  return NextResponse.next();
};

