import React, { Component } from "react";
import "./index.css";
import { Carousel, Button } from "react-bootstrap";

export class Slideshow extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://media.giphy.com/media/lPRLQmMlEZ9M7TxBYO/giphy.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>"Hmmm..." -Geralt of Rivia</h3>
            <p>
              Join Geralt as he recounts his tales of gourmet adventures on the
              Continent.
              <br />
              <br />
              <Button href="/About">Tell me a story</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/55/43/de/5543ded702377e41f4337faf883eba2b.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Travelers</h3>
            <p>
              Learn about the wonderful authors that graced a humble blogger
              with recipes galore
              <br />
              <br />
              <Button href="/Authors">Who are they and where did they hail from?</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.giphy.com/media/KzWAhzWD3HrJyAcLEM/giphy.gif"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Taste of Hearth</h3>
            <p>
              Check out the recipes gathered from across the Continent!
              <br />
              <br />
              <Button href="/Recipes">Get Cookin'</Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
