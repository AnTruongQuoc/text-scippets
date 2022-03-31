import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import * as authService from '../services/authService';
import sendToken from '../ultils/jwtToken';

// Endpoint api/v1/auth/login
export const loginUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user =  await authService.loginUser(email, password, next);
    sendToken(user, 200, res)
})
export const isMember = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const email = req.query.email as string;
    await authService.isMember(email, res, next);
    res.status(200).send()
})
// Endpoint api/v1/auth/login/code/check
export const checkLoginCode = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const code = req.query.code as string;
    await authService.checkLoginCode(code, next);
    res.status(200).send()
})
// Endoint api/v1/auth/complete/register
// Complete register process when customer enter login code
export const completeRegister = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const {email, password, name} = req.body;
    await authService.completeRegister(email, password, name, next);
    res.status(200).send()
})
// Endoint api/v1/auth/logout
export const logout  = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})