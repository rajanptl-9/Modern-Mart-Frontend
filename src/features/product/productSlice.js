import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServices from "./productServices";
import {toastSuccess, toastError} from "../../utils/toastify";

const initialState = {
    products: null,
    singleProduct: null,
    specialProducts: null,
    featuredProducts: null,
    pages: null,
    review: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const getProducts = createAsyncThunk("product/get-products", async (filter,thunkAPI) => {
    try {
        const response = await productServices.getProducts(filter);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getSpecificProduct = createAsyncThunk("product/specific-products",async(filter,thunkAPI) =>{
    try {
        const response = await productServices.getSpecificProducts(filter);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const getOneProduct = createAsyncThunk("product/get-one-product", async (id,thunkAPI) => {
    try {
        const response = await productServices.getOneProduct(id);        
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const submitReview = createAsyncThunk("product/review-submit", async(data,thunkAPI) => {
    try {
        const response = await productServices.submitReview(data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

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
                state.products = action.payload.prod;
                state.pages = action.payload.pages;
                state.message = "Products fetched successfully"; 
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.products = null;
                state.pages = null;
                state.message = action.payload.message;
            })
            .addCase(getSpecificProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSpecificProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                if(action.payload.tag === 'special'){
                    state.specialProducts = action.payload.prod;
                }else if(action.payload.tag === 'featured'){
                    state.featuredProducts = action.payload.prod;
                }
                state.message = "Products fetched successfully"; 
            })
            .addCase(getSpecificProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.products = null;
                state.pages = null;
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
                state.review = action.payload.rating;
                state.message = "Single Product fetched successfully"; 
            })
            .addCase(getOneProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.singleProduct = null;
                state.message = action.error.message;
            })
            .addCase(submitReview.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(submitReview.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.review = action.payload;
                state.message = "Review Submitted!"; 
                toastSuccess('Review Submitted!');
            })
            .addCase(submitReview.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.review = null;
                state.message = "Review Submission Failed";
                toastError('Failed to submit review!');
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Product_reset_all");

export default productSlice.reducer;