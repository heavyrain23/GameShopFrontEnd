import React, { useContext } from "react";
import GamesContext from "../elements/GamesContext";

const ProfilePage = () => {
  let { user } = useContext(GamesContext);

  console.log(user);

  return (
    <>
      {user && (
        <div>
          <h1>Profile Page</h1>
          User name: {user.first_name}
          <p>User info</p>
        </div>
      )}
      ;
    </>
  );
};

export default ProfilePage;
