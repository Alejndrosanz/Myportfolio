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

function Project4() {
	return (
		<div className="Emotions">
			<img className="R4" src={images['R4.png']} alt="rectangle4" />
			<div className="MyComponent">
				<SRLWrapper>
          <img className="craft visibility" src={images['P52.png']} alt="CRAFT ESPRESSO" />
					<img className="craft visibility" src={images['P53.png']} alt="CRAFT ESPRESSO" />
					<img className="craft visibility" src={images['P51.png']} alt="CRAFT ESPRESSO" />
					<img className="craft" src={images['P5.png']} alt="CRAFT ESPRESSO" />
				</SRLWrapper>
			</div>
			<div className='craft-text'>
				<hr className="Line5" />
				<h1 className="Tittle4">CRAFT Espresso</h1>
				<p className="Text4">
          The task presented was the strategic development of branding for a novel coffee emporium situated within the bustling urban landscape of London. The core concept entailed the fusion of the visual aesthetics of this crafting.
          <br />
          Its concept is utilizing the appearance of independent coffee shops with the efficiency of large brands.
          <br /><br />
          2021
				</p>
			</div>
		</div>
	);
}

export default Project4;
