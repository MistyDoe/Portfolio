
const Project = ({project}) => {
	
	return (
		<>
        <div>
		{project.name},
        {project.description},
        {project.github},
        {project.link}
			
        </div>
		</>
	);
};
export default Project;
