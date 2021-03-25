import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import RecipesHome from "./RecipesHome";
import HomePage from "./HomePage";
import Authors from "./Authors";
import { BlogTitle } from "./BlogTitle";
import { Navigation } from "./Navbar";
import PageFooter from "./Footer";
import AboutPage from "./About";
import ContactPage from "./Contact";
import LambPost from "./LambPost";
import PizzaPost from "./PizzaPost";
import WinePost from "./WinePost";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BlogTitle />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/Recipes" component={RecipesHome} />
        <Route path="/Authors" component={Authors} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Contact" component={ContactPage} />
        <Route path="/LambPost" component={LambPost} />
        <Route path="/PizzaPost" component={PizzaPost} />
        <Route path="/WinePost" component={WinePost} />
      </Switch>
      <PageFooter />
    </div>
  );
}

export default App;
