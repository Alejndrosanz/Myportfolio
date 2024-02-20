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

function Project5() {
	return (
		<div className="Espresso">
			<img className="R5" src={images['R5.png']} alt="rectangle5" />
			<div className="MyComponent">
				<SRLWrapper>
          <img className="mart visibility" src={images['P61.jpg']} alt="MART" />
          <img className="mart visibility" src={images['P62.png']} alt="MART" />
          <img className="mart" src={images['Mart-mockup.png']} alt="MART" />
				</SRLWrapper>
			</div>
			<div className='mart-text'>
				<hr className="Line6" />
				<h1 className="Tittle5">M-art</h1>
				<p className="Text5">
        The client in question hails from Greece, where her ardor for the arts holds precedence. <br/>
          In our creative endeavors, we drew upon the Greek letter "µ," representing "micro" in the Hellenic language, as well as serving as the initial letter of her name. This deliberate choice facilitated the seamless amalgamation of both classical and contemporary artistic influences.
          <br /><br />
          2021
				</p>
			</div>
		</div>
	);
}

export default Project5;
