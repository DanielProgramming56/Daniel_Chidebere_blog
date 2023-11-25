import React from 'react';
import "../styles/header.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const AppHeader = () => {
    return (
        <div className='container'>
            <Link to={"/"} className='Logo'> Space Air</Link>

            <ul>
                <Link   to={"https://www.instagram.com/biggerpicture56/"} target="_blank">{<InstagramIcon />}</Link>
                <Link to={"https://twitter.com/DynamicDhz"}>{<TwitterIcon />}</Link>
                <Link to={"https://www.linkedin.com/in/chidebere-daniel-84b55728b/"}>{<LinkedInIcon />}</Link>
                <Link to={"https://github.com/DanielProgramming56"}>{<GitHubIcon />}</Link>
            </ul>
        </div>
    );
}

export default AppHeader;
