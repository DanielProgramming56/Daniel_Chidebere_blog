import express from "express"
import { signUp } from "../controllers/user.js"

const route = express.Router()
route.post("/", signUp )

export default route
