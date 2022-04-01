import ErrorHandler from '../ultils/errorHandler';
import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || 500;
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.status).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err }

        error.message = err.message;

        // Wrong Mongoose Object ID Error
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid: ${err.path}`
            error = new ErrorHandler(message, 400)
        }

        // Handling Mongoose Validation Error
        // if (err.name === 'ValidationError') {
        //     const message = Object.values(err.errors).map((value: any) => value.message);
        //     error = new ErrorHandler(message, 400)
        // }

        // // Handling Mongoose duplicate key errors
        // if (err.code === 11000) {
        //     const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        //     error = new ErrorHandler(message, 400)
        // }

        // Handling wrong JWT error
        if (err.name === 'JsonWebTokenError') {
            const message = 'JSON Web Token is invalid. Try Again!!!'
            error = new ErrorHandler(message, 400)
        }

        // Handling Expired JWT error
        if (err.name === 'TokenExpiredError') {
            const message = 'JSON Web Token is expired. Try Again!!!'
            error = new ErrorHandler(message, 400)
        }

        res.status(error.status || 500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        })
    }
    next();
}
export default errorMiddleware