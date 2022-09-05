import { React } from 'react';
import bannerImg from '../Images/banner.png';
import bannerPic from '../Images/pic.png';
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
                    My name is Migle
                </div>
            </div>
                   
        </header>
        </>
            );
}


export default Banner;
