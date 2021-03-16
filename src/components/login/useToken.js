import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString); // convers string to object using JSON.parse()
    return userToken?.token; // optional chaining operator—? otherwise undefined
  };

  const [token, setToken] = useState();

  const saveToken = (userToken) => {
    // setItem takes 2 argument, 1st arg is taken as a key, 2nd is taken as string(first we use JSON.stringify to convert userToken)
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
