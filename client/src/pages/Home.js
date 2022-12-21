import React from "react";
import Cart from "../components/Cart";
import {
  Card,
  Button,
  Container,
  Col,
  CardGroup,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../index.css";

// Image imports for slideshow
import acrylicPic from "../assets/images/acrylic-large-2.webp";
import woodPic from "../assets/images/large-wood-3.jpg";
import metalPic from "../assets/images/medium-metal-3.jpg";

const Home = () => {
  return (
    <div className=" bg-color d-flex mt-3 ">
      <div className="my-3 mx-3 ">
        <Container className="" fluid>
          <CardGroup className="my-3 mx-3">
            <Card
              className="text-center"
              style={{ width: "75%", opacity: 0.75 }}
            >
              <Carousel>
                <Carousel.Item className="carousel-slide img">
                  <Card.Img
                    variant="top"
                    src={acrylicPic}
                    style={{ height: "75vh", objectFit: "contain", opacity: 1 }}
                  />
                </Carousel.Item>
                <Carousel.Item className="carousel-slide img">
                  <Card.Img
                    variant="top"
                    src={woodPic}
                    style={{ height: "75vh", objectFit: "contain", opacity: 1 }}
                  />
                </Carousel.Item>
                <Carousel.Item className="carousel-slide img">
                  <Card.Img
                    variant="top"
                    src={metalPic}
                    style={{ height: "75vh", objectFit: "contain", opacity: 1 }}
                  />
                </Carousel.Item>
              </Carousel>
              <Card.Body>
                <Card.Title>Products</Card.Title>
                <Card.Text>Click here to browse our products!</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/products">
                  <Button variant="primary" className="w-100">
                    Shop Products
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </CardGroup>

          <Col className="my-3">
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Our company specializes in using laser cutting technology to
                  transform images into stunning pieces of art. Our team of
                  talented artists and technicians use state-of-the-art laser
                  cutters to carefully craft each piece, ensuring precise cuts
                  and intricate details.
                  <br />
                  <br />
                  Whether it's a simple design or a complex, multi-layered
                  creation, we have the skills and expertise to bring your
                  vision to life. Our laser cutters allow us to work with a wide
                  range of materials, including wood, metal, and acrylic, giving
                  you endless possibilities for your custom art piece.
                  <br />
                  <br />
                  At our company, we take pride in our commitment to excellence
                  and customer satisfaction. From start to finish, we work
                  closely with our clients to ensure that their vision becomes a
                  reality. If you're looking for a unique and eye-catching piece
                  of art, look no further than our laser cutting services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
      <Cart />
    </div>
  );
};
export default Home;
