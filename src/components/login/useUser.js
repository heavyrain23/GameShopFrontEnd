import { useState, useEffect } from "react";

export default function useUser() {
  const [user, setUser] = useState();

  const saveUser = (userInfo) => {
    localStorage.setItem("user", JSON.stringify(userInfo)); // store the user in localStorage
    setUser(userInfo);
  };

  useEffect(() => {
    // check for existing user and update userdata
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return {
    user,
    setUser: saveUser,
  };
}
