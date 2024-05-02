import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
    products: null,
    singleProduct: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const getProducts = createAsyncThunk("product/get-products", async (thunkAPI) => {
    try {
        const response = await productServices.getProducts();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getOneProduct = createAsyncThunk("product/get-one-product", async (id,thunkAPI) => {
    try {
        const response = await productServices.getOneProduct(id);        
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.products = action.payload;
                state.message = "Products fetched successfully"; 
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.products = null;
                state.message = action.payload.message;
            })
            .addCase(getOneProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOneProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.singleProduct = action.payload;
                state.message = "Single Product fetched successfully"; 
            })
            .addCase(getOneProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.singleProduct = null;
                state.message = action.error.message;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Product_reset_all");

export default productSlice.reducer;