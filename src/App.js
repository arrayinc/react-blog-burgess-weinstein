import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import RecipesHome from "./RecipesHome";
import HomePage from "./HomePage";
import Authors from "./Authors";
import blogsData from "./BlogData";
import BlogPost from "./BlogPost";

import Navigation from "./Navbar";
import PageFooter from "./Footer";
import AboutPage from "./About";
import ContactPage from "./Contact";

import ErrorPage from "./ErrorPage";

function App() {
  return (
    <main className="App">
      <header>
        <Navigation />
      </header>
      <div className="body-container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Recipes" component={RecipesHome} />
          <Route path="/Authors" component={Authors} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Contact" component={ContactPage} />
          
          {blogsData.map((val, index) => {
            return (
              <Route path={"/blogPost/" + val.id}>
                <BlogPost blogData={val} />
              </Route>
            );
          })}
          <Route component={ErrorPage} />
        </Switch>

        <PageFooter />
      </div>
    </main>
  );
}

export default App;
