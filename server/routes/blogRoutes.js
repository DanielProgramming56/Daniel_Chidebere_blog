import express from "express"
import { createBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/blogs.js"
import { authGuard } from "../middleware/auth.js"
const route = express.Router()

route.get("/", getAllBlogs)
route.get("/:id", getBlogById)
route.post("/create-post", authGuard, createBlog)
route.put("/update/:id", updateBlog)

export default route
