import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUri = import.meta.env.VITE_API
const fetchBlogsAsync = createAsyncThunk("blog/fetchPostsAsync", async () => {
    try {
        const response = await axios.get(`${apiUri}/blogs/`)
        return response.data
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return;
    }
})

const fetchBlogByIdAsync = createAsyncThunk("blogs/fetchBlogByIdAsync", async (id) => {
    try {
        const response = await axios.get(`${apiUri}/blogs/${id}/comments
    `)
        return response.data
    } catch (error) {
        console.log({ message: error.message });
        return;
    }
})


const createCommentAsync = createAsyncThunk('/blogs/createCommentAsync', async ({ blogId, text }) => {
    try {
        const response = await axios.post(`${apiUri}/comment/${blogId}`, { text })
        return response.data
    } catch (error) {
        console.log({ message: error.message });
        throw error
    }
})



export { fetchBlogsAsync, fetchBlogByIdAsync, createCommentAsync }