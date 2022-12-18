import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import './style.css';

const TicTacToe = () => {

    const navigate = useNavigate();

    const navigateGames = () => {
        // 👇️ navigate to home for testing
        navigate('/games');
    };

    return (
      <div>
        <Container>
        <div className="board">
      <Button className="square">X</Button>
      <Button className="square">O</Button>
      <Button className="square">X</Button>
      <Button className="square">O</Button>
      <Button className="square">X</Button>
      <Button className="square">O</Button>
      <Button className="square">X</Button>
      <Button className="square">O</Button>
      <Button className="square">X</Button>
      </div>
            <div>
                <button onClick={navigateGames}>Back to the games!</button>
            </div>
        </Container>
      </div>
    );
};
export default TicTacToe;