import axios from "axios";
import { loginUser, logoutUser } from "../reducers/authSlice";

export const loginAction = (userData) => async (dispatch) => {
    try {
        
    } catch (error) {
        console.error('Login failed:', error.message);
    }

}