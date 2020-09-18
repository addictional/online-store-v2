import React,{useState,useRef,useEffect,useContext} from 'react';
import {
    FormickFieldAuth,
    Label,
    ErrorWrapper
} from '../../components/input';
import {Button} from '../../components/button';
import {
    ButtonContainer,
    ErrorText,
    Title,
    Propose
} from './styles';
import {Link,useHistory} from 'react-router-dom';
import {SignUpParams} from '../../services/cognito';
import {Formik,Form} from 'formik';
import {ISignUpResult} from 'amazon-cognito-identity-js';
import {Confirm} from './confirm';
import MainContext from '../../services/main_context';
import {validateEmail} from '../../utilities'

interface FormFields extends SignUpParams {
    password_repeat: string;
}

interface Props {
    path : string;
}

export const Registration : React.FC<Props> = ({path}) => {
    const [error,setError] = useState(null);
    const [user,setUser] = useState(null as null | ISignUpResult);
    const firstInputRef = useRef(null as null | HTMLInputElement);
    const {signUp,confirmSignUp,width} = useContext(MainContext);
    const history = useHistory();

    useEffect(()=>{
        if(firstInputRef.current && width > 768) {
            firstInputRef.current.focus();
        }
    },[firstInputRef,width])
    
    const handleSubmit = async (values : FormFields) => {
        try{
            const data  = await signUp(values);
            setUser(data);
        } catch(error) {
            setError(error.message);
        }
    }


    const handleOTP = async (value : string) => {
        try {
            const cognitoUser = user as ISignUpResult;
            await confirmSignUp(cognitoUser.user.getUsername(),value);
            history.push('/signin');
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <React.Fragment>
        {user ? <Confirm onChange={handleOTP} error={error}/> : (
            <React.Fragment>
                <Title>Регистрация</Title>
                <Formik initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    password_repeat: ''
                }} validate={({password,password_repeat,email})=>{
                    let error : any = {};
                    if(password && !password_repeat) {
                        error.password_repeat = 'Повторите пароль'
                    }
                    if(password && password_repeat && password !== password_repeat) {
                        error.password = 'Пароли не соответсвуют'
                        error.password_repeat = 'Пароли не соответсвуют'
                    }
                    if(password && password.length < 6) {
                        error.password = 'Минимальная длинная 6 символов'
                    }
                    if(email && !validateEmail(email)) {
                        error.email = "Некоректная электронная почта"
                    }
                    return error;
                }}
                 onSubmit={handleSubmit}>
                    {({errors,touched}) => (
                        <Form>
                            <Label htmlFor='username'>Имя*</Label>
                            <FormickFieldAuth type='name' innerRef={firstInputRef} id='username'  name='name'/>
                            <ErrorWrapper error={errors.email}>
                                <Label htmlFor='email'>Электронная почта*</Label>
                                <FormickFieldAuth id='email'  name='email'  type='email'/>
                            </ErrorWrapper>
                            <Label htmlFor='phone'>Телефон</Label>
                            <FormickFieldAuth id='phone' name='phone'  type='text'/>
                            <ErrorWrapper error={errors.password}>
                                <Label htmlFor='password'>Пароль*</Label>
                                <FormickFieldAuth autoComplete='new-password' id='password' name='password'  type='password'/>
                            </ErrorWrapper>
                            <ErrorWrapper error={errors.password_repeat}>
                                <Label htmlFor='password_repeat'>Повторите пароль*</Label>
                                <FormickFieldAuth required  id='password_repeat' name='password_repeat'  type='password'/>
                            </ErrorWrapper>
                            { <ErrorText>{error}</ErrorText>}
                            <ButtonContainer>
                                <Button type='submit'>Зарегистрироваться</Button>
                            </ButtonContainer>
                            <Propose right>Уже есть аккаунт? <Link to={`${path}/signin`}>Войти</Link></Propose>
                        </Form>
                    )}
                </Formik>
            </React.Fragment>
        )}
        </React.Fragment>
    );
} 