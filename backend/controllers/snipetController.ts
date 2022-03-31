// Get all products   =>   /api/v1/products?keyword=apple
import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import * as snipetService from '../services/snipetService';

// Endpoint api/v1/snipet/all
export const getSnipets = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const snipets = await snipetService.getSnipets(req);
    res.status(200).json(snipets)
})
// Endpoint api/v1/snipet
export const getSnipet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const snipet = await snipetService.getSnipet(req);
    res.status(200).json(snipet)
})
export const createSnipet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const snipet = await snipetService.createSnipet(req);
    res.status(200)
})
export const deleteSnipet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const snipet = await snipetService.deleteSnipet(req);
    res.status(200)
})
export const updateSnipet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const snipet = await snipetService.updateSnipet(req);
    res.status(200)
})