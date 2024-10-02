import axios from "axios";
// import config from "./configParamters.json";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2b097f1d339f42e753a844713bc009d3",
  },
});

export default instance;
