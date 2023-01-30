import React from "react";
 import CustomButton from "../Custom-Button/Custom-button.component";
 import { connect} from "react-redux";
 import { selectCartItems } from "../../redux/Cart/Cart.selectors";
import CartItem from "../Cart-item/Cart-item.component";
 import '../Cart-dropdown/CartDropdown.styles.scss'
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleHidden } from "../../redux/Cart/CartSlice";


 const CartDropdown=({cartItems, dispatch})=>{
   const navigate=useNavigate()
   
   return(
    <div className="cartDropdown">
        <div className="cartItems" >
   { cartItems.length ?
   ( cartItems.map(cartitem=> <CartItem  key={cartitem.id} item={cartitem}/>)) 
   : <span className="empty-message">Your Cart Is Empty </span>}
        </div>
        <CustomButton onClick={()=>{navigate('/Checkout');
        dispatch(toggleHidden());
        }}> GO TO CHECKOUT</CustomButton>
    </div>
 )}

  const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
 })

 export default connect(mapStateToProps) (CartDropdown);