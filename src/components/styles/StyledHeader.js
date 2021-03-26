import styled from "styled-components";

export const StyledHeader = styled.div`
  background: rgb(54, 53, 53);
  padding: 0 20px;

  .header-content {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
    min-height: 80px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }

    .nav-link {
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 30px;

      .login_button {
        cursor: pointer;
        display: flex;
        background-color: rgb(192, 25, 150);
        color: whitesmoke;
        padding: 5px 17px;
        border-radius: 5px;
        font-weight: bolder;
      }

      .login_button:hover {
        background: rgb(229 228 228);
        color: rgb(54, 53, 53);
      }
    }

    .profilePageLink {
      text-decoration: none;
      color: white;
      font-size: 20px;
    }

    .nav-link:hover,
    .profilePageLink:hover {
      color: rgb(192, 25, 150);
    }
  }
`;
