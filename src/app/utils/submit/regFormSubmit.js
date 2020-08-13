import { SubmissionError } from 'redux-form';
import API from '../API';

import { userData } from '../../store/actions/CurrentUserActions';
import { authSuccess } from '../../store/actions/AuthorizeActions';
import configureStore from '../../store/configureStore';

async function regFormSubmit(values){
    try{
        const response = await API.post('auth/registration',
            {
                lastname: values.lastname,
                firstname: values.firstname,
                email: values.email,
                password: values.password
            });
        console.log('👉 Returned data:', response);
        localStorage.setItem('token', response.data.token);
        configureStore().dispatch(userData(response.data));
        configureStore().dispatch(authSuccess(localStorage.getItem('token')));
    } catch (e) {
        let error = (~`${e}`.indexOf('500'))?
            '😱 Пользователь с таким email уже зарегистрирован!' : `😱 ${e}. Registration failed!`;
        console.log(e.status);
        throw new SubmissionError({
            _error: error,
        });
    }
}

export default regFormSubmit;