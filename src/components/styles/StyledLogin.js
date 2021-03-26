import styled from "styled-components";

export const StyledLogin = styled.div`
  max-width: 400px;
  background: white;
  border-radius: 10px;
  margin: 150px auto;
  padding: 30px 24px;
  display: flex;
  justify-content: center;
  color: #636565;

  .login_title {
    font-size: 20px;
    font-weight: bolder;
    margin: 0px 15px;
    
  }

  .loginInfo {
    font-size: 15px;
    font-weight: lighter;
  }

  .submitButton {
    margin: 15px auto;
    cursor: pointer;
    display: flex;
    background-color: rgb(192, 25, 150);
    color: whitesmoke;
    padding: 5px 17px;
    border-radius: 5px;
    font-weight: bolder;
  }

  .submitButton:hover {
    background: rgb(229 228 228);
    color: rgb(54, 53, 53);
  }

  input {
    border-radius: 5px;
    width: 100%;
    padding: 5px;
    font: 400 15px Arial;
    border: 2px solid rgb(192, 25, 150);
  }
}
`;
