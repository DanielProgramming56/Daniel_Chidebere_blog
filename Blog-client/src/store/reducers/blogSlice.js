import { createSlice } from "@reduxjs/toolkit";
import { createCommentAsync, fetchBlogByIdAsync, fetchBlogsAsync } from "../actions/blogActions";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        loading: false,
        blogs: [],
        error: null,
        blog: null,
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter((blog) => blog._id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        fetchBlogs: (state, action) => {
            state.blogs = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBlogsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchBlogByIdAsync.pending, (state) => {
                state.loading = false;
            })
            .addCase(fetchBlogByIdAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlogByIdAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createCommentAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCommentAsync.fulfilled, (state, action) => {
                state.loading = false;
                const { blogId, text } = action.payload;
                const blog = state.blogs.find((post) => post._id === blogId);

                if (blog) {
                    blog.comments.push(text);
                }
            })
            .addCase(createCommentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const { addBlog, deleteBlog, setLoading, fetchBlogs } = blogSlice.actions;

export const getAllBlogs = (state) => state.blog.blogs;
export const selectLoadingState = (state) => state.blog.loading;
export const selectBlogId = (state) => state.blog.blog;
export const selectError = (state) => state.blog.error;

export default blogSlice.reducer;
