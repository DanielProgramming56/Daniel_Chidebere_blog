import React from 'react';
import Blog from './Blog';
import "../styles/Blogs.scss"
const Blogs = () => {

    const arr = [1,2,3,4,5]
    return (
        <div className='containerBlogs'>
           {arr.map((value) => <Blog/>)}
        </div>
    );
}

export default Blogs;
