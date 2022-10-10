import "../App.css";

const AboutMe = () => {
	return (
		<>
			<section className="ContentBox">
				<header className="Title">
					<div className="Bubble">About Me</div>
				</header>
				<div className="Content">
					<p className="Text AboutMe">
						HI! <br />
						My name is Migle and I am a Full stack .Net developer based in
						Sweden. I am from Södertälje, where I live with my partner and two
						adorable kittens. I recently graduated from the full stack .Net
						boot-camp offered by{" "}
						<a href="https://www.salt.study/our-hubs/stockholm"> Salt </a>.
						<br />
						I have degrees in infectious disease control, health informatics,
						bioinformatics, and public health. Through my studies I developed an
						interest in mathematics and machine learning.
						<br />
						I started as an academic with an interest in mathematics. With time
						I developed an interest in data sciences, where I was exposed to
						coding for the first time. At first, I thought that it was machine
						learning and AI that attracted me, but with time I realized I
						&#10084;&#65039; coding. This was the point where I started to
						consider a career change.
						<br />
						I graduated in 'covid times', when there were very few Ph.D.
						position openings. My interest in a very niche area of ​​infectious
						disease modeling didn't help either. After a few months of no
						success, I decided to *try* software development as a possibility or
						a fallback. I told myself that while the academic field is
						recovering I can attend a boot camp, but after it, I will go
						straight back to academia. Well... I really LOVED the boot camp. I
						enjoyed the fun parts, but more importantly, I really appreciated
						the hard parts. <br />
						Now that I have graduated, software development is the passion that
						I want to pursue. I am continuously improving my skill set as a
						developer, in machine learning, and data sciences. I hope one day to
						find my area of ​​expertise and work on something big, that affects
						the future of the field.
					</p>
					<br />
					<div className="Content__Bttns">
						<a
							className="bttn"
							href="https://github.com/MistyDoe"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<br />
						<a
							className="bttn"
							href="https://docs.google.com/document/d/1L6FyANTqxvjJYX_iZmYmXdqS9i6oPJ0PaIaHmRqSiYo/edit?usp=sharing'"
							target="_blank"
							rel="noreferrer"
						>
							Cv
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutMe;
