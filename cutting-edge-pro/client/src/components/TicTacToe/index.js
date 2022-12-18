import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './style.css';

const TicTacToe = () => {

    const navigate = useNavigate();

    const navigateGames = () => {
        // 👇️ navigate to home for testing
        navigate('/Games');
    };

    return (
        <div>
            <Container>
            
            <div>
                <button onClick={navigateGames}>Back to the games!</button>
            </div>
            </Container>
        </div>
    );
};
export default TicTacToe;