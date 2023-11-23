import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: { type: String, required: true },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
    }],
    users: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, { timestamps: true })

export const Blog = mongoose.model('Blog', BlogSchema)