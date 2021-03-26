import React, { useContext } from "react";
import GamesContext from "../elements/GamesContext";
import { StyledProfilePage } from "../styles/StyledProfilePage";

const ProfilePage = () => {
  let { user } = useContext(GamesContext);

  console.log(user);

  return (
    <>
      {user && (
        <StyledProfilePage>
          <div>
            <div className="title">Profile Page</div>

            <div className="userName ">
              <img className="logo" src="images/elon.png" alt="" width="200px" />
              <div className="user_title">
                {user.first_name} {user.last_name}
              </div>
            </div>

            <div className="userInfo">
              <div className="userInfoRow">
                <div> User email: </div>
                <div>User adress:</div>
                <div>User postal code:</div>
                <div> User number:</div>
              </div>

              <div className="userInfoDesc">
                <div>{user.email}</div>
                <div>{user.adress}</div>
                <div>{user.postal_code}</div>
                <div>{user.phone_number}</div>
              </div>
            </div>
          </div>
        </StyledProfilePage>
      )}
    </>
  );
};

export default ProfilePage;
