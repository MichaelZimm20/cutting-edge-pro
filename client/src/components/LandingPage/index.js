import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import landingMetal from '../../assets/images/landingpage.jpg'
import landingWood from '../../assets/images/landing-wood.png'
import landingAcrylic from '../../assets/images/landing-vinyl.jpg'
const LandingPage = () => {
  return (
    <Container>
      <Row>
      <Col>
          <Card style={{ width: '100%' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={landingMetal} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={landingWood}alt='wood' />           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={landingAcrylic}alt='wood' />           
            </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col className="text-center">
          <div className="d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 1 }}>
            <Link to="/home">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
