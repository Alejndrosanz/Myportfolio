import React from 'react';
import Project1 from './1_Project';
import Project2 from './2_Project';
import Project3 from './3_Project';
import Project4 from './4_Project';
import Project5 from './5_Project';
import Project6 from './6_Project';
import SimpleReactLightbox from 'simple-react-lightbox';

function body() {
	return (
		<div className="Body">
			<SimpleReactLightbox>
				<Project1 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<Project2 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<Project3 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<Project4 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<Project5 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<Project6 />
			</SimpleReactLightbox>
		</div>
	);
}

export default body;
