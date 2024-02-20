import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function Project6() {
	return (
		<div className="Mart">
			<img className="R6" src={images['R6.png']} alt="rectangle6" />
			<div className="MyComponent">
				<SRLWrapper>
          <img className="anxiety visibility" src={images['P31.png']} alt="Anxiety" />
					<img className="anxiety" src={images['P3.png']} alt="Anxiety" />
				</SRLWrapper>
			</div>
			<div className="anxiety-text">
				<hr className="Line7" />
				<h1 className="Tittle6">Anxiety</h1>
				<p className="Text6">
        In this graphic design project, the focus is on creating an impactful advertisement aimed at raising awareness about anxiety disorders and breaking the stigma surrounding mental health. <br/>
        The overarching goal is to foster understanding, empathy, and support for those experiencing anxiety while encouraging individuals to seek help when needed.
          <br /><br />
          2020
				</p>
			</div>
		</div>
	);
}

export default Project6;
