import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import userAuthAPI from "redux/service/user";


// Login
export const doLogin = createAsyncThunk(
    "userLogin/login",
    async (data: {email:string, password: string}, thunkAPI) => {
        try{
            const response = await userAuthAPI.login(data);
            return response;
        } catch(err){
            return thunkAPI.rejectWithValue(err);
        }
    }
);

// Check mail
export const doCheckMail = createAsyncThunk(
    "userLogin/checkMail",
    async (email: string, thunkAPI) => {
        try{
            const response = await userAuthAPI.checkMail(email);
            return response;
        } catch(err){
            return thunkAPI.rejectWithValue(err);
        }
    }
);

// Check code
export const doCheckCode = createAsyncThunk(
    "userLogin/checkCode",
    async (code: string, thunkAPI) => {
        try{
            const response = await userAuthAPI.checkCode(code);
            return response;
        } catch(err){
            return thunkAPI.rejectWithValue(err);
        }
    }
);

