import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactMe = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_6oocaft",
				"template_dxdgzqm",
				form.current,
				"hL1x5ExLMM0eoVdIh"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("SUCCESS!");
				},
				(error) => {
					console.log(error.text);
					alert("FAILED...", error);
				}
			);
	};
	return (
		<>
			<section className="ContentBox">
				<header className="Title">
					<div className="Bubble BubbleMultLines">Contact Form</div>
				</header>
				<form className="Form" ref={form} onSubmit={sendEmail}>
					<div className="Text">
						<label for="name">Name</label><br/>
						<input
							type="name"
							name="name"
							class="Form__field"
							id="name"
							placeholder="enter your name"
						/>
					</div>

					<div className="Text">
						<label for="email">Email address</label><br/>
						<input
							type="email"
							name="email"
							class="Form__field"
							id="email"
							placeholder="enter your email"
						/>
					</div>
					<div className="Text">
						<label for="subject">Subject</label><br/>
						<input
							type="text"
							name="subject"
							class="Form__field"
							id="subject"
							placeholder="enter email subject"
						/>
					</div>

					<div className="Text">
						<label for="email_body">Message</label><br/>
						<textarea class="Form__Msg" id="email_body" rows="5"></textarea>
					</div>

					<button type="submit" class="bttn">
						Submit
					</button>
				</form>
			</section>
		</>
	);
};

export default ContactMe;
