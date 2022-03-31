import { Response } from "express";
import jwt from 'jsonwebtoken';

// Create and send token and save in the cookie.
const sendToken = (user: any , statusCode: number, res: Response) => {

    // Create Jwt token
    const jwtSecret = process.env.JWT_SECRET || 'tgbao';
    const token = jwt.sign({ id: user.email }, jwtSecret, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    });

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })

}

export default sendToken;