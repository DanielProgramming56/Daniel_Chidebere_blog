import mongoose from "mongoose";
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
    isAdmin: {
        type: Boolean,
        default: false
    }
})
export const User = mongoose.model("User", UserSchema)
UserSchema.pre('save', async function (next) {
    const userCount = await User.countDocuments();
    const userLimit = 1;

    if (userCount >= userLimit) {
        const err = new Error('User limit exceeded');
        next(err);
    } else {
        next();
    }
});