import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API

const loginActionAsync = createAsyncThunk('auth/loginUserAsync', async (formData, { dispatch }) => {
    try {
        const response = await axios.post(
            `${apiUrl}user/login`,
            formData, {
                method: 'GET',
                credentials: 'include',
            }
        );
        if (response.data.message === 'User login successfully') {
            return response.data;
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

export {loginActionAsync}