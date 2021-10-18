/******************Axios***************************/
import axios from 'axios';

export class AXIOS_SERVICE_CLASS {
    constructor() {
        this.service = axios;
        this.options = {
            headers: {}
        }

    }
    //   Setters
    setOptions = (obj) => {
        return this.options.headers = {
            ...this.options.headers,
            ...obj
        }
    }
    /****************** */
    // handleSuccess(response) {
    //     return response;
    // }

    // handleError = (error) => {
    //     switch (error.response.status) {
    //         case 401:
    //             this.redirectTo(document, '/')
    //             break;
    //         case 404:
    //             this.redirectTo(document, '/404')
    //             break;
    //         default:
    //             this.redirectTo(document, '/500')
    //             break;
    //     }
    //     return Promise.reject(error)
    // }

    // redirectTo = (document, path) => {
    //     document.location = path
    // }

    get = (path, callback) => {
        try {
            return this.service.get(`${path}`, this.options)
                .then(response => callback(response.status, response.data))
                .catch(err => {
                    if (err) {
                        console.error(`Get request failed on ${path}, Erro details on `)
                        throw err;
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    patch(path, payload, callback) {
        return this.service.request({
            method: 'PATCH',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => callback(response.status, response.data));
    }

    post(path, payload, callback) {
        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => callback(response.status, response.data));
    }
}
