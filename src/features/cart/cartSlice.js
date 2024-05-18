import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartServices from "./cartServices";
import { toastError, toastSuccess } from "../../utils/toastify";

const initialState = {
    cart: null,
    cartlist: null,
    updatedProduct: null,
    deleteProduct: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const addToCart = createAsyncThunk("cart/add-to-cart", async (prodData, thunkAPI) => {
    try {
        const response = await cartServices.addToCart(prodData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getCart = createAsyncThunk("cart/get-cart", async (thunkAPI) => {
    try {
        const response = await cartServices.getCart();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteProduct = createAsyncThunk("cart/delete-cart", async (id, thunkAPI) => {
    try {
        const response = await cartServices.removeProduct(id);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateCart = createAsyncThunk("cart/update-quantity", async (prodData, thunkAPI) => {
    try {
        const response = await cartServices.updateCart(prodData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const clearCart = createAsyncThunk("cart/clear-cart", async(thunkAPI) => {
    try {
        const response = await cartServices.clearCart();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


const productSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.cart = action.payload.result;
                state.cartlist = action.payload.cart;
                state.message = "Added to cart successfully!";
                if (action.payload) {
                    localStorage.setItem('cart', JSON.stringify(action.payload.cart));
                }          
                toastSuccess("Added to cart!");
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.cart = null;
                state.message = action.error.message;
                toastError("Failed to add in cart!");
            })
            .addCase(getCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.cartlist = action.payload;                
                if (action.payload) {
                    localStorage.setItem('cart', JSON.stringify(action.payload));
                }
                state.message = "Cart Fetched successfully!";
            })
            .addCase(getCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.cartlist = null;
                state.message = action.error.message;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.deleteProduct = action.payload.deleteProduct;   
                state.cart = action.payload.cart;             
                if (action.payload) {
                    localStorage.setItem('cart', JSON.stringify(action.payload.cart));
                }
                state.message = "Product removed successfully!";
                toastSuccess("Product removed successfully!");
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.deleteProduct = null;
                state.message = action.error.message;
                toastError("Failed to delete product!");
            })
            .addCase(updateCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.updatedProduct = action.payload.updatedCart;
                state.message = "Quantity updated successfully!";
                if (action.payload) {
                    localStorage.setItem('cart', JSON.stringify(action.payload.cart));
                }
                toastSuccess("Quantity updated!");
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.updatedProduct = null;
                state.message = action.error.message;
                toastError("Failed to update quantity!");
            })
            .addCase(clearCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(clearCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
                state.message = "Cart cleared!";
                if (action.payload) {
                    localStorage.setItem('cart', JSON.stringify(action.payload.cart));
                }
                toastSuccess("Cart cleared!");
            })
            .addCase(clearCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.updatedProduct = null;
                state.message = action.error.message;
                toastError("Failed to clear cart!");
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Cart_reset_all");

export default productSlice.reducer;