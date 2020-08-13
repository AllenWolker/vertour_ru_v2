import { SubmissionError } from 'redux-form';
import API from '../API';
import { userData } from '../../store/actions/CurrentUserActions';
import { authSuccess } from '../../store/actions/AuthorizeActions';
import configureStore from '../../store/configureStore';

async function logFormSubmit(values) {
    try{
        const response = await API.post('/auth/login', {
            email: values.email,
            password: values.password
        });
        console.log('👉 Returned data:', response);
        localStorage.setItem('token', response.data.token);
        configureStore().dispatch(userData(response.data));
        configureStore().dispatch(authSuccess(localStorage.getItem('token')));
        console.log('УРА!!');
    } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
        throw new SubmissionError({
            _error: 'Неверно указаны логин или пароль!',
        });
    }
}

export default logFormSubmit;