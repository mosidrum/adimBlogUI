import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './Countdown';
import './index.css';

const App = () => (
	// Example target date; consumer will provide desired date
	<Countdown date={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()} />
);

ReactDOM.render(<App />, document.querySelector('#root'));