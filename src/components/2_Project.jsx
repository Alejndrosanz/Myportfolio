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

function Project2() {
	return (
		<div>
			<img className="R2" src={images['R2.png']} alt="rectangle2" />
			<div className="MyComponent">
				<SRLWrapper>
          <img className="vloyal visibility" src={images['vloyal2.png']} alt="vloyal" />
					<img className="vloyal visibility" src={images['vloyal3.png']} alt="vloyal" />
					<img className="vloyal visibility" src={images['vloyal4.png']} alt="vloyal" />
					<img className="vloyal" src={images['vloyal1.png']} alt="vloyal" />
				</SRLWrapper>
			</div>

			<div>
				<hr className="Line3" />
				<h1 className="Tittle2">V-Loyal</h1>
				<p className="Text2">
				I created a new logo for a premium brand of luxury cars. This logo takes its inspiration from the Hispanic Crown as the manufacture is based in Spain.
				</p>
			</div>
		</div>
	);
}

export default Project2;
