import '../App.css';
import Banner from '../compStatic/Banner';

const AboutMe = () => {

    return (
        <>
        <Banner/>
        <div className='Content'>
            <br/>
            <div className='Content__RoundShape'>
            <p className="Content__RoundText"> 
            About me
            </p>
            </div>
            <div className='Content__SquareShape'>
                <p>
                    Content
                </p>
            </div>
            {/* <p className='Content__SquareTextComp'>
            I recently graduated from .Net bootcamp. Before career switch I was planing a career in academia within infectious disease modeling area. I have studied indectious disease control, health informatics, bioinforamtics and public health. Though my studeis i developed a knowlage base and interest in mathematics and machine learning. 

            </p> */}
        </div>
        </>

    );
}

export default AboutMe;