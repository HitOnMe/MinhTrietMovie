// config.js
import Axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MTkxMDQwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQyMDU4MDAwfQ.aL6UU86iw9qfiazPYi9hHV3FjYthitqZbK5pBfChSiU";
const baseUrl = "https://movienew.cybersoft.edu.vn";

const configData = (method, url, data) => {
  return Axios({
    method: method,
    url: `${baseUrl}${url}`,
    data: data,
    headers: { TokenCybersoft: token },
  });
};

export default configData;

export let http = Axios.create({
  baseURL: baseUrl,
  headers: {
    TokenCybersoft: token,
    Authorization:
      "bearer " + JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken,
  },
});
