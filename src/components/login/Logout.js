import React, { useContext } from "react";
import GamesContext from "../elements/GamesContext";
import { useHistory } from "react-router-dom";
import { StyledLogout } from "./../styles/StyledLogout";

const Logout = () => {
  let { setLoggedIn } = useContext(GamesContext);
  const history = useHistory();

  async function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
  }

  return (
    <StyledLogout>
      <button className="buttonLogout" onClick={handleLogout}>
        Log Out
      </button>
    </StyledLogout>
  );
};

export default Logout;
