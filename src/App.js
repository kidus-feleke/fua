import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/HomePage.component';
import {Routes, Route }  from "react-router-dom";
import ShopPage from './pages/Shop/Shop.component';
 import Header from './components/Header/Header.component';

function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
           <Route  path='/' element={<HomePage />} />  
           <Route path='/shop' element={<ShopPage />} />
           
        </Routes> 
    </div>
  );
}

export default App;
