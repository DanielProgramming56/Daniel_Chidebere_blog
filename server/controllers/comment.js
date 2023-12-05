import { Blog } from "../model/BlogModel.js"
import { Comment } from "../model/commentModel.js"
export const createComment = async (req, res, next) => {

    try {
        const { id } = req.params
        const { text } = req.body

        const blog = await Blog.findById(id)
        if (!blog) {
            const error = new Error("Not found")
            next(error)
        }
        const newComent = new Comment({ text })
        await newComent.save()
        blog.comments.push(newComent._id)
        await blog.save()
        res.json(blog)
    } catch (error) {
        next(error)
    }

}

export const getCommentById = async (req, res) => {
    try {
        const { commentId } = req.params
        const foundComment = await Comment.findById(commentId)

        if (!foundComment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.json(foundComment);
    } catch (error) {
        console.error('Error fetching comment by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}