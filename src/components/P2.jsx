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

function P2() {
	return (
		<div>
			<img className="R2" src={images['R2.png']} alt="rectangle2" />
			<div className="MyComponent">
				<SRLWrapper>
					<img className="P2" src={images['P23.png']} alt="V.E.C." />
					<img className="P2" src={images['P22.png']} alt="V.E.C." />
					<img className="P2" src={images['P2.png']} alt="V.E.C." />
					<img className="P2" src={images['P21.png']} alt="V.E.C." />
				</SRLWrapper>
			</div>

			<div>
				<hr className="Line3" />
				<h1 className="Tittle2">V.E.C., Car Revolution</h1>
				<p className="Text2">
					I created this brand as my final work in my studies. I was trying to make a premium brand of cars
					that could offer more than a luxury brand can do nowadays. Furthermore, I made this logo from the
					inspiration of the Hispanic crown because this new brand it's supposed to be created in Spain, and I
					really wanted to show that from the beginning until the end.
				</p>
			</div>
		</div>
	);
}

export default P2;
