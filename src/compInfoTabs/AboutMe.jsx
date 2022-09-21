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
           HI! <br/>
           My name is Migle and I am a Full stack .Net developer based in Sweden.         
I am from Södertälje, where I live with my partner and two adorable kittens.
I recently graduated from the full stack .Net boot-camp offered by <a href='https://www.salt.study/our-hubs/stockholm' > Salt </a>. 
<br/>
I have degrees in  infectious disease control, health informatics, bioinformatics, and public health. Through my studies I developed an interest in mathematics and machine learning.<br/>
Nowadays I am continuously improving my skill set as a developer, in machine learning, and data sciences.
           </p><br/>
        <div className='Proj__Bttn'>
        <a className='bttn' href="https://github.com/MistyDoe" target="_blank">GitHub</a><br/>
        <a className='bttn' href="https://docs.google.com/document/d/1L6FyANTqxvjJYX_iZmYmXdqS9i6oPJ0PaIaHmRqSiYo/edit?usp=sharing'" target="_blank">Cv</a>
            </div>      
        </div>

        </div>
        </>

    );
}

export default AboutMe;