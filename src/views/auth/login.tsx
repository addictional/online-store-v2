import React,{useState,useEffect,useRef,useContext} from 'react';
import {FormickFieldAuth,Label} from '../../components/input';
import {Button} from '../../components/button';
import {Link} from 'react-router-dom';
import {ButtonContainer,ErrorText,Title,Propose,} from './styles';
import {Formik,Form} from 'formik';
import MainContext from '../../services/main_context';
interface FormFields {
    username: string;
    password: string;
}

interface Props {
    path : string;
    onSignIn?(): void;
}

export const Login : React.FC<Props> = ({path,onSignIn}) => {
    const [error,setError] = useState(null);
    const firstInputRef = useRef(null as null | HTMLInputElement);
    const {signIn,width} = useContext(MainContext);
    useEffect(()=>{
        if(firstInputRef.current && width > 768) {
            firstInputRef.current.focus();
        }
    },[firstInputRef,width])

    const handleSubmit = async ({password,username} : FormFields) => {
        try {
            await signIn(username,password);
            if(typeof onSignIn === 'function') {
                onSignIn();
            }
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <React.Fragment>
            <Title>Авторизация</Title>
            <Formik initialValues={{
                username: '',
                password: '',
            }} onSubmit={handleSubmit} >
             <Form>
                <Label htmlFor='login'>Электронная почта или телефон*</Label>
                <FormickFieldAuth innerRef={firstInputRef} id="login" name='username' autoComplete="email" type='email'/>
                <Label htmlFor='password'>Пароль*</Label>
                <FormickFieldAuth id="password" name='password'  type='password' autoComplete='current-password'/>
                { <ErrorText>{error}</ErrorText>}
                <ButtonContainer column>
                    <Button type='submit'>Войти</Button>
                </ButtonContainer>
                <Propose>Нету аккаунта? <Link to={`${path}/signup`}>Зарегистрироваться</Link></Propose>
             </Form>   
            </Formik>
        </React.Fragment>
    );
} 