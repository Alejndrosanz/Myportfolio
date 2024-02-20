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
        Cheddar was created to facilitate the user to search, find and apply for new jobs opportunities at once.<br/>
			  Currently leading the front-end and UI development of the site.<br/><br />
        <a href="https://www.cheddarjobs.com/#">cheddarjobs.com</a><br/>
        <br/>
        2023 - Present
			  </p>
        <div className='Tools1'>
          <span className="tools">Ruby on rails</span>
          <span className="tools">Javascript</span>
          <span className="tools">CSS</span>
          <span className="tools">SASS</span>
          <span className="tools">Figma</span>
        </div>
			</div>
		</div>
	);
}

export default Project1;
