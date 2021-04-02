import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import Geralt from "../Images/Carousel/Geralt.jpg";
import Travelers from "../Images/Carousel/Travelers.jpeg";
import GroupCheers from "../Images/Carousel/GroupCheers.webp";

export class Slideshow extends Component {
  render() {
    return (
      <Carousel className="carousel-container" overflow-hidden fade>
        <Carousel.Item className="CarouselOpacity">
          <img
            className="d-block w-100"
            src={Travelers}
            alt="Group of adventurers"
          />
          <Carousel.Caption>
            <h3 class="witcher-font">Travelers</h3>
            <p class="witcher-font">
              Learn about the wonderful authors that graced this humble blog
              with recipes galore
              <br />
              <br />
              <Button variant="danger" href="/Authors">
                Who are they and where did they hail from?
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="CarouselOpacity">
          <img
            className="d-block w-100"
            src={Geralt}
            alt="Man teleporting onto a table"
          />
          <Carousel.Caption>
            <h3 class="witcher-font">"Hmmm..." -Geralt of Rivia</h3>
            <p class="witcher-font">
              Join Geralt as he recounts his tales<br />of gourmet adventures on the
              Continent.
              <br />
              <br />
              <Button variant="danger" href="/Recipes">
                Explore Recipes
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselOpacity">
          <img
            className="d-block w-100"
            src={GroupCheers}
            alt="Group in tarvern cheersing"
          />
          <Carousel.Caption>
            <h3 class="witcher-font">"Nonsense...And What's More, It Doesn't Rhyme.<br /> All Decent Predictions Rhyme."</h3>
            <p class="witcher-font">
              Have any questions?
              <br />
              <br />
              <Button variant="danger" href="/Contact">
                Send us a sonnet
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
