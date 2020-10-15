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

function P5() {
	return (
		<div className="Espresso">
			<img className="R5" src={images['R5.png']} alt="rectangle5" />
			<div className="MyComponent">
				<SRLWrapper>
					<img className="P5" src={images['P5.png']} alt="CRAFT ESPRESSO" />
					<img className="P5" src={images['P52.png']} alt="CRAFT ESPRESSO" />
					<img className="P5" src={images['P53.png']} alt="CRAFT ESPRESSO" />
					<img className="P5" src={images['P51.png']} alt="CRAFT ESPRESSO" />
				</SRLWrapper>
			</div>
			<div>
				<hr className="Line6" />
				<h1 className="Tittle5">Coff*ee</h1>
				<p className="Text5">
					I worked on this project with the purpose of developing a new Coffee's shop branding in the
					neighbourhood where I used to live in London. It stands on the idea of mixing individual Coffee
					businesses appearence with the efficient services of the big Companies that exist nowadays.
				</p>
			</div>
		</div>
	);
}

export default P5;
