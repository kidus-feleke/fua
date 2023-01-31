import { createSlice } from "@reduxjs/toolkit"
import { addItemToCart,RemoveItemFromCart } from "./cart.utils"

const initialState={
    hidden:true,
    cartItems:[]
}

const CartSlice= createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            toggleHidden:(state)=>{
                state.hidden=!state.hidden
            },
            AddItem:(state,action)=>{
                
                state.cartItems=addItemToCart(state.cartItems,action.payload)
            },
            RemoveCartItem:(state,action)=>{
                state.cartItems=RemoveItemFromCart(state.cartItems,action.payload)
            },
            ClearCartItems:(state,action)=>{
               state.cartItems= state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id);
            }
        }
    }
)
export default CartSlice.reducer;
export const {toggleHidden,AddItem, ClearCartItems,RemoveCartItem}=CartSlice.actions;