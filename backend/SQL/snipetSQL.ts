import Snipet from '../DAL/Model/SnipetModel';

export const getAllSnipet = async (options: Array<{}>) => {
    return await Snipet.paginate(...options);
}
export const getSnipetById = async (id: string) => {
    return await Snipet.findById(id);
}
export const createSnipet = async (id: string) => {
    return await Snipet.findById(id);
}
export const insertSnipet = async (option:{}) => {
    return await Snipet.create(option);
}
export const deleteSnipet = async (id: string) => {
    return await Snipet.findByIdAndDelete(id);
}
export const updateSnipet = async (id: string, options:{}) => {
    return await Snipet.findByIdAndUpdate(id, options);
}