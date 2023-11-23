import express from "express"
import { createBlog, getAllBlogs } from "../controllers/blogs.js"
import { authGuard } from "../middleware/auth.js"
const route = express.Router()

route.get("/", getAllBlogs)
route.post("/create-post", authGuard, createBlog)

export default route
