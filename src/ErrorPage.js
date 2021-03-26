import React from "react";
import { Container } from "react-bootstrap";
import Error404 from "./ErrorPageBG/Error404.gif";

function ErrorPage() {
  return (
    <Container class="ErrorContainer">
      <img src={Error404} class="ErrorGIF" alt="Error 404" />
    </Container>
  );
}
export default ErrorPage;
