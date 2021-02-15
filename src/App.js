import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from './components/main';
import HomePage from './components/homepage';

function App() {
  console.log(process.env);
  return (
    <Router>
      <Route path="/:username" exact component={Main} />
      <Route path="/" component={HomePage} />
    </Router>
   
  );
}

export default App;
