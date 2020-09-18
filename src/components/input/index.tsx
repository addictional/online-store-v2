import React from 'react';
import {
    DefaultInput,
    DefaultFormickField,
    FormickFieldAuth,
    FormickFieldContainer,
    FieldError,
    Label
} from './styles';

interface DefaultFormickFieldWithErrorProps {
    error?: string;
}

export const ErrorWrapper : React.FC<DefaultFormickFieldWithErrorProps> = ({error,children}) => {
    return (
        <FormickFieldContainer error={error}>
            {children}
            {error && <FieldError>{error}</FieldError>}
        </FormickFieldContainer>
    )
}


export {
    DefaultInput,
    DefaultFormickField,
    FormickFieldAuth,
    Label,
};
