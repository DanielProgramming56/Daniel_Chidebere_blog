import { Blog } from "../model/BlogModel.js"
export const createComment = async (req, res, next) => {

    try {
        const { id } = req.params
        const { text, user_name } = req.body
        const blog = await Blog.findById(id)
        const newComment = { text, user_name }
        if (!blog) {
            const error = new Error("Not found")
            next(error)
        }
        blog.comments.push(newComment)
        await blog.save()
        res.json(blog)
    } catch (error) {
        next(error)
    }

}