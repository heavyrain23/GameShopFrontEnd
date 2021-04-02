import styled from "styled-components";

export const StyledGameNotification = styled.div`
  border: 2px solid rgb(192, 25, 150);
  font-size: 15px;
  width: 215px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  display: block;
  position: absolute;
  right: 24%;
  top: 7%;
  z-index: 100;

  .game_title {
    font-weight: bold;
    color: rgb(192, 25, 150);
    font-size: 17px;
  }
`;

export default StyledGameNotification;
