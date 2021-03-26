import styled from "styled-components";

export const StyledProfilePage = styled.div`
  max-width: 65%;
  height: 500px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  margin: 60px auto;
  padding: 10px 35px;

  .title {
    position: relative;
    color: #56514a;
    width: 500px;
    font-size: 35px;
    font-weight: bold;
    bottom: 60px;
  }

  .user_title {
    font-size: 35px;
    font-weight: bold;
    font-weight: 400;
    color: #56514a;
  }

  .userInfo {
    display: flex;
    font-size: 20px;
    flex-direction: inherit;
    line-height: 30px;
    border-top: 2px solid rgb(192, 25, 150);
  }

  .userInfoRow {
    margin-bottom: 10px;
    font-weight: 600;
    color: #56514a;
    margin-right: 30px;
  }

  .userInfoDesc {
    color: #56514a;
  }

  .logo {
    position: relative;
    bottom: 25px;
    margin: 5px;
  }

  .userName {
    display: flex;
  }
`;
