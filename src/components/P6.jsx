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

function P6() {
	return (
		<div className="Mart">
			<img className="R6" src={images['R6.png']} alt="rectangle6" />
			<div className="MyComponent">
				ç<SRLWrapper>
					<img className="P6" src={images['P1.png']} alt="Gallery" />
				</SRLWrapper>
			</div>
			<div>
				<hr className="Line7" />
				<h1 className="Tittle6">Web Design</h1>
				<p className="Text6">
					Art is a kind of representation that is purposive in itself and, though without an end, nevertheless
					promotes the cultivation of the mental powers for sociable communication.
				</p>
			</div>
		</div>
	);
}

export default P6;
