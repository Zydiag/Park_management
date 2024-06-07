import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import runMiddlewares from './middleware/runner';
import { addParkValidator, loginValidator, registerValidator } from './middleware/validator';
import { isAdminAuthenticated } from './middleware/isAdminAuthenticated';

export default (req: NextRequest) => {
  const finalHandler = () => {
    // NextResponse.json({ void: true });
  };
  const path = req.nextUrl.pathname;
  if (path.startsWith('/api')) {
    if(path.startsWith('/api/admin')){
      if (path.startsWith('/api/admin/guest/login')) {
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

