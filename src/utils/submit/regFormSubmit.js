import { SubmissionError } from 'redux-form';
import axios from 'axios';
import { userData } from '../../store/actions/CurrentUserActions';

async function regFormSubmit(values){
    try{
        const response = await axios.post('https://dev.vertour.ru/api/auth/registration',
            {
                lastname: values.lastname,
                firstname: values.firstname,
                email: values.email,
                password: values.password
            });
        console.log('👉 Returned data:', response);
        localStorage.setItem('token', response.data.token);
        userData(response.data);
    } catch (e) {
       let error = (~`${e}`.indexOf('500'))?
           '😱 Пользователь с таким email уже зарегистрирован!' : `😱 ${e}. Registration failed!`;


        throw new SubmissionError({
            _error: error,
        });
    }
}

export default regFormSubmit;