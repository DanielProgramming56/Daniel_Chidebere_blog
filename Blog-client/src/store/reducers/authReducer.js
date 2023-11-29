import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAction, logOutAction } from "../actions/authActions";

export const loginUserAsync = createAsyncThunk('auth/loginUserAsync', async (userData) => {
    const response = await loginAction(userData)
    return response.data
})

export const logoutUserAsync = createAsyncThunk('auth/logoutUserAsync', async () => {
    await logOutAction();
  });