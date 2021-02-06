import React from 'react';
import Elipse from './assets/elipse2.png';
import { SRLWrapper } from 'simple-react-lightbox';

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}
const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

function P1() {
	return (
		<div>
			<h1 className="Start">START</h1>
			<img className="Elipse" src={Elipse} alt="StartBall" />
			<hr className="Line" id="Projects" />
			<div>
				<img className="R1" src={images['R1.png']} alt="rectangle1" />
				<div className="MyComponent">
					<SRLWrapper>
						<img className="P1" src={images['P61.jpg']} alt="Mart" />
						<img className="P2" src={images['P62.png']} alt="Mart" />
						<img className="P1" src={images['P6.png']} alt="Mart" />
					</SRLWrapper>
				</div>

				<div>
					<hr className="Line2" />
					<h1 className="Tittle1">Logo Design</h1>
					<p className="Text1">
					My client is greek and her passion is art. We used µ which is micro in greek, and also the first letter of her name. Allowing us to combine both ancient and modern art.
					</p>
				</div>
			</div>
		</div>
	);
}

export default P1;
