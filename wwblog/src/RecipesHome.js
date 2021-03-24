import React from "react";
import { BlogTitle } from "./BlogTitle";
import { Navigation } from "./Navbar";
import PageFooter from "./Footer";

function RecipesHome() {
    return (
      <div className="recipes-home">
          <Navigation />
          <BlogTitle />
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Recipe Summary 1</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Recipe Summary 2</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/300x300"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Recipe Summary 3</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
  
  export default RecipesHome;