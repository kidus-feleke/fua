import React from "react";
import { connect } from "react-redux";
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import { toggleHidden } from "../../redux/Cart/CartSlice";
import { selectCartItemCount } from "../../redux/Cart/Cart.selectors";
import '../Cart-icon/cart-icon.styles.scss';
import { createStructuredSelector } from "reselect";

const CartIcon=({toggleHidden,itemCount})=>{
    
    return (
    <div className="Cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className='shoppingIcon'/>
        <span className="item-count">{itemCount}</span>
    </div>
    )
}
const mapStateToProps=createStructuredSelector(
   {
     itemCount: selectCartItemCount
}
)
const mapDispatchToProps=(dispatch)=>(
    {toggleHidden:()=>dispatch(toggleHidden())}
)
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);