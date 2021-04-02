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
            className="carousel-image d-block w-100"
            src={Travelers}
            alt="Group of adventurers"
          />
          <Carousel.Caption >
            <h3 class="greatprimer-font">Travelers</h3>
            <p class="greatprimer-font">
              Learn about the wonderful authors that<br /> graced this humble blog
              with recipes galore
              <br />
              <br />
              <Button size="lg" variant="danger" href="/Authors">
                Meet The Bloggers
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="CarouselOpacity">
          <img
            className="carousel-image d-block w-100"
            src={Geralt}
            alt="Man teleporting onto a table"
          />
          <Carousel.Caption>
            <h3 class="greatprimer-font">"Hmmm..." -Geralt of Rivia</h3>
            <p class="greatprimer-font">
              Join Geralt as he recounts his tales<br />of gourmet adventures on the
              Continent.
              <br />
              <br />
              <Button size="lg" variant="danger" href="/Recipes">
                Explore Recipes
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselOpacity">
          <img
            className="carousel-image d-block w-100"
            src={GroupCheers}
            alt="Group in tarvern cheersing"
          />
          <Carousel.Caption>
            <h3 class="greatprimer-font">"Nonsense...And What's More, It Doesn't Rhyme.<br /> All Decent Predictions Rhyme."</h3>
            <p class="greatprimer-font">
              Have any questions?
              <br />
              <br />
              <Button size="lg" variant="danger" href="/Contact">
                Send a Sonnet
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
