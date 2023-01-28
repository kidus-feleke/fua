import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/HomePage.component';
import {Routes, Route, Navigate }  from "react-router-dom";
import ShopPage from './pages/Shop/Shop.component';
 import Header from './components/Header/Header.component';
 import SignInAndSignUp from './pages/Sign-in-and-sign-Up/Sign-in-and-sign-up.component';
 import {auth, createdUserProfileDocument} from './Firebase/firebase.utils'
 import { setCurrentUser } from './redux/user/userSlice';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props

    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{
    
      if (userAuth){
        const userRef= await createdUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
         setCurrentUser({
             id:snapShot.id,
                ...snapShot.data()
          })
            });
      }else
      setCurrentUser(null)
    })
  }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
     return (
    <div className='App'>
        <Header />
        <Routes>
           <Route  path='/' element={<HomePage />} />  
           <Route path='/shop' element={<ShopPage />} />
           <Route exact path='/signin' element={this.props.currentUser ?(<Navigate to='/'/> ):(<SignInAndSignUp />)}/>
        </Routes> 
    </div>
  );
  } 
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})
 const mapDispatchToProps=dispatch=>({
   setCurrentUser:user=>dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
