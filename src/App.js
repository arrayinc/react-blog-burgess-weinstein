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
import Signin from "./Components/SignUp";
import ContactPage from "./Components/Contact";

import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <main className="App">
      <header>
        <Navigation />
      </header>
      <div className="body-container">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage blogData={blogsData} {...props} />}
          />

          <Route path="/Recipes" render={(props) => <RecipesHome blogData={blogsData} {...props} />}
          />
          <Route path="/Signup" component={Signin} />
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
