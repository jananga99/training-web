import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "../pages/SignInForm/userSlice";
import cityReducer from "./citySlice";

const rootReducer = combineReducers({
    city: cityReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
