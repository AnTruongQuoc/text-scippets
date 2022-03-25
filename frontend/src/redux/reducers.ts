import { combineReducers } from "redux";
import userLogin from "redux/slices/login"

import { store } from "./store";


const rootReducer = combineReducers({
    userLogin
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;