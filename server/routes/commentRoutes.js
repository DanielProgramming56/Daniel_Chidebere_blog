import express from "express"
import { createComment, getCommentById } from "../controllers/comment.js"

const route = express.Router()
route.post("/:id", createComment)
route.get("/:commentId", getCommentById)

export default route