import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router, Link } from "@reach/router";
import Home from "./pages/home";
import Main from "./pages/main";

const App = ({ children }) => (
  <Router>
    <Home path="/" />
    <Main path="/main" />
  </Router>
);


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
