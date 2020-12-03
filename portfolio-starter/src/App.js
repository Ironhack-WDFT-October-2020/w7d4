import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import ProjectDetails from './ProjectDetails';
import { Route, Switch } from "react-router-dom";

const NotFound = () => {
  return <h1>404 Not Found 🙃</h1>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Switch will only render one route - the first one that matches */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>

  );
}

export default App;