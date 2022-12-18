import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Card, Button, Container, Row, Col,} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

//import game images
import tictactoe from '../assets/images/games/tictactoe.jpg'
import RPS from '../assets/images/games/RPS.png'
import memory from '../assets/images/games/memory.png'


function Games() {

  const navigate = useNavigate();

const navigateTictactoe = () => {
  navigate('/Tictactoe');
};

  return (
    <div className='d-flex  mt-3'>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={tictactoe} alt='wood'/>           
            </Carousel.Item>
           
            </Carousel>
            <Card.Body>
              <Card.Title>Tic-Tac-Toe</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Button onClick={navigateTictactoe} variant="primary">Play</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={memory} alt='wood'/>           
            </Carousel.Item>
           
            </Carousel>
            <Card.Body>
              <Card.Title>Memory Match</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Button onClick={navigateTictactoe} variant="primary">Play</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              <Carousel.Item>
            <img className="d-block w-100" src={RPS} alt='wood'/>           
            </Carousel.Item>
           
            </Carousel>
            <Card.Body>
              <Card.Title>Rock Paper Scissors</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Button onClick={navigateTictactoe} variant="primary">Play</Button>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
        
        </Container>
        </div>
        
        )}

        export default Games;