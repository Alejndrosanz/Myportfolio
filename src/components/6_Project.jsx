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
				Art is a representation that it has its purpose in itself without an end. Nevertheless promoting the cultivation of mental powers for sociable communication.
				</p>
			</div>
		</div>
	);
}

export default Project6;
