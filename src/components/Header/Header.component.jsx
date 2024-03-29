import React from "react";
import { Link } from "react-router-dom";
import './Header.styles.scss';
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import { auth } from "../../Firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../Cart-icon/cart-icon.component";
import CartDropdown from "../Cart-dropdown/CartDropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/Cart/Cart.selectors";
import { createStructuredSelector } from 'reselect';


const Header=({currentUser, hidden})=>{
   
    return(
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"/>
        </Link>
    <div className="options">
        <Link className="option" to='/shop'>
            Shop
        </Link>
        <Link className="option" to='/contact'>
            Contact
        </Link>
            {
            currentUser ?
            <div className="option" onClick={()=> auth.signOut()}>SIGN OUT </div>
            :
            <Link className="option" to='/signIn'>SIGN IN </Link>
            }
            <CartIcon />
    </div>
    {
        hidden ? null :
    <CartDropdown />
    }
    </div>
)}
 const mapStateToProps= createStructuredSelector({
     currentUser: selectCurrentUser,
     hidden: selectCartHidden
 });

   
export default  connect(mapStateToProps)(Header);