import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/HomePage.component';
import {Routes, Route }  from "react-router-dom";
import ShopPage from './pages/Shop/Shop.component';
 import Header from './components/Header/Header.component';
 import SignInAndSignUp from './pages/Sign-in-and-sign-Up/Sign-in-and-sign-up.component';

function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
           <Route  path='/' element={<HomePage />} />  
           <Route path='/shop' element={<ShopPage />} />
           <Route path='/signin' element={<SignInAndSignUp />} />
           
        </Routes> 
    </div>
  );
}

export default App;
