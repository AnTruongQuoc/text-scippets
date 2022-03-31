import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../ultils/errorHandler';
import * as auth from '../DAL/authDAL';
import userModel from '../models/userModel';
import sendEmail from '../ultils/sendEmail';
import { ObjectId } from "mongodb";
import bcrypt from 'bcryptjs';

export const loginUser = async (email: string, password: string, next: NextFunction) => {
    
    if (!email || !password) {
        next(new ErrorHandler('Please enter email & password', 400))
    }
    const user = await auth.findUserByEmailWithPassWord(email);
    if(!user) {
        return next(new ErrorHandler('Invalid email or password', 401))
    }
    const isPasswordMatched  = await user.comparePassword(password);
    if(!isPasswordMatched) {
        return next(new ErrorHandler('Invalid email or password', 401))       
    }
    return new userModel(user.email, user.name).toJSON()
}

export const isMember = async (email: string,res:Response, next: NextFunction) => {
    if (!email) {
        next(new ErrorHandler('Please enter email & password', 400));
    }
    const user = await auth.findUserByEmail(email);
    if(user && user.isActive === 1) {
        return ;
    }
    //Handler when user haven't active yet
    if(user && user.isActive === 0){
        await handlerSendEmailLoginCode(user, res, next);
        return ;
    }
    //Handler when user haven't register yet
    const userRegister = await auth.registerUser(email);
    await handlerSendEmailLoginCode(userRegister, res, next);
}

async function handlerSendEmailLoginCode (user: any, res: Response, next: NextFunction) {
    const loginCode = user.getLogincode();
    // save data after set loginCode & loginCodeExpire
    await user.save({validateBeforeSave: false});
    const message = `Your login code is: ${loginCode}`;
    try {
        await sendEmail({
            email: user.email,
            subject: 'Login code',
            message: message
        });
        res.status(200).send({
            success: true,
            message: `Email sent to: ${user.email} and loggin code: ${loginCode}`
        })
    } catch (error) {
        user.loginCode = undefined;
        user.loginCodeExpire = undefined;
    
        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler("Can't send email !!!!!", 500))
    }
}

export const checkLoginCode = async (code: string,next: NextFunction) => {
    if (!code) {
        next(new ErrorHandler('Please enter login code', 400))
    }
    const user = await auth.findUserByLoginCodeExpire(code);
    console.log(user)
    if(!user) {
        next(new ErrorHandler('Login code invalid or has been expire', 400))
    }
    const _id = new ObjectId(user?._id).toString();
    const conditions = { _id };
    const options = {
        isActive: 1,
        loginCode: null,
        loginCodeExpire: null
    }
    return await auth.updateUser(conditions, options)
}

export const completeRegister = async (email: string, password: string, name: string, next: NextFunction) => {
    if (!email || !password) {
        next(new ErrorHandler('Please enter email & password', 400));
    }
    password = await bcrypt.hash(password, 10);
    const conditions = { email };
    const options = { password, name };
    await auth.updateUser(conditions, options)
}
