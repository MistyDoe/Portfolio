import { React } from 'react';
import bannerImg from '../Images/banner.png';
import bannerPic from '../Images/pic.png';
import '../App.css';


const Banner = () => { 
    
    return (
        <>
        <header className='banner'>
            <img src = {bannerImg} className= 'banner__Bg'/>
           
                <img src = {bannerPic} className= 'banner__Pic' />
           
        </header>
        </>
            );
}


export default Banner;
