// Export all needed actions here

/**
 * Actions of user
 */
export {logout, demoLogin} from './slices/login/index';

export const userLoginThunkCreator = (params: {email:string, password: string}) => {
    return {
        type: 'login',
        payload: params
    }
}