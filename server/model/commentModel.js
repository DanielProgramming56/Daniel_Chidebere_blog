import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true }
}, {timestamps: true});

export const Comment = mongoose.model('Comment', commentSchema);
