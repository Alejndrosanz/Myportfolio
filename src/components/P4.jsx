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

function P4() {
	return (
		<div className="Emotions">
			<img className="R4" src={images['R4.png']} alt="rectangle4" />
			<div className="MyComponent">
				<SRLWrapper>
          <img className="P4 visibility" src={images['P52.png']} alt="CRAFT ESPRESSO" />
					<img className="P4 visibility" src={images['P53.png']} alt="CRAFT ESPRESSO" />
					<img className="P4 visibility" src={images['P51.png']} alt="CRAFT ESPRESSO" />
					<img className="P4" src={images['P5.png']} alt="CRAFT ESPRESSO" />
				</SRLWrapper>
			</div>
			<div>
				<hr className="Line5" />
				<h1 className="Tittle4">Art Work</h1>
				<p className="Text4">
					No aspect of our mental life is more important to the quality and meaning of our existence than the
					emotions. They are what make life worth living and sometimes worth ending.
				</p>
			</div>
		</div>
	);
}

export default P4;
