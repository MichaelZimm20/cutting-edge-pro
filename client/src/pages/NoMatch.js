// import react
import React from "react";
import Jumbotron from "../components/Jumbotron";

// if the correct page it not found, display 404
const noMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default noMatch;
