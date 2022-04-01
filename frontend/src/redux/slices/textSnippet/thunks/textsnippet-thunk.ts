import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import textSnippetAPI from "redux/service/textSnippet";


// Get All Text Sippet
export const doGetAllTextSnippet = createAsyncThunk(
    "textSnippet/getAllTextSnippet",
    async (data: any, thunkAPI) => {
        try{
            const response = await textSnippetAPI.getAllTextSnippet();
            return response;
        } catch(err){
            return thunkAPI.rejectWithValue(err);
        }
    }
);