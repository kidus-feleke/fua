import { createSlice } from "@reduxjs/toolkit"

const initialState={
    hidden:true,
}

const CartSlice= createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            toggleHidden:(state)=>{
                state.hidden=!state.hidden
            },
        }
    }
)
export default CartSlice.reducer;
export const {toggleHidden}=CartSlice.actions;