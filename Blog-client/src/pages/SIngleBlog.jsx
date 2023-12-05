import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/singleBlog.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogId } from "../store/reducers/blogSlice";
import { createCommentAsync, fetchBlogByIdAsync } from "../store/actions/blogActions";
import format from "date-fns/format";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector(selectBlogId);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    dispatch(fetchBlogByIdAsync(id));
  }, [dispatch, id]);

 

  const formattedDate = blog.blog?.createdAt
    ? format(new Date(blog.blog?.createdAt), "yyyy-MM-dd")
    : "N/A";

  const handleComment = () => {
    dispatch(createCommentAsync({ blogId: id, text: newComment }));
    setNewComment('');
  };


  return (
    <div className="singleBlogContainer">
      <div className="container-single">
        <h1>{blog.blog?.title}</h1>
        <span>{formattedDate}</span>
        <p>{blog.blog?.content}</p>

        <div className="comment">
          {blog.blog?.comments && blog.blog?.comments.length > 0 ? (
            <>
              <h3>Comments</h3>
              {blog.blog?.comments.map((comment, index) => (
                <div key={index} className="single-comment">
                  <p>{comment.text}</p>
                  <span>
                    {comment.createdAt
                      ? format(new Date(comment.createdAt), "MM - dd - yy")
                      : "N/A"}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <p>No comments yet.</p>
          )}
        </div>

        <form action="">
          <textarea
            placeholder="Write a comment...."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="submit" onClick={() => handleComment()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleBlog;
