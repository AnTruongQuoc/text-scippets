import { Request} from 'express';
import * as snipet from '../DAL/snipetDAL';

export const getSnipets = async (req: Request) => {
    const email = req.currentUser.email;
    const result = await snipet.getAllSnipet(email);
    return {
        "loadMore": result?.hasMore,
        "listSnipet": result?.docs,
    }
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