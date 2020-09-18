import {Auth} from 'aws-amplify';

export interface SignUpParams {
    email: string;
    phone: string;
    password: string;
    name: string;
}

export async function signup({email,phone,password,name} : SignUpParams) {
    try {
        const data = await Auth.signUp({password,username : email,attributes: {name}})
        return data;
    } catch (err){
        throw err;
    }
}

export async function confirmSignUp(username : string,code : string) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        throw error;
    }
}


export async function signIn(username : string, password: string) {
    try {
        const user = await Auth.signIn(username, password);
        return user;
    } catch (error) {
        throw error;
    }
}


export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

