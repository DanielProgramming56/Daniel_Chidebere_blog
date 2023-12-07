import React, { useEffect, useState } from 'react';
import format from "date-fns/format";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useDispatch } from 'react-redux';
import { deleteCommentAsync, fetchBlogByIdAsync } from '../store/actions/blogActions';
const CommentComponent = ({blog}) => {
  const dispatch = useDispatch()
  const [deleteCom, setDeleteComment] = useState(false)
  if (blog?.blog?.comment?.length > 0)
  {
    useEffect(() => {
      dispatch(fetchBlogByIdAsync(blog?.blog?._id))
    }, [blog?.blog?._id, deleteCom])
  }

  const deleteComment = (commentId) => {
    alert("are you sure you want to delete this comment")
    dispatch(deleteCommentAsync({commentId}))
    setDeleteComment((prev) => !prev )
  }
    return (
        <div className="comment">
        {blog?.blog?.comments && blog.blog?.comments.length > 0 ? (
          <>
            <h3>Comments</h3>
            {blog?.blog?.comments.map((comment, index) => (
              <div key={index} className="single-comment">
                <p>{comment.text}</p>
                <div className='down-set'><span>
                  {comment.createdAt
                    ? format(new Date(comment.createdAt), "MM - dd - yy")
                    : "N/A"}
                </span>
                <button onClick={() => deleteComment(comment._id)}><DeleteSharpIcon  style={{color: "red"}}/></button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    );
}

export default CommentComponent;
