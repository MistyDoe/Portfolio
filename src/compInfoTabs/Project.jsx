
const Project = ({project}) => {
	
	return (
		<>
        <div className="Bubble">
		{project.name}
        </div>
        <div className="ContentBox">
        {project.description} 
        </div>
        <div className="Content__Bttns">
            <a
                className="bttn"
                href={project.github}
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
            
            <a
                className="bttn"
                href={project.link}
                target="_blank"
                rel="noreferrer"
            >
                Demo
            </a>
            
            </div>
		</>
	);
};
export default Project;
