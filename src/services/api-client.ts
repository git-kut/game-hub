import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "22dd76f0b9054ce5ba37afe02e52b755",
  },
});
