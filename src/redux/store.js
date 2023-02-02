//import { applyMiddleware } from "redux";
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore,persistReducer,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import  userReducer  from './user/userSlice';
import CartReducer from './Cart/CartSlice';
import thunk from "redux-thunk";

const persistConfig={
    key:'root',
    storage,
}
const rootReducer=combineReducers({
    user:userReducer,
    cart:CartReducer
});

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store= configureStore({
    reducer:persistedReducer,
    // middleware:[thunk]
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}).concat(logger)  
})
export const persistor=persistStore(store)

