import React from 'react';
import "../styles/header.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated } from '../store/reducers/authSlice';
import { logoutUser } from '../store/reducers/authSlice';
const AppHeader = () => {
    const dispatch = useDispatch()
    const isLogin = useSelector(selectIsAuthenticated)
    return (
        <div className='container'>
            <Link to={"/"} className='Logo'> Space Air</Link>

            <ul>
                <Link   to={"https://www.instagram.com/biggerpicture56/"} target="_blank">{<InstagramIcon />}</Link>
                <Link to={"https://twitter.com/DynamicDhz"} target="_blank">{<TwitterIcon />}</Link>
                <Link to={"https://www.linkedin.com/in/chidebere-daniel-84b55728b/"} target="_blank">{<LinkedInIcon />}</Link>
                <Link to={"https://github.com/DanielProgramming56"} target="_blank">{<GitHubIcon />}</Link>
            </ul>

            {isLogin ? <Link onClick={() => dispatch(logoutUser())}>Logout</Link> : <Link to={"/login"}>Login</Link>}
        </div>
    );
}

export default AppHeader;
