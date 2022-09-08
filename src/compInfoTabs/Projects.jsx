
import Banner from '../compStatic/Banner';

const Projects = () => {

    return (
        <>
        <Banner/>
        <div className='Layout'>
        <div className='Content'>
        <div className='circle circle__Proj'>
                <h2 className='Title__AboutMe'>Student portal</h2> 
                </div>
                <iframe className='video' width="300" height="200" src="https://youtu.be/2B3mXdnSOKU"></iframe>
           <p className='Project__bttn'>
            <div>
              <p className='Content__text'>Graduation project.
A student portal to provide access to all the resources. Authentication is done by using Auth0. The client was built using React and Material UI. For the backend Asp.net, web API were used, together with Entity framework core for database management.   </p>           
                <a className='bttn' href="https://github.com/cetinarslan-it/Salt-Iverse" target="_blank">GitHub</a><br/>
              </div>
           
           </p>
        </div>
        </div>
        </>

    );
}

export default Projects;