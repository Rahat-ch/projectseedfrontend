import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import * as serviceWorker from './serviceWorker';
import App from './App'

dotenv.config();

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
