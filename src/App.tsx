import React, { useEffect, useRef, useState,useContext } from 'react';
import MainContext from './services/main_context';
import {ThemeProvider} from 'styled-components';
import {MainTheme} from './theme';
import AuthView from './views/auth';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {ApolloProvider,ApolloClient,NormalizedCacheObject} from '@apollo/client';
import Loader from './components/loader';






// const query = gql`
//    {
//     listProducts {
//       items {
//         id
//         name
//       }
//     }
//   }
// `;

function App() {
  const client = useRef(null as null | ApolloClient<NormalizedCacheObject>);
  const {AUTH_STATUS,checkAuthStatus} = useContext(MainContext);
  const [isLoading,setLoad] = useState(true);
  // const {error,loading,data} =  useQuery(query);
  useEffect(()=>{
    checkAuthStatus().then(c => {
      client.current = c;
      setLoad(false);
    });
  },[])
  return (
    <Router>
      <ThemeProvider theme={MainTheme}>
      {isLoading ? <Loader opacity={1}/> : <React.Fragment>
          <ApolloProvider client={client.current as ApolloClient<NormalizedCacheObject>}>
            <Switch>
              {AUTH_STATUS === 'LOADING' || AUTH_STATUS === 'NOT AUTHORIZED' ? (
                <React.Fragment>
                  <Route  path="/auth" >
                    <AuthView/>
                  </Route>  
                  <Route render={({location : {pathname}}) => {
                    if(pathname.match(/(\/auth)/)) {
                      return;
                    }
                    return <Redirect to="/auth/signin/"/>
                  }}>
                  </Route>
                </React.Fragment>
              ): (
                <React.Fragment>
                  <Route path="/auth">
                    <AuthView/>
                  </Route>
                  <Route path="/" exact>
                    <p>Home</p>
                  </Route>
                </React.Fragment>
              )}
            </Switch>
          </ApolloProvider>
        </React.Fragment>}
      </ThemeProvider>
    </Router>
  );
}

export default App;
