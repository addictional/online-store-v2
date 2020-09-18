import {createContext,useState,useCallback,useEffect} from 'react';
import {Auth} from 'aws-amplify';
import awsconfig from '../aws-exports';
import {CognitoUser,ISignUpResult} from 'amazon-cognito-identity-js';
import {ApolloClient,InMemoryCache,NormalizedCacheObject} from '@apollo/client';

type AUTH = 'AUTHORIZED' | 'NOT AUTHORIZED' | 'LOADING';
export interface SignUpInput {
    email: string;
    phone: string;
    password: string;
    name: string;
}
export interface IMainContext {
    AUTH_STATUS : AUTH;
    width: number;
    checkAuthStatus() : Promise<ApolloClient<NormalizedCacheObject>>
    signIn(username: string,password: string): void;
    signOut(): void; 
    signUp(input : SignUpInput): Promise<ISignUpResult>;
    confirmSignUp(username : string,code : string): Promise<void>;
}


const MainContext = createContext<IMainContext>(null as any);


export const useMainContext = () : IMainContext => {
    const [AUTH_STATUS,setAuthStatus] = useState('LOADING' as AUTH);
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const resizeHandler = ()=>{
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',resizeHandler)
        return () => window.removeEventListener('resize',resizeHandler);
    },[]);

    const checkAuthStatus = useCallback(async ()=>{
        setAuthStatus('LOADING');
        let status : AUTH; 
        let token: string;
        try {
            token = (await Auth.currentSession()).getIdToken().getJwtToken();
            status = 'AUTHORIZED';
        } catch(e) {
            token = (await Auth.currentCredentials()).sessionToken;
            status = 'NOT AUTHORIZED';
        }
        const client = new ApolloClient({
            uri: awsconfig.aws_appsync_graphqlEndpoint,
            headers: {
            'authorization': token
            },
            cache: new InMemoryCache()
        })
        setAuthStatus(status);
        return client;
    },[]);

    const signIn = useCallback(async (username: string,password: string)=>{
        try {
            setAuthStatus('LOADING');
            const user : CognitoUser  = await Auth.signIn(username, password);
            console.log(user);
            const TOKEN = user.getSignInUserSession()?.getIdToken().getJwtToken();
            setAuthStatus('AUTHORIZED');
            return user;
        } catch (error) {
            setAuthStatus('NOT AUTHORIZED');
            throw error;
        }
    },[]);
    const signOut = useCallback(async ()=>{
        try {
            setAuthStatus('LOADING');
            await Auth.signOut();
            setAuthStatus('NOT AUTHORIZED');
        } catch (error) {
            console.log('error signing out: ', error);
        }
    },[]);

    const signUp = useCallback(async ({email,phone,password,name}: SignUpInput)=> {
        try {
            setAuthStatus('LOADING');
            const data = await Auth.signUp({password,username : email,attributes: {name}});
            setAuthStatus('NOT AUTHORIZED');
            return data;
        } catch (err){
            setAuthStatus('NOT AUTHORIZED');
            throw err;
        }
    },[]);

    const confirmSignUp = useCallback(async (username : string,code : string)=>{
        try {
            setAuthStatus('LOADING');
            await Auth.confirmSignUp(username, code);
            setAuthStatus('NOT AUTHORIZED');
        } catch (error) {
            setAuthStatus('NOT AUTHORIZED');
            throw error;
        }
    },[])

    return {
        AUTH_STATUS,
        checkAuthStatus,
        signIn,
        signOut,
        signUp,
        confirmSignUp,
        width
    }
}

export default MainContext;
