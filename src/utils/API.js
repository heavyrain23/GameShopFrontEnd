import axios from "axios";

export default axios.create({
  baseURL: "https://game-store-2077.herokuapp.com",
  responseType: "json",
});
