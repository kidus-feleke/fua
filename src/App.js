import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/HomePage.component';
import {Routes, Route }  from "react-router-dom";
import ShopPage from './pages/Shop/Shop.component';
 import Header from './components/Header/Header.component';
 import SignInAndSignUp from './pages/Sign-in-and-sign-Up/Sign-in-and-sign-up.component';
 import {auth, createdUserProfileDocument} from './Firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null,
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
    
      if (userAuth){
        const userRef= await createdUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState(
            {
            currentUser:{
                id:snapShot.id,
                ...snapShot.data()
            }
          }
          );
      });
      }else
      this.setState({currentUser: userAuth})
      
    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
     return (
    <div className='App'>
        <Header  currentUser={this.state.currentUser}/>
        <Routes>
           <Route  path='/' element={<HomePage />} />  
           <Route path='/shop' element={<ShopPage />} />
           <Route path='/signin' element={<SignInAndSignUp />} />
           
        </Routes> 
    </div>
  );
  }
 
}

export default App;
