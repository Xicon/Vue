const axios = require('axios').default

export function request(config) {
    const instance = axios.create({
        baseURL:'',
        url:'',
        timeout: 3000,
    })

    //请求拦截
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
    }, error => {
        console.error(error.toJSON())
        return Promise.reject(error)
    })

    //响应拦截
    instance.interceptors.response.use(response => {
        console.log(response);
        return response.data
    }, error => {
        return Promise.reject(error)
    })

    return instance(config)
}