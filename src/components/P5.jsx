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
          <img className="P5 visibility" src={images['P61.jpg']} alt="ARTWORK" />
          <img className="P5 visibility" src={images['P62.png']} alt="ARTWORK" />
          <img className="P5" src={images['P6.png']} alt="ARTWORK" />
				</SRLWrapper>
			</div>
			<div>
				<hr className="Line6" />
				<h1 className="Tittle5">Branding</h1>
				<p className="Text5">
				The challenge was to develop a new coffee shop’s branding in London. Its concept is utilizing the appearance of independent coffee shops with the efficiency of large brands.
				</p>
			</div>
		</div>
	);
}

export default P5;
