import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userServices from "./userServices";

const initialState = {
    user: null,
    forgotPassword: null,
    resetPassword: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
};

export const registerUser = createAsyncThunk("user/register-user", async (user, thunkAPI) => {
    try {
        const response = await userServices.registerUser(user);
        if (response) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response));
            localStorage.setItem('wishlist', JSON.stringify(response.wishlist));
        }
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const loginUser = createAsyncThunk("user/login-user", async (user, thunkAPI) => {
    try {
        const response = await userServices.loginUser(user);
        if (response) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response));
            localStorage.setItem('wishlist', JSON.stringify(response.wishlist));
        }
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const forgotPassword = createAsyncThunk("user/forgot-password", async (email, thunkAPI) => {
    try {
        const response = await userServices.forgotPassword(email);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export  const resetPassword = createAsyncThunk("user/reset-password", async (data, thunkAPI) => {
    try {
        const response = await userServices.resetPassword(data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.isError = false;
                state.message = "User registered successfully!";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = null;
                state.message = action.error;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.isError = false;
                state.message = "User logged in successfully!";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = null;
                state.message = action.error;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.forgotPassword = action.payload;
                state.isError = false;
                state.message = "User logged in successfully!";
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.forgotPassword = null;
                state.message = action.error;
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.resetPassword = action.payload;
                state.isError = false;
                state.message = "User logged in successfully!";
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.resetPassword = null;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState)
    }
});

export const resetState = createAction("User_reset_all");

export default userSlice.reducer;