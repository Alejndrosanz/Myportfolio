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
				<h1 className="Tittle2">Branding</h1>
				<p className="Text2">
				I created a new logo for a premium brand of luxury cars. This logo takes its inspiration from the Hispanic Crown as the manufacture is based in Spain.
				</p>
			</div>
		</div>
	);
}

export default P2;
