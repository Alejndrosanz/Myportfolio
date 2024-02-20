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
				Web app for users to create and showcase their supper club events, as well as to book and purchase tickets to different supper clubs. <br />
        This project serves as part of one of the final projects of LeWagon bootcamp (Airbnb clone) which was built in a week time by a group of four.
        <br/> Led and managed the front end design and participated on the full stack development of the site .<br/>
        <br/>
        2023
				</p>
			</div>
		</div>
	);
}

export default Project3;
