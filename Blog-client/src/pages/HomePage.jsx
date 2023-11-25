import React from 'react';
import "../styles/homePage.scss"
import Blogs from '../components/Blogs';
const HomePage = () => {
    return (
        <div className='homeContainer'>
            <Blogs/>
        </div>
    );
}

export default HomePage;
