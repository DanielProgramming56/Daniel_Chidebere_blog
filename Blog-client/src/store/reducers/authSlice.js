// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loginActionAsync } from "../actions/authActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        token: null
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null
            state.isAuthenticated = false
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginActionAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginActionAsync.fulfilled, (state, action) => {
                if (action.payload) {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                    state.token = action.payload.token
                }
                state.loading = false;
            })
            .addCase(loginActionAsync.rejected, (state) => {
                state.loading = false;
            });
    },
});

// Export the synchronous actions
export const { loginUser, logoutUser } = authSlice.actions;

// Export the selectors
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectLoading = (state) => state.auth.loading;

export const selectAuth = (state) => state.auth.token

// Export the reducer
export default authSlice.reducer;
