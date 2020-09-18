import React, { useContext } from 'react';
import MainContext from '../../services/main_context';
import {
    Switch,
    Route,
    Redirect,
    useRouteMatch,
    useHistory
} from "react-router-dom";

import { SignOut} from './signout';
import {Registration} from './registration';
import {Confirm} from './confirm';
import {Login} from './login';


const AuthRouter : React.FC = () => {
    const {AUTH_STATUS} = useContext(MainContext);
    const {path} = useRouteMatch();
    const history = useHistory();
    return (
        <React.Fragment>
            {AUTH_STATUS === 'AUTHORIZED' ? (
                <Switch>
                    <Route path={`${path}/signout`} render={()=>{
                        return  <SignOut/>;
                    }}/> 
                    <Redirect to={`${path}/signout`}/>
                </Switch>
            ) : (
                <Switch>
                    <Route path={`${path}/signin`}  render={()=>{
                        return  <Login path={path} onSignIn={()=>{
                            history.push('/')
                        }}/>
                    }}/>
                    <Route path={`${path}/signup`} render={()=>{
                        return  <Registration path={path}/>
                    }}/>

                    <Route path={`${path}/confirm`} render={()=>{
                        return  <Confirm/>
                    }}/>
                    <Redirect to={`${path}/signin`}/>
                </Switch>
            )}
        </React.Fragment>
    );
}

export default AuthRouter;