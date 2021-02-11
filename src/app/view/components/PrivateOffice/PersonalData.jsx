import React from 'react';
import styled from 'styled-components';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { validate } from '../../../utils/formControl/formValidate';

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
const getInitialValues  = () => {
    return {
        "email": "vertour@gmail.com",
        "phone": "+7 (978) 123 36 69",
        "password": "dbkmZV13",
        "payment": "532 руб."
    }
};

const PersonalData = (props) => {
    const {
        formFields,
        handleSubmit,
        pristine,
        submitting,
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
            <form onSubmit={handleSubmit} initialvalues={getInitialValues}>
                {fields}
                <SubmitBtn
                    id={'subBtn'}
                    disabled={pristine || submitting}
                />
            </form>
        </PersonalDataWrapper>
    )
};

const mapStateToProps = (state, ownProps) => ({
    form: ownProps.formName,
});

export default compose(
    connect(mapStateToProps),
    reduxForm({ validate }),
)(PersonalData);
