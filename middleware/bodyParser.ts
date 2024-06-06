import { NextApiRequest, NextApiResponse } from 'next';
import { urlencoded } from 'body-parser';
export const config = {
  api: {
    bodyParser: true,
  },
};
type Middleware = (req: NextApiRequest, next: () => void) => void;
export const bodyParser: Middleware = async (req, next) => {
    urlencoded({ extended: true });
    next();
};
