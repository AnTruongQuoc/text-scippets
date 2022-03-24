import axios from 'axios';
import { configEnv } from 'variables/const/configEnv';

// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-


const SERVER_URL = configEnv.SERVER_URL;

const axiosClient = axios.create({
    baseURL: SERVER_URL,
    timeout: 8000,
    //paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClient;