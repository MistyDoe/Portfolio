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
            <button  className='NavigationBar__NavButton'>
            <Link to ="/aboutme" className='NavigationBar__Link'> About me</Link>
            </button>
            <button  className='NavigationBar__NavButton'>
            <Link to = "/teckstack" className='NavigationBar__Link' > Teck Stack</Link>
            </button>
            <button className='NavigationBar__NavButton'>
            <Link to = "/projects" className='NavigationBar__Link'> Projects</Link>
            </button>
            <button  className='NavigationBar__NavButton'>
            <Link to = "/contactme" className='NavigationBar__Link'> Contact Me</Link>
            </button>
            </nav> 

        </header>
        </>
            );
}


export default Banner;
