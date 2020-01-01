import React from 'react';
import { Router } from "@reach/router";
import Home from "./pages/home";
import Main from "./pages/main";


const App = ({ children }) => (
  <Router>
    <Home path="/" />
    <Main path="/main" />
  </Router>
);

export default App;
