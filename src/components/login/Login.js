import React, { useState, useContext } from "react";
import GamesContext from "../elements/GamesContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

//config for axios
let config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const Login = ({ setToken, setUser }) => {
  const history = useHistory();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const { setLoggedIn } = useContext(GamesContext);

  console.log(setToken);
  console.log(setUser);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, password };

    const response = await axios.post("http://localhost:5000/login", user, config);
    const token = response.data[0];
    const userInfo = response.data[1];
    setUser(userInfo);
    setToken(token);
    setLoggedIn(true);
    history.push("/profilePage");
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" autoComplete="on" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
