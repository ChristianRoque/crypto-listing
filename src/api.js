import axios from "axios";

//Axios path for server calls

const apiURL = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

export default {
  service: apiURL,
};
