import * as snipetNoSQL from '../SQL/snipetSQL';

export const getAllSnipet = async (email: string, pageNumber: number) => {
    const options = [
        {
            email: { $regex: new RegExp(email), $options: "i" }
        },
        { 
            limit: 10,
            page: pageNumber
        }
    ] 
    return await snipetNoSQL.getAllSnipet(options)
}
export const getSnipet = async (id: string) => {
    return await snipetNoSQL.getSnipetById(id)
}
export const createSnipet = async (email: string, name: string, description: string) => {
    const options = {
        email,
        name,
        description
    }
    return await snipetNoSQL.insertSnipet(options)
}
export const deleteSnipet = async (id: string) => {
    return await snipetNoSQL.insertSnipet(id)
}
export const updateSnipet = async (id:string, name: string, description: string) => {
    const options = {
        name,
        description
    }
    return await snipetNoSQL.updateSnipet(id, options)
}