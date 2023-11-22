import mongoose from "mongoose";
import { Blog } from "./BlogModel.js";
const UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unqiue: true
    },
    password: {
        type: String,
        required: true
    },
    blogs: [Blog],
    isAdmin: {
        type: Boolean,
        default: false
    }
})

export const User = mongoose.model('User', UserSchema)

UserSchema.pre('save', function (next) {
    const limitUser = 2;
    const totalUser = User.countDocuments()

    if (totalUser > limitUser) {
        const err = new Error('User limit exceeded')
        next(err)
    } else {
        next()
    }
})
