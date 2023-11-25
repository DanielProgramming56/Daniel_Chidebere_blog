import express from "express"
import { createComment } from "../controllers/comment.js"

const route = express.Router()
route.post("/:id", createComment)

export default route