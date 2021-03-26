import React, { useContext } from "react";
import GamesContext from "../elements/GamesContext";
import { useHistory } from "react-router-dom";

const Logout = () => {
  let { setLoggedIn } = useContext(GamesContext);
  const history = useHistory();

  async function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    history.push("/login");
  }

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;
