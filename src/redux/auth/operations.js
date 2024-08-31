import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000/api";
export const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    axios.defaults.headers.common.Authorization = "";
};
export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const data = await axios.post("/auth/register", credentials);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.status);
        }
    }
);
export const logIn = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const data = await axios.post("/auth/login", credentials);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.status);
        }
    }
);
