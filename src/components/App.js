import React, { useState, useEffect, useReducer } from "react";
import AllGames from "./elements/AllGames";
import Game from "./elements/Game";
import Cart from "./elements/Cart";
import GamesContext from "./elements/GamesContext";
import { Route } from "react-router-dom";
import ListGames from "./elements/ListGames";
import Header from "./elements/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import Footer from "./elements/Footer";
import Loader from "./elements/Loader";
import API from "./../utils/API";
import Login from "./login/Login";
import useToken from "./login/useToken";
import ProfilePage from "./login/ProfilePage";
import useUser from "./login/useUser";
import cartReducer from "./reducers/CartReducer";
import SingUp from "./login/SignUp";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, updateCart] = useReducer(cartReducer, []);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("token"))); //convert value to boolean

  const { user, setUser } = useUser();
  const { token, setToken } = useToken();

  useEffect(() => {
    setLoading(true);
    API.get("/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  token ? <ProfilePage /> : <Login />;

  return (
    <>
      <GamesContext.Provider value={{ products, cart, updateCart, filter, setFilter, loading, setLoading, token, setLoggedIn, loggedIn, user }}>
        <Header />
        {loading && <Loader />}
        <ListGames />
        <Route exact path="/" children={<AllGames />} />
        <Route exact path="/login" children={<Login setToken={setToken} setUser={setUser} />} />
        <Route exact path="/sign-up" children={<SingUp />} />
        <Route exact path="/profilePage" children={<ProfilePage />} />
        <Route exact path="/game/:id" children={<Game />} />
        <Route exact path="/cart" children={<Cart />} />
      </GamesContext.Provider>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
