import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { UserLogin } from "../../types/LoginType";

// Import Thunks
import { doLogin } from "./thunks/login-thunk";

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
    name: "",
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
    extraReducers: {
        [doLogin.pending.toString()]: (state: UserLogin) => {
            state.isLoading = true;
        },
        [doLogin.fulfilled.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            console.log(action.payload);
            state.email = action.payload.email;
            state.isLogin = true;
            state.isLoading = false;
        },
        [doLogin.rejected.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            state.error = action.payload.error;
            state.isLoading = false;
        }

    }
});

export const { logout, demoLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;