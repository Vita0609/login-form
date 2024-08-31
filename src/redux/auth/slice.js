import { createSlice } from "@reduxjs/toolkit";
import { register, logIn } from "./operations";
const initialState = {
    user: { email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user.email = action.payload.email;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            });
    },
});
