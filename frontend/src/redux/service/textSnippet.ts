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

    static getInstance() {
        if (!TextSnippetAPI.instance) {
            TextSnippetAPI.instance = new TextSnippetAPI();
        }
        return TextSnippetAPI.instance;
    }

}

export default TextSnippetAPI.getInstance();