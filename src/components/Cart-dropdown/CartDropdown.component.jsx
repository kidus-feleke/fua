import React from "react";
 import CustomButton from "../Custom-Button/Custom-button.component";

 import '../Cart-dropdown/CartDropdown.styles.scss'

 const CartDropdown=()=>(
    <div className="cartDropdown">
        <div className="cartItem" />
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
 )
 export default CartDropdown;