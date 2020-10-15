import React from 'react';
import P1 from './P1';
import P2 from './P2';
import P3 from './P3';
import P4 from './P4';
import P5 from './P5';
import P6 from './P6';
import SimpleReactLightbox from 'simple-react-lightbox';

function body() {
	return (
		<div className="Body">
			<SimpleReactLightbox>
				<P1 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<P2 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<P3 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<P4 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<P5 />
			</SimpleReactLightbox>
			<SimpleReactLightbox>
				<P6 />
			</SimpleReactLightbox>
		</div>
	);
}

export default body;
