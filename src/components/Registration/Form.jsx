import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { validate } from '../../utils/formControl/formValidate';

const FormTitle = styled.div`
    width: 300px;
    text-align: left;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 23px;
    color: #343434;
    margin-bottom: 15px;
`;

const InputNameBlock = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
`;

const FirstNameInput = styled.input`
    border: ${props =>(props.hasError ? '2px solid #DC143C' : '1px solid #343434')};
    box-sizing: border-box;
    border-radius: 5px;
    width: 131px;
    height: 40px;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    padding-left: 20px;
    ::-moz-placeholder { color: ${props =>(props.hasError ? '#DC143C' : '#343434')}; };
    ::-webkit-input-placeholder { color: ${props =>(props.hasError ? '#DC143C' : '#343434')}; };
`;

const SecondNameInput = styled.input`
    border: ${props =>(props.hasError ? '2px solid #DC143C' : '1px solid #343434')};
    box-sizing: border-box;
    border-radius: 5px;
    width: 160px;
    height: 40px;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    padding-left: 20px;
    ::-moz-placeholder { color: ${props =>(props.hasError ? '#DC143C' : '#343434')}; };
    ::-webkit-input-placeholder { color: ${props =>(props.hasError ? '#DC143C' : '#343434')}; };
`;


const InputComponent = styled.input`
    width: 300px;
    height: 40px;
    border: ${props =>(props.hasError ? '2px solid #DC143C' : '1px solid #343434')};
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: ${props =>(props.activeError ? '0' : '15px')};
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    padding-left: 20px;
    ::-moz-placeholder { color: ${props =>(props.hasError ? '#DC143C' : '#343434')}; };
    ::-webkit-input-placeholder { color: ${props =>(props.hasError ? '#DC143C' : '#343434')}; };
`;

const CheckBoxWrapper = styled.div`
    width: 300px;
    height: 26px;
    box-sizing: border-box;
    margin-bottom: 15px;
`;

const CheckboxInput = styled.input`
    display: none;
    
   :checked + label::before {
      background: #0eb8cc;
      -webkit-animation: click-wave .5s;
              animation: click-wave .5s;
    }
`;

const CheckboxInputLabel = styled.label`
  margin: 0  0  0 30px;
  width: 240px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 13px;
  text-decoration-line: underline;
  text-align: left;
  color: #343434;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  
  ::before {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      background: #BDBDBD;
      position: absolute;
      left: -30px;
      cursor: pointer;
      top: 50%;
      -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
              transform: translateY(-50%);
  }
`;

const RegBtn = styled.button`
    width: 150px;
    height: 35px;
    background: #840318;
    border-radius: 5px;
    color: #FFFFFF;
    border: 0 solid transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    box-sizing: border-box;
    padding: 10px 23px 10px 22px;
    cursor: pointer;
`;

const BtnBlock = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const EnterBtn = styled.button`
    width: 132px;
    height: 35px;
    background: #840318;
    border-radius: 5px;
    border: 0 solid transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    box-sizing: border-box;
    padding: 10px 46px 10px 45px;
    cursor: pointer;
`;

const PassBtn = styled.button`
    width: 162px;
    height: 35px;
    background: rgba(0, 0, 0, 0.9);;
    border-radius: 5px;
    border: 0 solid transparent;
    color: #FFFFFF;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    box-sizing: border-box;
    padding: 10px 11px 10px 17px;
    cursor: pointer
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;


const TipBlock = styled.div`
  display: ${props =>(props.activeField ? 'none' : 'block')};
  margin-bottom: 10px;
  margin-top: 5px;
  color: #DC143C;
  font-weight: 300;
  font-size: 13px;
  line-height: 11px;
`;

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error}
                     }) => {
    const hasError = touched && error;
    const placeholder = ((hasError)&&(/Укажите/.test(error)||/Введите/.test(error)))? error:label;


    switch (label) {
        case 'Имя':
            return (
                <FirstNameInput
                    {...input} hasError={hasError} placeholder={placeholder} type={type}/>
            );

        case 'Фамилия':
            return (
                <SecondNameInput
                    {...input} hasError={hasError} placeholder={placeholder} type={type}/>
            );

        default:
            return (
                <div>
                    <InputComponent
                        {...input} hasError={hasError} activeError={hasError && (placeholder !== error)}
                        placeholder={placeholder} type={type}/>
                    {hasError && (
                        <TipBlock activeField={(placeholder === error)}>{error}</TipBlock>
                    )}
                </div>
            );
    }
};

const renderCheckboxField = ({ input, name, type, id, label}) => (
    <CheckBoxWrapper>
        <CheckboxInput
            {...input} name={name} type={type} id={id}/>
        <CheckboxInputLabel htmlFor={id}>
            {label}
        </CheckboxInputLabel>
    </CheckBoxWrapper>
);

const FormBlock = (props) => {
    const {
        formName,
        title,
        fields,
        checkbox,
        btnComponents,
        handleSubmit,
        submitting,
        error
    } = props;


    if(formName === 'regForm'){
        return(
            <Form
                onSubmit={handleSubmit}>
                <FormTitle>{title}</FormTitle>
                <InputNameBlock>
                    <Field
                        name={fields[0].name}
                        label={fields[0].label}
                        type={fields[0].type}
                        normalize={fields[0].normalize[0]}
                        component={renderField}
                    />

                    <Field
                        name={fields[1].name}
                        label={fields[1].label}
                        type={fields[1].type}
                        normalize={fields[1].normalize[0]}
                        component={renderField}
                    />
                </InputNameBlock>
                {
                    fields.slice(2).map((field, index) => {
                        return(
                            <Field
                                key={index}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                normalize={field.normalize.length > 0 ? field.normalize[0] : undefined}
                                component={renderField}
                            />
                        )
                    })
                }
                <Field
                    name={checkbox.name}
                    type={checkbox.type}
                    id={checkbox.id}
                    label={checkbox.label}
                    component={renderCheckboxField}
                />

                <RegBtn disabled={submitting}>{btnComponents[0]}</RegBtn>

                {
                    error &&
                    <TipBlock>
                        {error}
                    </TipBlock>
                }
            </Form>
        )
    }else{
        return(
            <Form
                onSubmit={handleSubmit}
            >
                <FormTitle>{title}</FormTitle>
                {
                    fields.map((field, index) => {
                        return(
                            <Field
                                key={index}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                normalize={undefined}
                                component={renderField}
                            />
                        )
                    })
                }
                <BtnBlock>
                    <EnterBtn disabled={submitting}>{btnComponents[0]}</EnterBtn>
                    <PassBtn>{btnComponents[1]}</PassBtn>
                </BtnBlock>
                {
                    error &&
                    <TipBlock>
                        {error}
                    </TipBlock>
                }
            </Form>
        )
    }
};

const mapStateToProps = (state, ownProps) => ({
    form: ownProps.formName,
});

export default compose(
    connect(mapStateToProps),
    reduxForm({ validate }),
)(FormBlock);
