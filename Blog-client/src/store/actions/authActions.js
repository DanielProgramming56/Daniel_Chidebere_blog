import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API
export const loginUserAsync = createAsyncThunk('auth/loginUserAsync', async (formData, { dispatch }) => {
    try {
        const response = await axios.post(
            `${apiUrl}/user/login`,
            formData
        );
        if (response.data.message === 'User login successfully') {
            localStorage.setItem('userData', JSON.stringify(response.data));
            return response.data; // Return data if needed
        } else {
            alert('Login failed. Please check your credentials.');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again later.');
        return null;
    }
})