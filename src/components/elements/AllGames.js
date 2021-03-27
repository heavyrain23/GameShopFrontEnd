import React, { useContext } from "react";
import { StyledHome } from "./../styles/StyledHome";
import { NavLink } from "react-router-dom";
import GamesContext from "./GamesContext";

const AllGames = () => {
  const { products } = useContext(GamesContext);

  return (
    <div>
      <StyledHome>
        <div className="image_wrapper">
          <img className="main_image" src="/images/wallpaper.jpg" alt="" />
          <div className="title_text">Explore our game shop and have a best game experience!</div>
        </div>
        {products &&
          products.map((product) => (
            <NavLink className="nav-link" key={product.id} to={"/game/" + product.id}>
              <div className="game-item">
                <img className="item-image" src={"/images/" + product.image_name} alt="" />
                <div className="item-title"> {product.title}</div>
                <div className="item-genre">{product.genre}</div>
                <div className="item-price">{product.price} $</div> <br />
              </div>
            </NavLink>
          ))}
      </StyledHome>
    </div>
  );
};

export default AllGames;
