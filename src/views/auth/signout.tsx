import React,{useContext} from 'react';
import {Button} from '../../components/button';
import {ButtonContainer,Title} from './styles';
import MainContext from '../../services/main_context';


export const SignOut : React.FC = () => {
    const {signOut} = useContext(MainContext);
    return (
        <React.Fragment>
            <Title>Выйти</Title>
            <ButtonContainer column>
                <Button onClick={async ()=>{
                    await signOut();
                }} type='submit'>Выйти</Button>
            </ButtonContainer>
             
        </React.Fragment>
    );
} 