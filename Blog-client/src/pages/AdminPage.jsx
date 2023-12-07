import React, { useEffect, useState } from "react";
import "../styles/AdminPage.scss";
import Blog from "../components/Blog";
import { createBlogAsync, deleteBlogsAsync, fetchBlogsAsync } from "../store/actions/blogActions";
import { getAllBlogs } from "../store/reducers/blogSlice";
import { useDispatch, useSelector } from "react-redux";
const AdminPage = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(getAllBlogs)
    const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [remove, setRemove] = useState(false)

  useEffect(() => {
     dispatch(fetchBlogsAsync())
  }, [remove])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
 


  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
        title: "",
        content: ""
    })
    dispatch(createBlogAsync({ title: form.title, content: form.content }));
};

  const deleteBlog = (id) => {
   
    dispatch(deleteBlogsAsync(id))
    setRemove(true)

    console.log(blogs);

  }
  return (
    <div className="container-admin">
      <h3>Admin Page</h3>

      <h5>Create Blog</h5>
      <div className="create-blog">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required={true}
          />
          <label>Content</label>
          <textarea
            placeholder="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            type="text"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <h5>My Blogs</h5>
      <div>
        {blogs.map((data, index) => (
            <div className="myBlog">
                <Blog data={data} key={index} />
                <button type="button" onClick={() => deleteBlog(data._id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
