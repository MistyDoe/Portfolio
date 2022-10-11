import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";


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
						<Link to="/projects#Portfolio" className="bttn">
							{" "}
							Portfolio website
						</Link>{" "}
					</li>
				</ul>
			</section>
			<section className="ContentBox Landing MyWork">
				<header className="Title">
					<div className="Bubble BubbleMultLines">My Work:</div>
				</header>
				<div className="Carousel">
					<Swiper
						 effect={"cards"}
						 grabCursor={true}
						 modules={[EffectCards]}
						 className="swiper"
					>
						<SwiperSlide>
							<div className="Slide">
						<img
							className="ProjImage"
							src={require("../Images/Porfolio.png")}
							title="Portfolio Page"
							alt="Portfolio page"
						></img>
						<div className="Text"> Portfolio page</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="Slide">
						<img
							className="ProjImage"
							src={require("../Images/Student.png")}
							title="Student Portal"
							alt="Student Portal"
						></img>
						<div className="Text"> Student Portal</div>
							</div>
						</SwiperSlide>					
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Landing;
