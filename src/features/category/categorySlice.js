import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryServices from "./categoryServices";

const initialState = {
    categories: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const getCategories = createAsyncThunk("category/get-catehories", async (thunkAPI) => {
    try {
        const response = await categoryServices.getCategories();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.categories = action.payload;
                state.message = "Products fetched successfully"; 
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.categories = null;
                state.message = action.payload.message;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Category_reset_all");

export default categorySlice.reducer;