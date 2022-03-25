import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin } from "../../types/LoginType";

const initialState: UserLogin = {
    email: "",
    isLogin: false,
    isLoading: false,
    error: "",
}

// Create user login slice
const userLoginSlice = createSlice({
    name: "userLogin",
    initialState,
    reducers: {
        logout: (state: UserLogin) => {
            state.email = "";
            state.isLogin = false;
            state.isLoading = false;
            state.error = "";
        }
    },
    extraReducers: {}
});

export const { logout } = userLoginSlice.actions;
export default userLoginSlice.reducer;