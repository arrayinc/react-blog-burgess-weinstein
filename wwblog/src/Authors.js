import React from "react";
import "./Authors.css";
import { Container, Row, Col} from "react-bootstrap";
import Geralt from "./AuthorPhotos/Geralt.jpg";
import Yennefer from "./AuthorPhotos/Yennefer.jpg";
import Jaskier2 from "./AuthorPhotos/Jaskier2.jpg";

function TheAuthors() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            class="authors"
            src={Yennefer}
            alt="Woman sitting in portrait stance"
          />
        </Col>
        <Col>
          <img
            class="authors"
            src={Geralt}
            alt="Man with sword"
          />
        </Col>
        <Col> <img
          class="authors"
          src={Jaskier2}
          alt="Fantiful man in purple garb"
        /></Col>
      </Row>
      <Row>
        <Col>Yennefer-</Col>
        <Col>Geralt</Col>
        <Col>Jaskier</Col>
      </Row>
    </Container>
  );
}


export default TheAuthors;
  // <div className="authors">
  //       <div class="container">
  //         <div class="row align-items-center my-5">
  //           <div class="col-lg-7">
  //             <img
  //               class="authors" 
  //               src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab16637f-6c98-4e9e-a25f-791825aecdcd/dc69cmc-398c9733-5af5-4622-a7da-04634202b104.jpg/v1/fill/w_683,h_1024,q_75,strp/geralt_by_deathbattledino_dc69cmc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDI0IiwicGF0aCI6IlwvZlwvYWIxNjYzN2YtNmM5OC00ZTllLWEyNWYtNzkxODI1YWVjZGNkXC9kYzY5Y21jLTM5OGM5NzMzLTVhZjUtNDYyMi1hN2RhLTA0NjM0MjAyYjEwNC5qcGciLCJ3aWR0aCI6Ijw9NjgzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._nVlJ2A_fTwcLfd7kPFiJG2R7AscKik3zHyvA_OKnso" width="200px" height="300px"
  //               alt="Geralt of Rivia"
  //             />
  //           </div>
  //           <div class="col-lg-5">
  //             <h1 class="font-weight-light">Author 1</h1>
  //             <p>
  //               Lorem Ipsum is simply dummy text of the printing and typesetting
  //               industry. Lorem Ipsum has been the industry's standard dummy text
  //               ever since the 1500s, when an unknown printer took a galley of
  //               type and scrambled it to make a type specimen book.
  //             </p>
  //           </div>
  //         </div>
  //         <div class="row align-items-center my-5">
  //           <div class="col-lg-7">
  //             <img
  //               class="img-fluid rounded mb-4 mb-lg-0"
  //               src="http://placehold.it/300x300"
  //               alt=""
  //             />
  //           </div>
  //           <div class="col-lg-5">
  //             <h1 class="font-weight-light">Author 2</h1>
  //             <p>
  //               Lorem Ipsum is simply dummy text of the printing and typesetting
  //               industry. Lorem Ipsum has been the industry's standard dummy text
  //               ever since the 1500s, when an unknown printer took a galley of
  //               type and scrambled it to make a type specimen book.
  //             </p>
  //           </div>
  //         </div>
  //         <div class="row align-items-center my-5">
  //           <div class="col-lg-7">
  //             <img
  //               class="img-fluid rounded mb-4 mb-lg-0"
  //               src="http://placehold.it/300x300"
  //               alt=""
  //             />
  //           </div>
  //           <div class="col-lg-5">
  //             <h1 class="font-weight-light">Author 3</h1>
  //             <p>
  //               Lorem Ipsum is simply dummy text of the printing and typesetting
  //               industry. Lorem Ipsum has been the industry's standard dummy text
  //               ever since the 1500s, when an unknown printer took a galley of
  //               type and scrambled it to make a type specimen book.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>