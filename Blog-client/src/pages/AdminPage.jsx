import React, { useState } from "react";
import "../styles/AdminPage.scss";
import Blog from "../components/Blog";
import { createBlogAsync } from "../store/actions/blogActions";
import { getAllBlogs } from "../store/reducers/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/reducers/authSlice";
const AdminPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlogAsync({ title: form.title, content: form.content }));
};

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
        <Blog data={null} />
      </div>
    </div>
  );
};

export default AdminPage;
