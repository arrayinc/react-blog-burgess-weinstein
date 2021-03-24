import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import RecipesHome from "./RecipesHome";
import HomePage from "./HomePage";
import Authors from "./Authors";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/Recipes" component={RecipesHome} />
        <Route path="/Authors" component={Authors} />
        <Route path="/About" component={HomePage} />
        <Route path="/Contact" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
