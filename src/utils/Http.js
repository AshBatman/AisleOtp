import Storage from "../common/Storage";
import { API_BASE_URL } from "../constants";

const headers = {
    'Content-Type': 'application/json'
};

class Http {
    get = async (url) => {
        const accessToken = await Storage.getItem('accessToken');
        if (accessToken)
            headers.Authorization = `Bearer ${accessToken}`

        const apiUrl = `${API_BASE_URL}${url}`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers,
        });
        return response.json();
    }

    post = async (url, data = {}, dontParse = false) => {
        const accessToken = await Storage.getItem('accessToken');
        if (accessToken)
            headers.Authorization = `Bearer ${accessToken}`
        if (dontParse)
            delete headers["Content-Type"]
        const apiUrl = `${API_BASE_URL}${url}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: dontParse ? data : JSON.stringify(data)
        });
        return response.json();
    }

    delete = async (url, data = {}) => {
        const accessToken = await Storage.getItem('accessToken');
        if (accessToken)
            headers.Authorization = `Bearer ${accessToken}`

        const apiUrl = `${API_BASE_URL}${url}`;
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers
        });
        return response.json();
    }
}
export default new Http();
