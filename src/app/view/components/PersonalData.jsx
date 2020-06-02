import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

const PersonalDataWrapper = styled.div`
    grid-area: personal_data;
`;

const InputFieldBlock = styled.div`
    width: 570px;
    height: 50px;
    border: 1px solid #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 14px;
    margin-bottom: 16px;
`;

const InputFieldLabel = styled.label`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
`;

const FormField = styled.input`
    background-color: transparent;
    border: 0 solid transparent;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    color: #FFFFFF;
    text-align: center;
`;

const SubmitBtnLabel = styled.label`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    text-align: right;
    color: #6D6D6D;
    cursor: pointer;
`;

const SubmitBtn = styled.button`
    display: none;
`;

const TipBlock = styled.div`
  display: inline-block;
  position: relative;
  background: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  height: 0;
  width: 1px;
  
  @media (max-width: 575.98px) {
    display: block;
    position: relative;
    margin: 15px 0;
    height: auto;
    width: 100%;
  }
`;

const TipBlockInside = styled.div`
  @media (min-width: 576px) {
      display: ${props =>(props.activeField ? 'none' : 'block')};
      position: absolute;
      z-index: 9998;
      top: 0;
      left: 100%;
      background: #F08080;
      border-radius: 3px;
      border: 1px solid #DC143C;
      box-shadow: 5px 5px 0.5em -0.1em rgba(0, 0, 6, 0.5);
      text-align: left;
      color: #FFFFFF;
      font-size: 1em;
      opacity: .9;
      cursor: default;
      padding: 5px;
      width: 350px;
      height: auto;
      box-sizing: border-box;
      margin: -55px 0 5px 325px;
      -webkit-animation: fadeIn 2s;
      animation: fadeIn 2s
      
      ::before {
          border-width: 9px 8px 9px 0;
          border-color: transparent #DC143C transparent transparent;
          top: 13px;
          left: -9px;
      }
      
      ::after {
          border-width: 7px 7px 7px 0;
          border-color: transparent #F08080 transparent transparent;
          top: 15px;
          left: -7px;
      }
      
      ::before,
      ::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
      }
  }
  
  @media (max-width: 575.98px) {
      position: relative;
      display: ${props =>(props.activeField ? 'none' : 'block')};
      top: 0;
      left: 0;
      background: #F08080;
      border-radius: 3px;
      box-shadow: 5px 5px 0.5em -0.1em rgba(0, 0, 6, 0.5);
      text-align: left;
      color: #FFFFFF;
      font-size: 0.8em;
      opacity: .9;
      cursor: default;
      padding: 5px;
      width: 100%;
      min-height: 35px;
      height: auto;
      -webkit-animation: fadeIn 2s;
      animation: fadeIn 2s
      
      ::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border: 15px solid transparent; border-bottom: 15px solid #F08080;
          top: -30px;
          left: 50%;
      }
  }

  @-webkit-keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
  }
`;

const PersonalData = (props) => {
    const renderField = () => ({
                       input,
                       placeholder,
                       type,
                       meta: {touched, active, error}
                   }) => {
        const hasError = touched && error;

        return (
            <div>
                <FormField
                    {...input} hasError={hasError} placeholder={placeholder} type={type}/>
                {hasError && (
                    <TipBlock>
                        <TipBlockInside activeField={active}>{error}</TipBlockInside>
                    </TipBlock>
                )}

            </div>
        );
    };

    const { formFields } = props;

    const fields = formFields.map((field, index) => {
        return(
            <InputFieldBlock key={index}>
                <InputFieldLabel>{field.label}</InputFieldLabel>

                <Field
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    normalize={field.normalize.length > 0 ? field.normalize[0] : undefined}
                    component={renderField}
                    input = {{disabled: field.disabled}}
                />

                <SubmitBtnLabel>{field.btnLabel}</SubmitBtnLabel>
            </InputFieldBlock>
        )
    });

    return (
        <PersonalDataWrapper>
            {fields}
            <SubmitBtn/>
        </PersonalDataWrapper>
    )
};

export default PersonalData;