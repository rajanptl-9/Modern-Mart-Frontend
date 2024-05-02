import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderServices from "./orderServices";

const initialState = {
    placedOrder: null,
    myOrders: null,
    order: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const createOrder = createAsyncThunk("order/create-order", async (order,thunkAPI) => {
    try {
        const response = await orderServices.createOrder(order);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getMyOrders = createAsyncThunk("order/get-my-orders", async (_,thunkAPI) => {
    try {
        const response = await orderServices.getMyOrders();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;                
                state.placedOrder = action.payload.saveOrder;
                state.message = action.payload.success; 
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.placedOrder = null;
                state.message = false;
            })
            .addCase(getMyOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMyOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;                
                state.myOrders = action.payload;
                state.message = action.payload.message; 
            })
            .addCase(getMyOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.myOrders = null;                
                state.message = action.payload.response.data.message;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("Order_reset_all");

export default orderSlice.reducer;