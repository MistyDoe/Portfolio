import '../App.css';
import Banner from '../compStatic/Banner';

const AboutMe = () => {

    return (
        <>  
        <div className='Layout'>
        <div className='Content'>
        <div className='circle'>
                <h2 className='Title__AboutMe'>About Me</h2> 
                </div>
           <p className='Content__text'>           
I am from Södertälje, where I live with my partner and two adorable kittens Ymir and Silver. <br/>

Recently graduated from the full stack .Net boot-camp offered by Salt. 
<br/>Before my career switch, I was planning a career in academia within the infectious disease modeling area. 
I have degrees in  infectious disease control, health informatics, bioinformatics, and public health. <br/>
Through my studies, I developed an interest in mathematics and machine learning.<br/>
Nowadays I am continuously improving my skill set as a developer, in machine learning, and data sciences.
           </p>
        </div>
        </div>
        </>

    );
}

export default AboutMe;