import express from "express"
import { createComment, deleteComment, getCommentById } from "../controllers/comment.js"

const route = express.Router()
route.post("/:id", createComment)
route.get("/:commentId", getCommentById)
route.delete("/:id", deleteComment)

export default route