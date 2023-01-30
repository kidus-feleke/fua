import React from "react";
import { connect } from "react-redux";
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import { toggleHidden } from "../../redux/Cart/CartSlice";
import '../Cart-icon/cart-icon.styles.scss';

const CartIcon=({toggleHidden})=>{
    
    return (
    <div className="Cart-icon" onClick={toggleHidden}>
        <ShoppingIcon className='shoppingIcon'/>
        <span className="item-count">0</span>
    </div>
    )
}
const mapDispatchToProps=(dispatch)=>(
    {toggleHidden:()=>dispatch(toggleHidden())}
)
export default connect(null,mapDispatchToProps)(CartIcon);