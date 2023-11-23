import express from "express"
import { login, signUp } from "../controllers/user.js"

const route = express.Router()
route.post("/sign-up", signUp )
route.post("/login", login)

export default route
