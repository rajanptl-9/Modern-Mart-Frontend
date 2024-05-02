import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import colorServices from "./colorServices";

const initialState = {
    colors: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const getColors = createAsyncThunk("color/get-colors", async (thunkAPI) => {
    try {
        const response = await colorServices.getColors();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const colorSlice = createSlice({
    name: "colors",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getColors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getColors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.colors = action.payload;
                state.message = "Products fetched successfully"; 
            })
            .addCase(getColors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.colors = null;
                state.message = action.payload.message;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Color_reset_all");

export default colorSlice.reducer;