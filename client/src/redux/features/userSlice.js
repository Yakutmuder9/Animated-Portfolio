import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    user: [],
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: {}
});

export const userReducer = userSlice.reducer;