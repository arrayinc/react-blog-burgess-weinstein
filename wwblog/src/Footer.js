import React from "react";
import "./index.css"; import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Pgbtm = () => {
    return (
        //         <Container className="foot-container">
        //             <Row>
        //                 <Col><h4>White Wolf INC.</h4>
        //                          <ul classname="conatct-info">
        //                              <li>1-800-273-8255</li>
        //                              <li>White Orchard, Novigrad</li>
        //                              <li>Inn at the Crossroads</li>
        //                          </ul></Col>
        //                 <Col>2 of 2</Col>
        //             </Row>
        //             <Row>
        //                 <Col>1 of 3</Col>
        //                 <Col>2 of 3</Col>
        //                 <Col>3 of 3</Col>
        //             </Row>
        //         </Container>
        //     );
        // }



        <div className="bottom">
            <div className="btm-container">
                <div classname="row">
                    {/* first column */}
                </div>
                <div className="col">
                    <h4>White Wolf INC.</h4>
                    <ul classname="conatct-info">
                        <li>1-800-273-825</li>
                        <li>White Orchard, Novigrad</li>
                        <li>Inn at the Crossroads</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Creators</h4>
                    <ul classname="conatct-info">
                        <li>Grand Master Vlad</li>
                        <li> Eternal E-man</li>
                        <li> Campers </li>
                    </ul>
                </div>
                <div className="col">
                <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Authors</Nav.Link>
  <Nav.Link eventKey="link-1">Recipes</Nav.Link>
  <Nav.Link eventKey="link-2">About</Nav.Link>
  <Nav.Link eventKey="link-3">Contact
  </Nav.Link>
</Nav>
                </div>
            </div> 
            <hr />
            <p>
                &copy;{new Date().getFullYear()} White Wolf Inc.| All Rights Reserved | Not liable for Nekker attacks
            </p>
        </div>
    )
}
export default Pgbtm;
