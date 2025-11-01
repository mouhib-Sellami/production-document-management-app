// import { dispatch } from "@/redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { onShowNotification } from "../notificationSlice/notificationSlice";
import authServices from "@/redux/services/authServices";
import secureLocalStorage from "react-secure-storage";
import type { loginResponse } from "@/types/response/authResponses";
// import { handleNewSession } from "../sessionSlice/sessionSlice";

export const login = createAsyncThunk('auth/login', async (data: UserAuth, thunkAPI) => {
    try {
        secureLocalStorage.removeItem(import.meta.env.VITE_VITE_AUTH_TOKEN || '@token');
        const response: loginResponse = await authServices.login(data);
        secureLocalStorage.setItem(import.meta.env.VITE_VITE_AUTH_TOKEN || '@token', response.token);
        // dispatch(handleNewSession());
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            if (error?.response?.status === 400) {
                // dispatch(onShowNotification({
                //     content: "Username ou mot de passe incorrect.",
                //     level: "ERROR",
                //     type: "AUTH"
                // }))
            }
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const signup = createAsyncThunk('auth/signup', async (values: FormData, thunkAPI) => {
    try {
        secureLocalStorage.removeItem(import.meta.env.VITE_VITE_AUTH_TOKEN || '@token');
        const response: loginResponse = await authServices.signup(values);
        secureLocalStorage.setItem(import.meta.env.VITE_VITE_AUTH_TOKEN || '@token', response.token);
        // dispatch(handleNewSession());
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await authServices.logout();
        secureLocalStorage.removeItem(import.meta.env.VITE_VITE_AUTH_TOKEN || '@token')
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const retrieve = createAsyncThunk('auth/retrieve', async (_, thunkAPI) => {
    try {
        const response = await authServices.retrieve();
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const forgetPasswordRequest = createAsyncThunk('auth/forgetPasswordRequest', async (data: { email: string }, thunkAPI) => {
    try {
        const response = await authServices.forgetPasswordRequest(data);
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const verifyToken = createAsyncThunk('auth/verifyToken', async (data: { token: string }, thunkAPI) => {
    try {
        const response = await authServices.verifyToken(data);
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const resetPassword = createAsyncThunk('auth/resetPassword', async (data: resetPasswordRequest, thunkAPI) => {
    try {
        const response = await authServices.resetPassword(data);
        return response;
    } catch (error: any) {
        if (error?.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
        return thunkAPI.rejectWithValue(error);
    }
});
