import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistServices from "./wishlistServices";
import RM_LS_User from "../../utils/RM_LS_User";

const initialState = {
    wishlist: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const addToWishlist = createAsyncThunk("wishlist/add-to-wishlist", async (product, thunkAPI) => {
    try {
        const response = await wishlistServices.addToWishlist(product);
        if(response.data){
            localStorage.setItem("wishlist", JSON.stringify(response.data.wishlist));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getUserWishlist = createAsyncThunk("wishlist/get-wishlist", async (thunkAPI) => {    
    try {
        const response = await wishlistServices.getUserWishlist();
        if(response.data){
            localStorage.setItem("wishlist", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder            
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;             
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;  
                state.wishlist = action.payload.wishlist;
                state.message = action.payload.message; 
            })
            .addCase(addToWishlist.rejected, (state, action) => {    
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.wishlist = null;
                state.message = action.payload.message;
            })
            .addCase(getUserWishlist.pending, (state) => {
                state.isLoading = true;            
            })
            .addCase(getUserWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.wishlist = action.payload;
                state.message = "Wishlist Fetched Successfully!"; 
            })
            .addCase(getUserWishlist.rejected, (state, action) => { 
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.wishlist = null;
                state.message = action.error.message;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Wishlist_reset_all");

export default wishlistSlice.reducer;