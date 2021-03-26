import React, { useContext } from "react";
import { StyledHeader } from "./../styles/StyledHeader";
import { NavLink } from "react-router-dom";
import GamesContext from "./GamesContext";
import { MiniCart, MiniCartCurcle } from "./../styles/StyledHeaderIcon";
import { StyledInput } from "./../styles/StyledInput";
import Logout from "./../login/Logout";

const Header = () => {
  const { cart, filter, setFilter, loggedIn } = useContext(GamesContext);

  return (
    <StyledHeader>
      <div className="header-content">
        <NavLink className="nav-link" exact to={"/"}>
          <div className="header-logo"> Game Store</div>
        </NavLink>

        {loggedIn && (
          <NavLink className="profilePageLink" exact to={"/profilePage"}>
            <div> Profile page</div>
          </NavLink>
        )}

        <StyledInput>
          <input value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Search..." />
        </StyledInput>

        <NavLink exact to={"/cart"}>
          {cart.length > 0 && <MiniCartCurcle />}
          <MiniCart />
        </NavLink>

        {!loggedIn ? (
          <NavLink className="nav-link" exact to={"/login"}>
            <button className="login_button">Login</button>
          </NavLink>
        ) : (
          <Logout />
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
