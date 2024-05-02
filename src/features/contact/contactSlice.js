import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactServices from "./contactServices";

const initialState = {
    data: null,
    isLoading: false,
    isError: false,
    isSuccess: false,   
    message: "",
}

export const submitEnquiry = createAsyncThunk("contact/submitEnquiry", async (data, { rejectWithValue }) => {
        try {
            const response = await contactServices.submitEnquiry(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        resetState: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        }
    },
    extraReducers: builder => {
        builder
        .addCase(submitEnquiry.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        })
        .addCase(submitEnquiry.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = "Enquiry submitted successfully!";
        })
        .addCase(submitEnquiry.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = "Enquiry submission failed!";
        });
    }
});

export const resetState = createAction("Contact_reset_all");

export default contactSlice.reducer;