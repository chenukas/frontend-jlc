import axios from 'axios';
import { BASE_API_URL, LOCAL_STORAGE } from '../constants';

const checkStatus = (response: any) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.message = response;
    throw error;
};

export const processRequest = (url: string, method: string = 'GET', data: any = {}, header: any = {}) => {
    const api = BASE_API_URL + url;
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)}`
    };

    headers = { ...headers, ...header };

    return axios({
        method,
        data: (data && JSON.stringify(data)) || null,
        headers,
        url: api
    }).then(res => checkStatus(res));
}