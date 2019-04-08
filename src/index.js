import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './views/App';
import * as serviceWorker from './classes/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
