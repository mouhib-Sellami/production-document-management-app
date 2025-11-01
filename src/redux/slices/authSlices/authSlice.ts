import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@/config/AxiosInstance';
import { forgetPasswordRequest, login, logout, resetPassword, retrieve, signup, verifyToken } from './authSliceThunk';
import secureLocalStorage from 'react-secure-storage';
import type { AuthState } from '@/types/redux/AuthState';


const initialState: AuthState = {
    user: null,
    isError: false,
    isAuthenticated: false,
    isLoading: false,
    message: '',
    permissions: [],
    organization: null,
    role: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuth: (state: AuthState) => {
            state.user = null;
            state.isLoading = false;
            state.isAuthenticated = false;
            state.isError = false;
            state.message = '';
            state.permissions = [];
            state.role = null;
            state.organization = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
                axiosInstance.defaults.headers['Authorization'] = `Bearer ${action.payload.token}`;
                state.message = '';
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.permissions = [];
                state.isAuthenticated = false;
            })
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                // state.user = action.payload.user;
                // state.permissions = action.payload.role.permissions;
                // state.role = action.payload.role;
                // state.organization = action.payload.organization;
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
                axiosInstance.defaults.headers['Authorization'] = `Bearer ${action.payload.token}`;
                state.message = '';
            })
            .addCase(signup.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.permissions = [];
                state.isAuthenticated = false;
            })
            .addCase(retrieve.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(retrieve.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.permissions = action.payload.role.permissions;
                state.role = action.payload.role;
                state.organization = action.payload.organization;
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
                axiosInstance.defaults.headers['Authorization'] = `Bearer ${action.payload.token}`;
                state.message = '';
            })
            .addCase(retrieve.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.user = null;
                state.isAuthenticated = false;
                state.permissions = [];
                secureLocalStorage.removeItem(import.meta.env.VITE_VITE_AUTH_TOKEN || '@token')
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.isLoading = false;
                state.isAuthenticated = false;
                state.isError = false;
                state.message = '';
                state.permissions = [];
                state.organization = null;
            })
            .addCase(logout.rejected, (state) => {
                state.user = null;
                state.isLoading = false;
                state.isAuthenticated = false;
                state.isError = false;
                state.message = '';
                state.permissions = [];
                state.organization = null;
            })
            .addCase(forgetPasswordRequest.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(forgetPasswordRequest.fulfilled, (state) => {
                state.isLoading = false;
                state.message = '';
            })
            .addCase(forgetPasswordRequest.rejected, (state) => {
                state.isLoading = false;
                state.message = '';
            })
            .addCase(verifyToken.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(verifyToken.fulfilled, (state) => {
                state.isLoading = false;
                state.message = '';
            })
            .addCase(verifyToken.rejected, (state) => {
                state.isLoading = false;
                state.message = '';
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
                state.message = '';
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.isLoading = false;
                state.message = '';
            })
            .addCase(resetPassword.rejected, (state) => {
                state.isLoading = false;
                state.message = '';
            })
    }
});


export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;
