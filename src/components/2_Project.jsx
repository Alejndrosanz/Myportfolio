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

			<div className='vloyal-text'>
				<hr className="Line3" />
				<h1 className="Tittle2">V-Loyal</h1>
				<p className="Text2">
				VLoyal was created to turn paper loyalty cards into virtual loyalty cards storing them in one app, using a QR code scanner to app virtual stamps.<br/>
        Managed the whole UI and Front-end development of the mobile app and collaborated on several Back-end features, including structuring the entire user journey and schema.<br/>
        <br/>
        <a href="https://vloyal-9cfecae07662.herokuapp.com/users/sign_in">vloyal.com</a>
        <br/><br/>
        2023
				</p>
			</div>
		</div>
	);
}

export default Project2;
