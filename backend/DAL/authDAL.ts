import * as authNoSQL from '../SQL/authSQL';

export const findUserByEmailWithPassWord = async (email: string) => {
    const options = { email };
    return await authNoSQL.findUserByEmailWithPassWord(options)
}

export const findUserByEmail = async (email: string) => {
    const options = { email };
    return await authNoSQL.findUserByCondition(options)
}

export const findUserByLoginCodeExpire = async (code: string) => {
    const options = { 
        loginCode: code,
        loginCodeExpire: { $gt: Date.now() }
    };
    return await authNoSQL.findUserByCondition(options)
}

export const registerUser = async (email: string) => {
    const options = {
        email,
        isActive: 0
    }
    return await authNoSQL.registerUser(options)
}

export const updateUser = async (conditions: {}, optionsData: {}) => {
    const options: Array<{}> = [
        optionsData,
        {
            new: true,
            returnOriginal: false,
            runValidators: true,
            useFindAndModify: false
        }
    ]
    return await authNoSQL.updateUserByCondition(conditions,options)
}