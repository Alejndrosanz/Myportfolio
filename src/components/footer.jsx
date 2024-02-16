import React from 'react';
import Essence from './assets/essence.png';
import R7 from './assets/R7.png';
import R8 from './assets/R8.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDribbble, faBehance, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Instagram = <FontAwesomeIcon icon={faInstagram} size="2x" />;
const Behance = <FontAwesomeIcon icon={faBehance} size="2x" />;
const Github = <FontAwesomeIcon icon={faGithub} size="2x" />;
const Linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;

const year = new Date().getFullYear();

function footer() {
	return (
		<div>
			<img className="Essence2" src={Essence} alt="Essence2" />
      <div className="socials">
			<img className="R7" src={R7} alt="Rectangle7" />
			<img className="R8" src={R8} alt="Rectangle8" />
			<button className="btn btn-l">
				<a href="https://www.instagram.com/alejndrosanz/" target="_blank">
					<span className="IconI">{Instagram}</span>
					<span className="UserI">/ alejndrosanz</span>
				</a>
			</button>
			<button className="btn btn-d">
				<a href="https://www.behance.net/alejandsanzro" target="_blank">
					<span className="IconB">{Behance}</span>
					<span className="UserB">/ alejndrosanz</span>
				</a>
			</button>
			<button className="btn btn-b">
				<a href="https://github.com/Alejndrosanz" target="_blank">
					<span className="IconD">{Github}</span>
					<span className="UserD">/ alejndrosanz</span>
				</a>
			</button>
			<button className="btn btn-i">
				<a href="https://www.linkedin.com/in/alejandro-sanz-rodriguez-653328174/" target="_blank">
					<span className="IconL">{Linkedin}</span>
					<span className="UserL">/ alejndrosanz</span>
				</a>
			</button>
			<button className="CM">
				<a href="mailto:alex_sanz5@hotmail.com">Contact Me</a>
			</button>
      </div>
			<hr className="line9" />
			<h1 className="Copyright" id="Contact">
				©Copyright {year}
			</h1>
		</div>
	);
}

export default footer;
