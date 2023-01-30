import { createSlice } from "@reduxjs/toolkit"
import { addItemToCart } from "./cart.utils"

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
            }
        }
    }
)
export default CartSlice.reducer;
export const {toggleHidden,AddItem}=CartSlice.actions;