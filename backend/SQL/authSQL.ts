import User from '../DAL/Model/UserModel';

export const findUserByEmailWithPassWord = async (option: any) => {
    return await User.findOne(option).select('+password');
}

export const findUserByCondition = async (option: any) => {
    return await User.findOne(option);
}

//insert data when client login in the firt time
export const registerUser = async (option: any) => {
    return await User.create(option);
}

export const updateUserByCondition = async (conditions: {},option: Array<{}>) => {
    return await User.findOneAndUpdate(conditions, ...option);
}