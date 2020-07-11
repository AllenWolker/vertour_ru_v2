import { SubmissionError } from 'redux-form';
import axios from 'axios';
import { userData } from '../../store/actions/CurrentUserActions';

async function logFormSubmit(values) {
    console.log(values);
    try{
        const response = await axios.post('https://dev.vertour.ru/api/auth/login', values);
        console.log('👉 Returned data:', response);
        localStorage.setItem('token', response.data.jwt);
        userData(response.data);
    } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
        throw new SubmissionError({
            _error: 'Неверно указаны логин или пароль!',
        });
    }
}

export default logFormSubmit;