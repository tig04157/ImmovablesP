import axios from "axios";

export default axios.create({
  baseURL: "http://13.209.89.137:3000/api",
  headers: {    "Content-type": "application/json"
  }
});