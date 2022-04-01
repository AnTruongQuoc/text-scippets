import axiosClient from './axiosClient'
import { AxiosRequestConfig } from 'axios';

class TextSnippetAPI {
    readonly TEXT_SNIPPET_API = '/api/v1/snipet';

    public static instance: TextSnippetAPI;

    public getTextSnippetInPage = (pageNumber: number): Promise<any> => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.TEXT_SNIPPET_API}/all/${pageNumber}`
        };
        return axiosClient(config);
    }

    public createTextSnippet = (data: {name: string, desciprtion: string}): Promise<any> => {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: this.TEXT_SNIPPET_API,
            withCredentials: true,
            data: data
        };
        return axiosClient(config);
    }

    public getAllTextSnippet = (): Promise<any> => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.TEXT_SNIPPET_API}/all`,
        }
        return axiosClient(config);
    }

    static getInstance() {
        if (!TextSnippetAPI.instance) {
            TextSnippetAPI.instance = new TextSnippetAPI();
        }
        return TextSnippetAPI.instance;
    }

}

export default TextSnippetAPI.getInstance();