import axios from 'axios';

export default axios.create({
    baseURL: 'https://dev.vertour.ru/api/',
    responseType: 'json'
});