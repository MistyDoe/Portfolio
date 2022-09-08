
import Banner from '../compStatic/Banner';


const ContactMe = () => {


    return (
        <>
        <Banner/>
        <div className='Layout'>
        <div className='Content'>
        <div className='circle circle__Cont'>
                <h2 className='Title__AboutMe'>Contact info</h2> 
                </div>
           <p className='Content__bttn'>
            <div>
                <a className='bttn' href="https://github.com/MistyDoe" target="_blank">GitHub</a><br/>
                <a className='bttn' href="https://docs.google.com/document/d/1L6FyANTqxvjJYX_iZmYmXdqS9i6oPJ0PaIaHmRqSiYo/edit?usp=sharing'" target="_blank">Cv</a>
            </div>
           
              <p className='Content__Email'> migle.urbonaite@appliedtechnology.se </p>           
           </p>
        </div>
        </div>

        
        </>

    );
}

export default ContactMe;