import axios from 'axios/index';

export default axios.create({
    baseURL: 'https://dev.vertour.ru/api/',
    responseType: 'json'
});