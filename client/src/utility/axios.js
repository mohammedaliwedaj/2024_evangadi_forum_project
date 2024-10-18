import axios from "axios";

const serverPort = import.meta.env.PORT || 5000;

export const axiosInstance = axios.create({
  //local endpoint reference
  // baseURL: `http://localhost:${serverPort}/api/v1`,

  // deployed endpoint reference
  // baseURL: "https://evangadiforumproject-vpsk.onrender.com/api/v1",
  baseURL: "https://two024-evangadi-forum-project.onrender.com/api/v1",
});
