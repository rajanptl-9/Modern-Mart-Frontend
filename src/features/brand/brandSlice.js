import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import brandServices from "./brandServices";

const initialState = {
    brands: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const getBrands = createAsyncThunk("brand/get-brands", async (thunkAPI) => {
    try {
        const response = await brandServices.getBrands();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getBrands.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.brands = action.payload;
                state.message = "Brand fetched successfully"; 
            })
            .addCase(getBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.brands = null;
                state.message = action.payload.message;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Brand_reset_all");

export default brandSlice.reducer;