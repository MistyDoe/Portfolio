
import Banner from '../compStatic/Banner';

const Projects = () => {

    return (
        <>
     
        <div className='Layout Layout__Proj'>
        <div className='Content'>
        <div className='circle circle__Proj'>
                <h2 className='Title__AboutMe'>Student portal</h2> 
                </div>
           <div className='Project__Content'>
            <div>
              <p className='Proj__text'>Graduation project.
A student portal to provide access to all the resources. Authentication is done by using Auth0. The client was built using React and Material UI. For the backend Asp.net, web API were used, together with Entity framework core for database management.   </p>           
                <div className='Proj__Bttn'>               
                <a className='bttn' href="https://github.com/cetinarslan-it/Salt-Iverse" target="_blank">GitHub</a>
                <a className='bttn' href="https://youtu.be/2B3mXdnSOKU" target="_blank">Demo</a>
                </div>
              </div>           
           </div>
        </div>
        </div>
        </>
    );
}
export default Projects;