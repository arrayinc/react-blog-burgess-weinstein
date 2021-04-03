import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import RecipesHome from "./Components/RecipesIndex";
import HomePage from "./Components/HomePage";
import Authors from "./Components/Authors";
import blogsData from "./Components/BlogData";
import BlogPost from "./Components/BlogPost";

import Navigation from "./Components/Navbar";
import PageFooter from "./Components/Footer";
import Signin from "./Components/Login";
import ContactPage from "./Components/Contact";

import ErrorPage from "./Components/ErrorPage";

// This App.js is the website itself and pulls on core components to eventually be compiled into the blog//

function App() {
  return (
    <main className="App">
      {/* This is the top navbar which also contains the title displayed top left of site */}
      <header>
        <Navigation />
      </header>
      <div className="body-container">
        {/* This builds the route for the home page and enables props for its component */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage blogData={blogsData} {...props} />}
          />
          {/* This builds the route for the Recipes Index page and enables props for its component RecipesIndex */}
          <Route
            path="/Recipes"
            render={(props) => <RecipesHome blogData={blogsData} {...props} />}
          />
          {/* These routes are visually stacked when visiting the Contact section */}
          <Route path="/Login" component={Signin} />
          <Route path="/Contact" component={ContactPage} />

          <Route
            path="/Authors/"
            render={(props) => <Authors blogData={blogsData} {...props} />}
          />

          {blogsData.map((val, index) => {
            return (
              <Route key={val.id} path={"/blogPost/" + val.id}>
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
