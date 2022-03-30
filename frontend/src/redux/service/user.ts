import axiosClient from './axiosClient'
import { AxiosRequestConfig } from 'axios';

class UserAuthAPI {
    readonly LOGIN_API = '/api/v1/auth/login';
    public static instance: UserAuthAPI;

    public login = (data: {email:string, password: string}): Promise<any> => {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: this.LOGIN_API,
            data: data
        };
        return axiosClient(config);
    }

    static getInstance() {
        if (!UserAuthAPI.instance) {
            UserAuthAPI.instance = new UserAuthAPI();
        }
        return UserAuthAPI.instance;
    }
}

export default UserAuthAPI.getInstance();