
import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    currentUser: null
}

  const userSlice= createSlice({
     name:'user', 
     initialState,
     reducers:{
         setCurrentUser:(state, action)=>{
             state.currentUser=action.payload
         }
     }
  })
export default userSlice.reducer;
export const {setCurrentUser}=userSlice.actions