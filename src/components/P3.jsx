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

function P3() {
	return (
		<div className="Anxiety">
			<img className="R3" src={images['R3.png']} alt="rectangle3" />
			<div className="MyComponent">
				<SRLWrapper>
					<img className="P3" src={images['P31.png']} alt="Anxiety" />
					<img className="P3" src={images['P3.png']} alt="Anxiety" />
				</SRLWrapper>
			</div>

			<div>
				<hr className="Line4" />
				<h1 className="Tittle3">Anxiety</h1>
				<p className="Text3">
					It's just more than a post trying to show the real truth of all the people who suffer anxiety around
					the world. With this project, I wanted to express the scary of loving and hating yourself in just
					about a second and making visible once more.<br />
					<br /> -Mental Health-
				</p>
			</div>
		</div>
	);
}

export default P3;
