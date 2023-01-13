//import { applyMiddleware } from "redux";
import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import  userReducer  from './user/userSlice';
//import logger from "redux-logger";


const store= configureStore({
    reducer:{
       user:userReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}).concat(logger)
    
    
})

export default store;