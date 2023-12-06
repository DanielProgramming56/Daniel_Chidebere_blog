import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/singleBlog.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogId } from "../store/reducers/blogSlice";
import { createCommentAsync, fetchBlogByIdAsync } from "../store/actions/blogActions";
import format from "date-fns/format";
import CommentComponent from "../components/commentComponent";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector(selectBlogId);
  const [newComment, setNewComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBlogByIdAsync(id));
  }, [dispatch, id]);

  const formattedDate = blog?.blog?.createdAt
    ? format(new Date(blog?.blog?.createdAt), "yyyy-MM-dd")
    : "N/A";

  const handleComment = () => {
    dispatch(createCommentAsync({ blogId: id, text: newComment }));
    setNewComment('');
    navigate("/")
  };

 

  return (
    <div className="singleBlogContainer">
      <div className="container-single">
        <h1>{blog?.blog?.title}</h1>
        <span>{formattedDate}</span>
        <p>{blog?.blog?.content}</p>

        {<CommentComponent blog={blog} />}

        <form action="">
          <textarea
            placeholder="Write a comment...."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="button" onClick={() => handleComment()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleBlog;
