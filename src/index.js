import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './../node_modules/material-design-lite/material.min.css';
import './../node_modules/material-design-lite/material.min.js';


import Routes from './Routes';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));

registerServiceWorker();
