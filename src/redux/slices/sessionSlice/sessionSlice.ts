import { createSlice } from "@reduxjs/toolkit";
const initialState: { isAlive: boolean } = {
    isAlive: false
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        handleNewSession: (state) => {
            state.isAlive = true
        },
        handleSessionExpired: (state) => {
            state.isAlive = false
        }
    },
});

export const { handleNewSession, handleSessionExpired } = sessionSlice.actions;

export default sessionSlice.reducer;