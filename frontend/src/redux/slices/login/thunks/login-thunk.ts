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

