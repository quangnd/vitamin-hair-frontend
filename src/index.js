import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import App from './components/App';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
