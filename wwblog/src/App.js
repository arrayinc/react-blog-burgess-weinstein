import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeTitle } from "./Jumbotron";
import { Navigation } from "./Navbar";
import { Slideshow } from "./Carousel";
import PgBtm from "./Footer";

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeTitle />
      <Slideshow />
      <PgBtm />
    </div>
  );
}

export default App;
