import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  // Declare a 2D array to represent the tic-tac-toe board
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  // Declare a variable to store the current player (either 'X' or 'O')
  const [currentPlayer, setCurrentPlayer] = useState("X");

  // Declare a variable to store the game status (either 'in progress', 'X wins', 'O wins', or 'draw')
  const [gameStatus, setGameStatus] = useState("in progress");

  // Declare a function to handle a player making a move
  const handleMove = (row, col) => {
    // Do nothing if the game is already over
    if (gameStatus !== "in progress") {
      return;
    }

    // Copy the current board
    const newBoard = [...board];

    // Update the board with the current player's move
    newBoard[row][col] = currentPlayer;

    // Check for a win or draw
    if (checkWin(newBoard)) {
      setGameStatus(`${currentPlayer} wins`);
    } else if (checkDraw(newBoard)) {
      setGameStatus("draw");
    } else {
      // Toggle the current player
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    // Update the board state
    setBoard(newBoard);
  };

  // Declare a function to check if the current player has won
  const checkWin = (board) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer
      ) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer
    ) {
      return true;
    }
    if (
      board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer
    ) {
      return true;
    }

    return false;
  };

  // Declare a function to check if the game is a draw
  const checkDraw = (board) => {
    // Check if any cells are empty
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          return false;
        }
      }
    }

    return true;
  };

  // Declarea function to reset the game
  const resetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setGameStatus("in progress");
  };

  // Render the tic-tac-toe board as a 3x3 grid of buttons
  return (
    <div className="board">
      {board.map((rows, rowIndex) => (
        <div key={rowIndex} className="row">
          {rows.map((col, colIndex) => (
            <button
              key={colIndex}
              className="cell"
              onClick={() => handleMove(rowIndex, colIndex)}
            >
              {col}
            </button>
          ))}
        </div>
      ))}
      {gameStatus !== "in progress" && (
        <div>
          <p className="message">{gameStatus}</p>
          <button className="new-game-button" onClick={resetGame}>
            New game
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
