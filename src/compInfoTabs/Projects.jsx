const Projects = () => {
	return (
		<>
			<section className="ContentBox">
				<header className="Title">
					<div className="Bubble" id="Portfolio">
						Portfolio
					</div>
				</header>
				<div className="Content">
					<div>
						<p className="Text">
							{" "}
							A website for me to show my work in a centralized manner.
							Developed using React and hosted using GitHub pages. Contact from
							uses EmailJS.{" "}
						</p>
						<div className="Content__Bttns">
							<a
								className="bttn"
								href="https://github.com/MistyDoe/Portfolio"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="ContentBox">
				<header className="Title">
					<div className="Bubble BubbleMultLines">Student Portal</div>
				</header>
				<div className="Content">
					<p className="Text">
						Graduation project. A student portal to provide access to all the
						resources. Authentication is done by using Auth0. The client was
						built using React and Material UI. For the backend Asp.net framework
						was used, together with Entity framework core for database
						management.{" "}
					</p>
					<div className="Content__Bttns">
						<a
							className="bttn"
							href="https://github.com/cetinarslan-it/Salt-Iverse"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							className="bttn"
							href="https://youtu.be/2B3mXdnSOKU"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>
					</div>
				</div>
			</section>
		</>
	);
};
export default Projects;
