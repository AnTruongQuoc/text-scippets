import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLogin } from "../../types/LoginType";

const mockUser = [
    {
        email: 'truongquocan123@gmail.com',
        password: '123456',
    },
    {
        email: 'demo@yoo.com',
        password: '123456',
    }
]

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
        },
        demoLogin: (state: UserLogin, action: PayloadAction<{email: string, password: string}>) => {
            mockUser.forEach(user => {
                if (user.email === action.payload.email && user.password === action.payload.password) {
                    state.isLogin = true;
                }
            })
        }
    },
    extraReducers: {}
});

export const { logout, demoLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;