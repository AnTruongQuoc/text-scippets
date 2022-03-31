import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../ultils/errorHandler';
import * as snipet from '../DAL/snipetDAL';
import userModel from '../models/userModel';

export const getSnipets = async (req: Request) => {
    const pageNumber = Number(req.query.pageNumer) || 1;
    const email = req.currentUser.email;
    return await snipet.getAllSnipet(email, pageNumber)
}
export const getSnipet = async (req: Request) => {
    const id = req.query.id as string;
    return await snipet.getSnipet(id)
}
export const createSnipet = async (req: Request) => {
    const email = req.currentUser.email;
    const { name, description } = req.body;
    return await snipet.createSnipet(email, name, description)
}
export const deleteSnipet = async (req: Request) => {
    const id = req.query.id as string;
    return await snipet.deleteSnipet(id)
}
export const updateSnipet = async (req: Request) => {
    const id = req.query.id as string;
    const { name, description } = req.body;
    return await snipet.updateSnipet(id, name, description)
}