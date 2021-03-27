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

    .login_wrapper {
      display: flex;
      color: rgb(192, 25, 150);
      font-size: 20px;
    }

    .nav-link {
      text-decoration: none;
      color: white;
      font-size: 30px;

      .login_button,
      .signUp_button {
        cursor: pointer;
        font-size: 20px;
        color: rgb(192, 25, 150);
      }

      .login_button:hover,
      .signUp_button:hover {
        color: white;
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
