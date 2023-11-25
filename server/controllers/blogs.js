import { Blog } from "../model/BlogModel.js"

export const getAllBlogs = async (req, res, next) => {
    try {
        const get_blog = await Blog.find().populate("comments")
        res.json(get_blog)
    } catch (error) {
        next(error)
    }
}


export const getBlogById = async (req, res, next) => {
    try {
        const { id } = req.params
        const blogFound = await Blog.findById(id)
        if (!blogFound) {
            const err = new Error("Blog Not Found")
            next(err)
            return;
        }
        res.status(200).json(blogFound)
    } catch (error) {
        next(error)
    }
}

export const createBlog = async (req, res, next) => {
    try {
        const { title, content } = req.body

        if (!title || !content) {
            const error = new Error("all filed are required")
            next(error)
        }
        const userId = (req.user);

        if (!userId.isAdmin) {
            const err = new Error("Only Admin can post blog")
            next(err)
            return;
        }
        else {
            const createBlog = new Blog({ title, content })
            await createBlog.save()
            res.json(createBlog)
        }
    } catch (error) {
        next(error)
    }
}

export const updateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body

        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true })

        if (!updatedBlog) {
            const err = new Error("couldn't find blog")
            next(err)
            return
        }
        res.status(201).json(updatedBlog)
    } catch (error) {

    }
}

export const deleteBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const blogToDelete = await Blog.findByIdAndDelete(id)

        if (!blogToDelete) {
            const err = new Error('Blog Not found')
            next(err)
        }

        res.status(200).json({ message: "blog Deleted successfully" })
    } catch (error) {
        next(error)
    }
}