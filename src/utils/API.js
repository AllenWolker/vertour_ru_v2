import axios from 'axios';

export default axios.create({
    baseURL: 'https://dev.vertour.ru/api/auth/registration',
    responseType: 'json'
});