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
        localStorage.setItem('token', response.data.jwt);
        userData(response.data);
    } catch (e) {
        throw new SubmissionError({
            _error: `😱 ${e}. Registration failed!`,
        });
    }
}

export default regFormSubmit;