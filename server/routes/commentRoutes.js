import express from "express"
import { createComment } from "../controllers/comment.js"

const route = express.Router()
route.get("/", createComment)

export default route