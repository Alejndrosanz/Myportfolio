import React from 'react';
import Symbol from './assets/Symbol.png';

function AboutMe() {
	return (
		<div>
			<h1 className="Abm" id="Aboutme">
				DISCOVER ME
			</h1>
			<hr className="Line10" />
			<div>
				<img className="Symbol" src={Symbol} alt="symbol" />
				<h2 className="Abm2">Hi, there! It's Alejandro</h2>
				<hr className="Line11" />
				<p className="AboutMe">
					I’m a qualified junior graphic designer with working experience in digital marketing and creative
					content. Also, it’s been more than two years working on my skills to develop a better version of me
					in this field.
				</p>
				<p className="AboutMe2">
					In another hand, the fascination of web development and programming was born in me a while ago. I’ve
					been getting introduced much more lately into this field until the point of creating my own website.
				</p>
				<p className="AboutMe3">
					Nowadays I’ve been working on these two areas as a freelancer and aslo in the meantime studying
					them. Growing and challenging myself it has been always the best goal for me.
				</p>
				<hr className="Line12" />
				<p className="Mysign">Alejandro Sanz Rodriguez</p>
			</div>
		</div>
	);
}

export default AboutMe;
