import React,{useState} from 'react';
import {Button} from '../../components/button';
import {ButtonContainer,ErrorText,Title} from './styles';
import OTPInput from '../../components/otp-input';


interface Props {
    onChange?(value : string): void;
    error?: string | null;
}

export const Confirm : React.FC<Props> = ({onChange,error}) => {
    const [value,setValue] = useState('');



    return (
        <React.Fragment>
            <Title>Код подтверждения</Title>
            <OTPInput length={6} onChange={(str) => {
                setValue(str);
            }}/>
            { <ErrorText>{error}</ErrorText>}
            <ButtonContainer>
                <Button  onClick={()=>{
                    if(value.length === 6 && typeof onChange === 'function') {
                        onChange(value);
                    }
                }}>Подтвердить</Button>
            </ButtonContainer>
        </React.Fragment>
        
    );
} 