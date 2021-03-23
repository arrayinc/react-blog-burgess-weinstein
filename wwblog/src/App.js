import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeTitle } from "./Jumbotron";


// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Carousel from 'react-bootstrap/Carousel';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Blog with Eli + Vlad</h1>
      </header>
      <HomeTitle/>
    </div>
  );
}

export default App;
