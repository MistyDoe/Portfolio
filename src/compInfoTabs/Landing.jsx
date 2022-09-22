import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <>
        <div className="Layout">
            <div className="Content"> 
            <div className="Intro">
                <p> Welocome to my protfolio <br></br> 
                Grab a &#127850;  and enjoy your time!
                </p>
            </div>
            <div className="Content__Landing2">
            <div className="CurrentlyWorking"></div>
            <p className='Working__text'>Currenly working on:</p>
            <ul className='ListWorking'>
                <li><Link to = "/projects" className='bttn'> Portfolio website</Link> </li>
                
            </ul>
            </div>
            </div>
        </div>
        </>
    

    );
}

export default Landing;