import React from "react";
 import CustomButton from "../Custom-Button/Custom-button.component";
 import { connect, Connect } from "react-redux";
import CartItem from "../Cart-item/Cart-item.component";
 import '../Cart-dropdown/CartDropdown.styles.scss'

 const CartDropdown=({cartItems})=>(
    <div className="cartDropdown">
        <div className="cartItems" >
           { cartItems.map(cartitem=> <CartItem  key={cartitem.id} item={cartitem}/>)}
        </div>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
 )
  const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
 })
 export default connect(mapStateToProps) (CartDropdown);