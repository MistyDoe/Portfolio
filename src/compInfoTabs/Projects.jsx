import data from '../Info/projects.json'
import Project from './Project';


const Projects = () => {
	console.log(data)
	
	return (
		<>
		<div>
		{data.projects.map(project => (
			<Project project= {project}  />

		))}
        
      
		</div>
			
		</>
	);
};
export default Projects;
