import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.unsplash.com",

  headers: { "X-Custom-Header": "foobar" }
});

export default Axios;
