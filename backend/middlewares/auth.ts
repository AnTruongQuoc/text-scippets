import jwt from "jsonwebtoken";
import ErrorHandler from "../ultils/errorHandler";
import { NextFunction, Request } from 'express';
declare global{
    namespace Express {
        interface Request {
            currentUser: {
                email: string
            }
        }
    }
}
// Checks if user is authenticated or not
export const isAuthenticatedUser = () => (req: Request, next: NextFunction) => {

    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler('Login first to access this resource.', 401));
    }

    const decode = jwt.verify(token, String(process.env.JWT_SECRET)) as {email: string};
    req.currentUser.email  = decode.email;
    next()
}