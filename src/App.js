import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Landing from "./modules/Landing/pages/Landing";
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
