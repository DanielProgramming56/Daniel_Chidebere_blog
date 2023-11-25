import express from "express"
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../controllers/blogs.js"
import { authGuard } from "../middleware/auth.js"
const route = express.Router()

route.get("/", getAllBlogs)
route.get("/:id", getBlogById)
route.post("/create-post", authGuard, createBlog)
route.put("/update/:id", updateBlog)
route.put("/update/:id", updateBlog)
route.delete("/delete/:id", deleteBlog)

export default route
