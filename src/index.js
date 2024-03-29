import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './redux/store';


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render( 
   <Provider store={store}>
     <BrowserRouter> 
     <PersistGate loading={null} persistor={persistor}>
     <App />
     </PersistGate>
     </BrowserRouter>
   </Provider>
     
   
 );



