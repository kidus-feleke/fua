import React from "react";
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { ClearCartItems,AddItem,RemoveCartItem} from "../../redux/Cart/CartSlice";

const CheckOutItem=({cartItem,ClearCartItem,AddItem,RemoveCartItem})=>{
   const  {name,price,imageUrl,quantity}=cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={()=>RemoveCartItem(cartItem)} > &#10094; </div>
        <span className="value">{quantity}</span> 
        <div className="arrow" onClick={()=>AddItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>ClearCartItem(cartItem)}>&#10005;</span>
    </div>
);}
const mapDispatchToProps=(dispatch)=>({
    ClearCartItem:item=>dispatch(ClearCartItems(item)),
    AddItem:item=>dispatch(AddItem(item)),
    RemoveCartItem:item=>dispatch(RemoveCartItem(item))
})

export default connect(null,mapDispatchToProps) (CheckOutItem);