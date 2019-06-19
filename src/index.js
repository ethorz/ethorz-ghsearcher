import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';

import {unregister} from "./registerServiceWorkers";

ReactDOM.render(<App />, document.getElementById('root'));
if (module.hot) {
    module.hot.accept('components/App', () => {
        const NextRoot = require('components/App').default;
        ReactDOM.render(<NextRoot />, document.getElementById('root'));
    });
}

unregister();