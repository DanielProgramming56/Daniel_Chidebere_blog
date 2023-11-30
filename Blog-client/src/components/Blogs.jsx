import React from "react";
import Blog from "./Blog";
import "../styles/Blogs.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../store/reducers/authSlice";
const Blogs = () => {
  const user = useSelector(selectUser)
  const user_name = user?.user?.user_name
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="containerBlogs">
     <h2>
     {user_name ? 'Hey  ' + user_name : "How you doing today?"}
     </h2>
      {arr.map((value) => (
        <Blog />
      ))}
    </div>
  );
};

export default Blogs;
