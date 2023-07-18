import data from '../Info/projects.json'
import Project from './Project';


const Projects = () => {
	console.log(data)
	
	return (
		<>
		<div >
		{data.projects.map(project => (
			<div className="ContentBox">
			<Project project= {project}  />
			</div>

		))}
        
      
		</div>
			
		</>
	);
};
export default Projects;
