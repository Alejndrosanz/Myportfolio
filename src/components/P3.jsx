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
					Anxiety is more than just worrying. Anxiety is the restless nights of sleep, as you toss and turn.
					It's your brain never being able to shut off. It's the thoughts you over-think before bedtime and
					all of your worst fears become a reality in dreams and nightmares.
				</p>
			</div>
		</div>
	);
}

export default P3;
