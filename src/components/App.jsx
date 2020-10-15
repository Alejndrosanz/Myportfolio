import React from 'react';
import Logo from './assets/logo.svg';
import Navbar from './navbar';
import Heading from './heading';
import Body from './body';
import Footer from './footer';
import AboutMe from './Aboutme';
import SimpleReactLightbox from 'simple-react-lightbox';
import { setConfiguration, ScreenClassProvider, Container } from 'react-grid-system';
import PropTypes from 'prop-types';

const App = ({ fallbackScreenClass }) => {
	setConfiguration({
		breakpoints: [ 576, 768, 800, 1200, 1600 ]
	});
	return (
		<ScreenClassProvider fallbackScreenClass={fallbackScreenClass}>
			<Container fluid>
				<img className="logo" src={Logo} alt="logo" />
				<Navbar />
				<Heading />
				<SimpleReactLightbox>
					<Body />
				</SimpleReactLightbox>
				<AboutMe />
				<Footer />
			</Container>
		</ScreenClassProvider>
	);
};
App.propTypes = {
	fallbackScreenClass: PropTypes.oneOf([ 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ])
};

App.defaultProps = {
	fallbackScreenClass: 'xl'
};

export default App;
