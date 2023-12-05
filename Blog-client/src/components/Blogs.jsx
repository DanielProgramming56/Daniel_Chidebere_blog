import React, {useEffect} from "react";
import Blog from "./Blog";
import "../styles/Blogs.scss";
import loadingAnimation from "../assets/Spin-1.3s-131px.svg"
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/reducers/authSlice";
import { fetchBlogsAsync } from "../store/actions/blogActions";
import { getAllBlogs, selectLoadingState } from "../store/reducers/blogSlice";
const Blogs = () => {
  const dispatch = useDispatch()
const posts = useSelector(getAllBlogs)
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectLoadingState)
  const user_name = user?.user?.user_name
   useEffect(() => {
    dispatch(fetchBlogsAsync())
  }, [])

  return (
    <div className="containerBlogs">
     {isLoading ? <img src={loadingAnimation} alt="" /> : (
      <h2>
      {user_name ? 'Hey  ' + user_name : "How you doing today?"}
      </h2>
     )}
     {
      isLoading ? <></> : (
        posts ? (
          posts.map((data, index) => 
            <Blog  key={index} data={data}/>)
        ) : (<span>No Blog</span>)
      )
     }
    </div>
  );
};

export default Blogs;
