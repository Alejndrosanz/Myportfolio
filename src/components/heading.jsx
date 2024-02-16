import React from 'react';
import ProfilePic from './assets/Profilepic.png';
import Ball from './assets/Ball.png';

function heading() {
	return (
		<div id="wrapper">
			<img className="profilepic" src={ProfilePic} alt="profilepic" />
      <div className="main-heading-div">
			  <p className="Myp">
			  	.My<br />Portfolio
			  </p>
			  <p className="MyN">Alejandro Sanz Rodriguez</p>
			  <img className="Ball" src={Ball} alt="Ball" />
			  <button className="DM">
			  	<a href="index.html#Aboutme">Discover Me</a>
			  </button>
      </div>
		</div>
	);
}

export default heading;
