import { SubmissionError } from 'redux-form';
import axios from 'axios';
import { userData } from '../../store/actions/CurrentUserActions';

async function logFormSubmit(values) {
    try{
        const response = await axios.post('https://dev.vertour.ru/api/auth/login', {
            login: values.login,
            password: values.password
        });
        console.log('👉 Returned data:', response);
        localStorage.setItem('token', response.data.jwt);
        userData(response.data);
    } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
        throw new SubmissionError({
            _error: `😱 ${e}. Неверно указаны логин или пароль!`,
        });
    }
}

export default logFormSubmit;