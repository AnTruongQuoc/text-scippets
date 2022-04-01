import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { UserLogin } from "../../types/LoginType";

// Import Thunks
import { doCheckMail, doLogin, doCheckCode } from "./thunks/login-thunk";

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
    isActive: false,
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
            localStorage.removeItem('token');
        },
        demoLogin: (state: UserLogin, action: PayloadAction<{email: string, password: string}>) => {
            mockUser.forEach(user => {
                if (user.email === action.payload.email && user.password === action.payload.password) {
                    state.isLogin = true;
                }
            })
        },
        demoSignupWithCode: (state: UserLogin, action: PayloadAction<{code: string}>) => {
            if(action.payload.code === 'cmcglobal'){
                state.isLogin = true;
                state.isActive = false;
            }
        }
    },
    extraReducers: {
        // Login
        [doLogin.pending.toString()]: (state: UserLogin) => {
            state.isLoading = true;
        },
        [doLogin.fulfilled.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            console.log(action.payload);
            state.email = action.payload.email;
            state.isLogin = true;
            state.isLoading = false;
            localStorage.setItem('token', action.payload.token);
        },
        [doLogin.rejected.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            state.error = action.payload.error;
            state.isLoading = false;
        },

        // Check mail
        [doCheckMail.pending.toString()]: (state: UserLogin) => {
            state.isLoading = true;
        },
        [doCheckMail.fulfilled.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            console.log(action.payload);
            
        },
        [doCheckMail.rejected.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            state.error = action.payload.error;
            state.isLoading = false;
        },

        // Check code
        [doCheckCode.pending.toString()]: (state: UserLogin) => {
            state.isLoading = true;
        },
        [doCheckCode.fulfilled.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            console.log(action.payload);
            if(action.payload.status === 200){
                state.isLogin = true;
            }
            
        },
        [doCheckCode.rejected.toString()]: (state: UserLogin, action: PayloadAction<any>) => {
            state.error = action.payload.error;
            state.isLoading = false;
        }

    }
});

export const { logout, demoLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;