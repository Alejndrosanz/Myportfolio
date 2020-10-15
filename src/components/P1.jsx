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
					<h1 className="Tittle1">M*art</h1>
					<p className="Text1">
						Mart logo was created based on the Greek letter µ as the main point, following by the biggest
						passion of my client which is the art. My client is greek and one of her main thoughts were
						trying to combine in a smooth way, Ancient and Modern art.
					</p>
				</div>
			</div>
		</div>
	);
}

export default P1;
