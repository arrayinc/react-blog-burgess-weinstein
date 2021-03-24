import React from "react";
import { BlogTitle } from "./BlogTitle";
import { Navigation } from "./Navbar";
import PageFooter from "./Footer";
import { Slideshow } from "./Carousel";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <BlogTitle />
      <Slideshow />
      <PageFooter />
    </>
  );
};

export default HomePage;
