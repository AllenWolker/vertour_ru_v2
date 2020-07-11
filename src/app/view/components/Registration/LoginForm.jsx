import React from 'react';
import styled from 'styled-components';

import Form from './Form';
import submit from '../../../utils/submit/logFormSubmit';

const FormWrapper = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const LoginForm = () => {
    const initialState = {
        formName: 'loginForm',
        titleComponent: 'Вход',
        fields: [
            {
                name: 'login',
                label: 'Логин',
                type: 'text',
                normalize: [],
            },
            {
                name: 'password',
                label: 'Пароль',
                type: 'password',
                normalize: [],
            }
        ],

        btnComponents: ['Вход', 'Забыли пароль?']
    };

    return(
        <FormWrapper>
            <Form
                formName={initialState.formName}
                title={initialState.titleComponent}
                fields={initialState.fields}
                btnComponents={initialState.btnComponents}
                onSubmit={submit}
            />
        </FormWrapper>
    )
};

export default LoginForm;