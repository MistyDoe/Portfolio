import { React } from 'react';
import bannerImg from '../Images/banner.png';
import bannerPic from '../Images/pic.png';
import '../App.css';
import { Route, Routes, Navigate, BrowserRouter,Link } from 'react-router-dom';
import AboutMe from '../compInfoTabs/AboutMe';
import TechStack from '../compInfoTabs/TeckStack';
import Projects from '../compInfoTabs/Projects';
import ContactMe from '../compInfoTabs/ContactMe';

import '../App.css';



const Banner = () => { 
    
    return (
        <>
        <header className='banner'>
            <img src = {bannerImg} className= 'banner__Bg'/>
            <div className= 'banner__PicText'>          
                <img src = {bannerPic} className= 'banner_Pic'  /> 
                <div className='banner__Text'>
                    Hi! <br />
                    My name is Migle and i am a software developer.
                </div>
            </div>                   
        <nav className='NavigationBar'>
            <Link to ="/aboutme" className='NavigationBar__NavButton'> About me</Link>
            <Link to = "/teckstack" className='NavigationBar__NavButton'> Teck Stack</Link>
            <Link to = "/projects" className='NavigationBar__NavButton'> Projects</Link>
            <Link to = "/contactme" className='NavigationBar__NavButton'> Contact Me</Link>
            </nav> 

        </header>
        </>
            );
}


export default Banner;
