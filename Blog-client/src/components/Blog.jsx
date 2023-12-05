import React from 'react';
import "../styles/Blog.scss"
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
const Blog = ({data}) => {
    const formattedDate = format(new Date(data.createdAt), 'yyyy-MM-dd HH-mm');
    const wordLimit = data.content.substring(0, 100)
    return (
       <Link to={`/blog/${data._id}`}>
        <div className='containerBlog'>
            <h1>{data.title}</h1>
            <p>{wordLimit}</p>
            <span>{formattedDate}</span>
        </div>
       </Link>
    );
}

export default Blog;
