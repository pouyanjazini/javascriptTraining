import getRequest from "./getRequest.js";

export default function request(url, method = "GET") {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send();

  xhr.onload = function () {
    getRequest(JSON.parse(xhr.response));
  };
}
