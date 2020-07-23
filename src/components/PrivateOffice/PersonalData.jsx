import React from 'react';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';
import { validate } from '../../utils/formControl/formValidate';

import FormField from './FormField';

const PersonalDataWrapper = styled.div`
    grid-area: personal_data;
`;

const InputFieldBlock = styled.div`
    width: 570px;
    height: 50px;
    border: 1px solid #FFFFFF;
    margin-bottom: 16px;
`;

const SubmitBtn = styled.button`
    display: none;
`;



const PersonalData = (props) => {
    const {
        formFields,
        handleSubmit,
        pristine,
        submitting,
        initialValues
    } = props;

    const fields = formFields.map((field, index) => {
        return(
            <InputFieldBlock key={index}>
                <FormField
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    normalize={field.normalize}
                    btnLabel={field.btnLabel}
                />

            </InputFieldBlock>
        )
    });

    return (
        <PersonalDataWrapper>
            <form onSubmit={handleSubmit} initialvalues={initialValues}>
                {fields}
                <SubmitBtn
                    id={'subBtn'}
                    disabled={pristine || submitting}
                />
            </form>
        </PersonalDataWrapper>
    )
};

export default reduxForm({
    form: 'gamerData',
    validate
})(PersonalData);
