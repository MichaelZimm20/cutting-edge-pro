

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Card, Button, Container, Row, Col, } from 'react-bootstrap';
import Cart from '../components/Cart';
import lumber from '../assets/images/Lumber-cut.jpg'
import woodEngraving from '../assets/images/engraved-wood.jpg'
import metalEngraving from '../assets/images/metal-sign.jpg'

function Wood() {
  return (
    <div className='d-flex  mt-3'>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={lumber} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={woodEngraving}alt='wood' />           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={metalEngraving} alt='wood'/>           
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $50</Card.Text>
              <Card.Text>Quantity: 10</Card.Text>
              <Card.Text>Size: Small</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
          <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={lumber} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={woodEngraving} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={metalEngraving} alt='wood'/>           
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Medium</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $60</Card.Text>
              <Card.Text>Quantity: 15</Card.Text>
              <Card.Text>Size: Medium</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
          <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={lumber} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={woodEngraving} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={metalEngraving} alt='wood'/>           
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Large</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text>
              <Card.Text>Quantity: 20</Card.Text>
              <Card.Text>Size: Large</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
        <Row className='justify-content-center mt-4'>
        <Col xs={6}>
          <Card  style={{ width: '100%' }}>
            <Card.Img variant="top" src="product-image-3.jpg" />
            <Card.Body>
              <Card.Title>Custom</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Price: $70</Card.Text>
              <Card.Text>Quantity: 20</Card.Text>
              <Card.Text>Size: Custom </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </Container>
        
        <Cart/>
        </div>
        
        )}

        export default Wood;