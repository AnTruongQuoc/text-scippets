import jwt from "jsonwebtoken";
import ErrorHandler from "../ultils/errorHandler";
import { Request , NextFunction, Response} from 'express';
// Checks if user is authenticated or not
const isAuthenticatedUser = (req: Request,  res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler('Login first to access this resource.', 401));
    }
    const decode = jwt.verify(token, String(process.env.JWT_SECRET)) as {id: string};
    if(!req.currentUser){
        req.currentUser = { email : ''}
    }
    req.currentUser.email = decode.id ;
    next();
}

export default isAuthenticatedUser

