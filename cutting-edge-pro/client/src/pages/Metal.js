import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Card, Button, Container, Row, Col, } from 'react-bootstrap';
import Cart from '../components/Cart';
import lumber from '../assets/images/Lumber-cut.jpg'
import woodEngraving from '../assets/images/engraved-wood.jpg'
import metalEngraving from '../assets/images/metal-sign.jpg'
//import pictures
import small1 from '../assets/images/small-metal-3.jpg'
import small2 from '../assets/images/small-metal-2.jpg'
import small3 from '../assets/images/meta-small-3.jpg'

import medium1 from '../assets/images/medium-metal-4.jpg'
import medium2 from '../assets/images/medium-metal-3.jpg'
import medium3 from '../assets/images/metal-sign.jpg'

import large1 from '../assets/images/large-metal-1.jpg'
import large2 from '../assets/images/large-metal-4.avif'
import large3 from '../assets/images/large-metal-5.jpg'

import custom from '../assets/images/metal-custom.avif'
function Metal() {
  return (
    <div className='d-flex  mt-3'>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={small1} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={small2}alt='wood' />           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={small3} alt='wood'/>         
            </Carousel.Item>
            </Carousel>
            <Card.Body>
              <Card.Title>Small</Card.Title>
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
            <img className="d-block w-100" src={medium1} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={medium2} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={medium3} alt='wood'/>           
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
            <img className="d-block w-100" src={large1} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={large2} alt='wood'/>           
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src={large3} alt='wood'/>           
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
            <Card.Img variant="top" src={custom} />
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

        export default Metal;