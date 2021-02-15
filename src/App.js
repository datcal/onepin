import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from './components/main';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
    </Router>
   
  );
}

export default App;
