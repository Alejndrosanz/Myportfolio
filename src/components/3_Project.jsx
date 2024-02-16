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

function Project3() {
	return (
		<div className="Anxiety">
			<img className="R3" src={images['R3.png']} alt="rectangle3" />
			<div className="MyComponent">
				<SRLWrapper>
					<img className="supperclub visibility" src={images['supperclub1.png']} alt="supperclub" />
					<img className="supperclub" src={images['supperclub2.png']} alt="supperclub" />
				</SRLWrapper>
			</div>

			<div className='supperclub-text'>
				<hr className="Line4" />
				<h1 className="Tittle3">Supper-club</h1>
				<p className="Text3">
				Anxiety is the restless nights, the feeling of being lonely, the monster whose task is feeding itself with our worst fears. It's your brain never being able to shut off.
				</p>
			</div>
		</div>
	);
}

export default Project3;
