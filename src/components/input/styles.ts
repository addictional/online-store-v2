import styled from 'styled-components';
import {Field} from 'formik'

export const DefaultInput = styled.input`
    ${({theme}) => `
        width: calc(100% - 40px);
        border: 1px solid ${theme.colors.main};
        padding: 0 20px;
        border-radius: 35px;
        line-height: 40px;
        font-size: 14px;
        &:placeholder {
            color: ${theme.colors.placeHolder}
        }
    `}
`;


export const DefaultFormickField = styled(Field)`
    ${({theme}) => `
        width: calc(100% - 40px);
        border: 1px solid ${theme.colors.main};
        padding: 0 20px;
        border-radius: 35px;
        line-height: 40px;
        font-size: 14px;
        &:placeholder {
            color: ${theme.colors.placeHolder}
        }
    `}
`;


interface FormickFieldContainerProps {
    error? : string;
}

export const FormickFieldAuth = styled(Field)`
    ${({theme : {colors,min,breakpoints}}) => `
        width: calc(100% - 40px);
        padding: 0 20px;
        border-radius: 8px;
        line-height: 40px;
        font-size: 14px;
        background-color: #f3f3f4;
        border: 1px solid transparent;
        transition: background-color 200ms, outline 200ms ease, color 200ms ease, box-shadow 200ms ease,border-color 200ms ease;
        outline: none;
        box-shadow: 0 0 0 4px transparent;
        &:focus {
            border: 1px solid rgba(131,111,224,0.4);
            background-color: ${colors.white};
            box-shadow: 0 0 0 4px rgba(131,111,224,0.1);
        }
        &:placeholder {
            color: ${colors.placeHolder}
        }
        ${min(breakpoints.hd)} {
            font-size: 20px;
            line-height: 50px;
        }
    `}
`;

export const Label = styled.label`
    ${({theme: {colors,min,breakpoints}}) => `    
        line-height: 40px;
        font-size: 15px;
        ${min(breakpoints.hd)} {
            font-size: 20px;
        }
    `}
`

interface FormickFieldContainerProps {
    error? : string;
}
export const FormickFieldContainer = styled.div<FormickFieldContainerProps>`
    ${({theme : {colors,min,breakpoints},error}) => `
        position: relative;
        ${error && `
            & > input {
                border-color:rgb(255, 87, 117);
                &:focus {
                    border-color:rgb(255, 87, 117);
                    box-shadow: none;
                }
            }
        `}
    `}
`;

export const FieldError = styled.span`
    ${({theme: {colors,min,breakpoints}}) => `
        position: absolute;
        width: calc(100% - 40px);
        padding: 0 20px;
        font-size: 14px;
        line-height: 20px;
        color: ${colors.white};
        background-color: rgb(255, 87, 117);
        border: 1px solid rgb(255, 87, 117);
        bottom: -12px;
        border-radius: 0 0 10px 10px;
        z-index: 2;
        &:before {
            content: "";
            position: absolute;
            border-width: 0px 6px 10.7px 0px;
            border-color: transparent transparent rgb(255, 87, 117);
            border-style: solid;
            top: -12px;
            left: -1px;
        }
        &:after {
            content: "";
            position: absolute;
            border-width: 0px 0px 10.7px 6px;
            border-color: transparent transparent rgb(255, 87, 117);
            border-style: solid;
            top: -12px;
            right: -1px;
        }
        ${min(breakpoints.hd)} {
            font-size: 18px;
            line-height: 22px;
            bottom: -14px;
        }
    `}
`;