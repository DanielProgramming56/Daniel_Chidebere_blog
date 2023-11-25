import React from 'react';
import "../styles/Blog.scss"
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
       <Link to={"/blog/:id"}>
        <div className='containerBlog'>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, saepe. Pariatur facilis obcaecati, minima labore tempora adipisci, nobis molestiae necessitatibus quaerat quae aliquid sint doloribus laudantium dolorum natus quod cumque.</p>
            <span>Created 12-3-23</span>
        </div>
       </Link>
    );
}

export default Blog;
