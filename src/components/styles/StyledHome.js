import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  max-width: 1160px;
  margin: 0 auto;
  padding: 15px 10px 5px 5px;
  
  .image_wrapper {
    position: relative;
  }

  .main_image {
    max-width:100%;
    border-radius: 10px;
    height: auto;
    margin: 5px 5px;
    margin-bottom: 20px;
    width: 1120px;
   
  }
  
  .title_text{ 
    max-width:900px;
    position: absolute;
    bottom: 140px;
    left: 15%;
    color: #f829fb9e;
    
    font-size: 35px;
    text-transform: uppercase;
    font-family: fantasy;
    
  }

  .game-item {
    position: relative;
    margin-left: 5px;
    margin-bottom: 5px;
    width: 330px;
    height: 520px;
    padding: 30px 20px;
    border-radius: 5px;
    text-align: center;
    background: #ffffff;
  }

  .game-item:hover {
    box-shadow: 5px 5px 15px 5px #aca8a8;
    transition: 0.5s;
  }

  .nav-link {
    text-decoration: none;
  }

  .item-title {
    font-size: 23px;
    font-weight: 400;
    color: #636565;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .item-genre {
    position: absolute;
    font-size: 20px;
    color: rgb(192,25,150);
    font-weight: 500;
    margin-top: 10px;
    bottom: 80px;
    left: 0;
    right: 0;
  }

  .item-image {
    width: 250px;
    border-radius: 20px;
  }

  .item-price {
    position: absolute;
    bottom: 25px;
    left: 0px;
    font-size: 20px;
    margin-top: 20px;
    background-color: rgb(176 39 156 / 86%);
    color: white;
    font-weight: 100;
    padding: 7px 163px;
    transition: 0.5s;
  }


  @media (max-width: 782px) {
    justify-content:center;
    }
  }
`;
