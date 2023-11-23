import { User } from "../model/UserModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
export const signUp = async (req, res, next) => {
    try {
        const { user_name, email, password, isAdmin } = req.body;
        if (!user_name, !email, !password) {
            const error = new Error("All field are required")
            next(error)
            return
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const new_user = new User({ user_name, email, password: hashPassword, isAdmin })
        await new_user.save()
        const token = jwt.sign({
            userId: new_user._id,
            email: new_user.email
        }, process.env.TOKEN_KEY, { expiresIn: "1h" })
        res.json({ message: "successfully created an account", user: new_user, token })
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { password, email } = req.body

        const userExist = await User.findOne({ email })

        if (!password && !email) {
            const error = new Error("All field are required")
            next(error)
            return
        }

        if (!userExist) {
            const error = new Error("email  or password is not correct")
            next(error)
        }

        const passwordIsCorrect = bcrypt.compare(password, userExist.password)

        if (!passwordIsCorrect) {
            throw new Error("invalid credentials")
        }

        const token = jwt.sign({
            userId: userExist._id,
            email: userExist.email
        }, process.env.TOKEN_KEY, { expiresIn: '1h' })
        res.status(200).json({ message: 'User created successfully', token: token });
    } catch (error) {
        next(error)
    }
}