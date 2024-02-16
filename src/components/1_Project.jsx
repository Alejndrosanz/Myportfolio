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

function Project1() {
	return (
		<div>
      <div className="start-div">
			<h1 className="Start">START</h1>
			<img className="Elipse" src={Elipse} alt="StartBall" />
			<hr className="Line" id="Projects" />
      </div>
			<div>
				<img className="R1" src={images['R1.png']} alt="rectangle1" />
				<div className="MyComponent">
					<SRLWrapper>
          <img className="cheddar visibility" src={images['cheddar3.png']} alt="cheddar" />
            <img className="cheddar visibility" src={images['cheddar2.png']} alt="cheddar" />
					  <img className="cheddar" src={images['cheddar1.png']} alt="cheddar" />
					</SRLWrapper>
				</div>

				<div className='cheddar-text'>
					<hr className="Line2" />
					<h1 className="Tittle1">Cheddar</h1>
					<p className="Text1">
					My client is greek and her passion is art. We used µ which is micro in greek, and also the first letter of her name. Allowing us to combine both ancient and modern art.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Project1;
