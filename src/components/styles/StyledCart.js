import styled from "styled-components";

export const StyledCart = styled.div`
  max-width: 1160px;
  margin: 70px 20%;
  display: flex;
  position: relative;
  margin-bottom: 190px;

  .cart-title {
    position: absolute;
    top: -85px;
    left: 0;
    color: #56514a;
    width: 400px;
    font-size: 40px;
    font-weight: bold;
  }

  .cart-inputs {
    justify-content: center;
    display: flex;
    width: 70%;
    padding: 20px;
    margin-right: 5px;
    border-radius: 10px;
    background: white;

    .title {
      font-weight: bold;
      font-size: 25px;
      margin-bottom: 30px;
    }

    p {
      text-align: left;
      margin: 10px 0;
      font-weight: bold;
      font-size: 15px;
    }

    input {
      background-color: white;
      width: 300px;
      display: flex;
    }

    button {
      display: flex;
      margin: 25px auto;
      padding: 5px 15px;
      border-radius: 5px;
    }
  }

  .order-item {
    width: 30%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    background: white;

    h2 {
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }
  }

  .cart-item {
    position: relative;
    margin-bottom: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgb(193 193 193 / 18%);
    border-radius: 5px;
  }

  .orders-image {
    width: 20%;
    padding: 5px;
  }

  .orders-info {
    width: 200px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
  }
  .product-price {
    margin-top: 5px;
  }

  .orders-quantity {
    max-width: 160px;
    position: absolute;
    bottom: 0;
    right: 0px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
  }

  .changeButtons {
    margin-right: 20px;
  }

  .deleteButton {
    border: 1px solid #a79d9d;
    padding: 3px 9px;
    margin: 5px;
    border-radius: 15px;
    color: #a79d9d;
    font-weight: 200;
    font-size: 15px;
  }

  .increaseButton,
  .decreaseButton {
    border: 1px solid rgb(192, 25, 150);
    padding: 3px 10px;
    margin: 5px;
    border-radius: 15px;
    color: rgb(192, 25, 150);
    font-weight: 200;
    font-size: 15px;
  }

  .increaseButton:hover,
  .decreaseButton:hover,
  .deleteButton:hover {
    color: #a79d9d;
    background: rgb(192, 25, 150);
  }

  .remove-button {
    justify-content: center;
    display: flex;
    width: 40%;
    padding: 5px;
    margin: 0 auto;
    border-radius: 5px;
  }

  .total-container {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
  }

  @media (max-width: 1186px) {
    .cart-item {
      height: 120px;
    }

    .orders-info {
      width: 100px;
      font-size: 15px;
    }

    .orders-quantity {
      font-size: 15px;
      padding: 0;
    }

    .changeButtons {
      margin-right: 0;
    }

    .increaseButton,
    .decreaseButton,
    .deleteButton {
      padding: 5px;
      margin: 3px;
      font-size: 10px;
    }

    .orders-image {
      width: 40%;
    }
  }

  @media (max-width: 900px) {
    .orders-image {
      width: 0;
    }
  }
`;
