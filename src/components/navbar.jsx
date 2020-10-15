import React from 'react';
import Essence from './assets/essence.png';

function navbar() {
	return (
		<div>
			<img className="essence" src={Essence} alt="essenceHeading" />
			<a className="navbar navbar1" href="index.html#Aboutme">
				About Me
			</a>
			<a className="navbar navbar2" href="index.html#Projects">
				Projects
			</a>
			<a className="navbar navbar3" href="index.html#Contact">
				Contact Me
			</a>
		</div>
	);
}

export default navbar;
