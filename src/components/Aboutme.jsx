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
				Fledgling Graphic Designer with working experience in Digital Marketing and Creative Content, working forward the last two years developing a vision of myself in this field.
				</p>
				<p className="AboutMe2">
				The fascination of Web Development and Programming has been part of my life since an early age. I’ve
					been getting introduced much more lately into this field until the point of creating my own website.
				</p>
				<p className="AboutMe3">
					Nowadays I’ve been working on these two areas as a freelancer and also in the meantime studying
					them. Challenging myself is who I am.
				</p>
				<hr className="Line12" />
			<p className="Mysign">Alejandro Sanz Rodriguez</p>
			</div>
		</div>
	);
}

export default AboutMe;
