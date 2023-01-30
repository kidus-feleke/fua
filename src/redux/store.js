//import { applyMiddleware } from "redux";
import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import  userReducer  from './user/userSlice';
import CartReducer from './Cart/CartSlice'
//import logger from "redux-logger";


const store= configureStore({
    reducer:{
       user:userReducer,
       cart:CartReducer
    },
    
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}).concat(logger)
    
    
})

export default store;