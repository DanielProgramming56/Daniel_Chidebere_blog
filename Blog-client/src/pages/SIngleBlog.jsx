import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/singleBlog.scss"

const SIngleBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const arr = [1,2,3,4]


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='singleBlogContainer'>
       <div className='container-single'>
       <h1>Blog Title</h1>
        <span>12-05-23</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi cumque fuga esse perferendis quasi tempora architecto voluptas tempore mollitia! Animi temporibus earum fugiat corporis, ipsum recusandae sit quia asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa minus doloribus vero, consectetur consequuntur, inventore natus debitis qui saepe ipsum aspernatur sed cupiditate vel dolor, consequatur iste harum molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rerum reprehenderit. Commodi, sit ullam, perspiciatis vel, ratione nemo vitae obcaecati quas magnam in sunt laboriosam assumenda quidem maxime temporibus pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officiis maxime eaque culpa voluptatum aspernatur veniam, quae ipsa laudantium dolore tempore corporis, sapiente ad dolorem mollitia, recusandae sed omnis numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, minima quasi non amet soluta tempore libero ipsa corrupti facilis? Eius delectus at magni eligendi neque molestias perspiciatis dolores libero maxime.</p>

        <div className='comment'>
          <h3>Comments</h3>
          {arr.map((val) => (
            <div className='single-comment'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id, commodi molestiae illo autem repellendus. Sed voluptatibus adipisci pariatur nemo quidem! Eveniet explicabo quas, consequatur molestiae accusantium dolorem laboriosam modi!</p>
              <span>09 - 08- 23</span>
            </div>
          ))}
        </div>
        <form action="">
        <textarea placeholder='write a comment....'></textarea>
        <button type='submit'>Send</button>
        </form>
       </div>
    </div>
  );
};

export default SIngleBlog;
