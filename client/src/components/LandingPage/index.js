import React from "react";
import { Link } from "react-router-dom";
import { Col, Button, Card } from "react-bootstrap";

import landingMetal from "../../assets/images/landingpage.jpg";

const LandingPage = () => {
  return (
    <div className="carousel">
      <Col>
        <Card style={{ width: "100%" }}>
          <h1
            style={{
              color: "#FF9933",
              textShadow: "0 0 0 #000",
              position: "absolute",
              top: "30%",
              left: "15%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            Cutting Edge
            <Col className="mx-auto text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  top: "91%",
                  left: "50%",
                  zIndex: 1,
                }}
              >
                <Link to="/home">
                  <Button variant="primary">Start Shopping</Button>
                </Link>
              </div>
            </Col>
          </h1>
          <img className="d-block w-100" src={landingMetal} alt="wood" />
        </Card>
      </Col>
    </div>
  );
};

export default LandingPage;
