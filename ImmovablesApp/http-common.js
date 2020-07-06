import axios from "axios";

export default axios.create({
  //baseURL: "http://13.125.30.205:3000/api",
  baseURL: "http://3.34.98.240/api",
  headers: {    "Content-type": "application/json"
  }
});
