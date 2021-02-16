import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from './components/main';
import HomePage from './components/homepage';

function App() {
  //console.log(process.env);
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/:username" component={Main} />
    </Router>
   
  );
}

export default App;
