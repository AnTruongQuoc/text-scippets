import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Types
import { AllTextSnippets, TextSnippet } from "redux/types/TextSnippet";

// Import Thunks
import { doGetAllTextSnippet} from "./thunks/textsnippet-thunk";


const initialState: AllTextSnippets = {
    textSnippets: [],
}

// Create user login slice
const textSnippetSlice = createSlice({
    name: "textSnippet",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [doGetAllTextSnippet.pending.toString()]: (state: AllTextSnippets) => {
            state.textSnippets = [];
        },
        [doGetAllTextSnippet.fulfilled.toString()]: (state: AllTextSnippets, action: PayloadAction<any>) => {
            state.textSnippets = action.payload;
            console.log(action.payload)
        },
        [doGetAllTextSnippet.rejected.toString()]: (state: AllTextSnippets, action: PayloadAction<any>) => {
            state.textSnippets = [];
            console.log(action.payload)
        }

    }
});

export const {  } = textSnippetSlice.actions;
export default textSnippetSlice.reducer;