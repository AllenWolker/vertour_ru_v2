import React from 'react';
import styled from 'styled-components';

import Form from './Form';
import normalizeFields from '../../../utils/formControl/normalizeFields';
import submit from '../../../utils/submit/regFormSubmit';

const FormWrapper = styled.div`
    width: 300px;
    height: auto;
    margin-bottom: 36px;
`;

const handleSubmit = (values) => submit(values);

const RegForm = () => {
    const initialState = {
        formName: 'regForm',
        titleComponent: 'Регистрация',
        fields: [
            {
                name: 'firstname',
                label: 'Имя',
                type: 'text',
                normalize: [normalizeFields],
            },
            {
                name: 'lastname',
                label: 'Фамилия',
                type: 'text',
                normalize: [normalizeFields],
            },
            {
                name: 'email',
                label: 'Email',
                type: 'email',
                normalize: [],
            },
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
            },
            {
                name: 'repeatPass',
                label: 'Повторите пароль',
                type: 'password',
                normalize: [],
            },
        ],

        checkbox: {
            name: 'agreement',
            type: 'checkbox',
            id: 'PrivacyPolicy',
            label: 'Я принимаю условия политики конфиденциальности'
        },

        btnComponents: ['Регистрация']
    };

    return(
        <FormWrapper>
            <Form
                formName={initialState.formName}
                title={initialState.titleComponent}
                fields={initialState.fields}
                checkbox={initialState.checkbox}
                btnComponents={initialState.btnComponents}
                onSubmit={handleSubmit}
            />
        </FormWrapper>
    )
};

export default RegForm;