import axios from "axios";

axios.defaults.headers.common['Authorization'] = 'xxx-xxx-xxx-xxxx';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.timeout = 4000;

axios.interceptors.request.use(req => {
    console.log('Request: ', req);
    return req;
})
axios.interceptors.response.use(res => {

    return res;
})
