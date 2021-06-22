import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "./modules/Landing/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
