import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<>
			<section className="ContentBox Landing">
				<header className="Title">
					<div className="Bubble">HI!</div>
				</header>
				<p className="Text">
					{" "}
					Welocome to my protfolio <br></br>
					Grab a &#127850; and enjoy your time!
				</p>
			</section>
			<section className="ContentBox Landing">
				<header className="Title">
					<div className=" Bubble BubbleMultLines">Working On:</div>
				</header>

				<div className="CurrentlyWorking Landing"></div>
				<ul className="ListWorking">
					<li>
						<Link to="/projects" className="bttn">
							{" "}
							Portfolio website
						</Link>{" "}
					</li>
				</ul>
			</section>
			<section className="ContentBox Landing">
				<header className="Title">
					<div className="Bubble BubbleMultLines">My Work:</div>
				</header>
				<div className="Carousel__Proj"></div>
				<ul className="List__Proj">
					<li></li>
				</ul>
			</section>
		</>
	);
};

export default Landing;
