import { Blog} from "../model/BlogModel.js"

export const getAllBlogs = async (req, res, next) => {
    try {
        const get_blog = await Blog.find({})
        res.json(get_blog)
    } catch (error) {
        next(error)
    }
}

export const createBlog = async (req, res, next) => {
    try {
        const { title, content } = req.body

        if (!title || !content)
        {
            const error = new Error("all filed are required")
            next(error)
        }
        const createBlog = new Blog({title, content})
        await createBlog.save()
        res.json(createBlog)
    } catch (error) {
        next(error)
    }
}