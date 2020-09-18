import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import * as serviceWorker from './serviceWorker';
import MainContext,{useMainContext} from './services/main_context';

const MainShit : React.FC = ()=>  {
  const сtx = useMainContext();
  return (
    <MainContext.Provider value={сtx}>
          <App/>
      </MainContext.Provider>
  )
}

Amplify.configure(awsconfig);
ReactDOM.render(
  <React.StrictMode>
        <MainShit/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





