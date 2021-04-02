import { StyledGameNotification } from "../styles/StyledGameNotification";
import React from "react";

const GameNotification = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <StyledGameNotification>
      <div className="desc_text">
        You added <div className="game_title"> {text} </div> to the cart
      </div>
    </StyledGameNotification>
  );
};

export default GameNotification;
