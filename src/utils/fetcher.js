import { apiOptions } from "./config";

const { url, headers } = apiOptions;

export default function fetcher() {
  function handlePromise(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  function getModeInfo() {
    return fetch(url, {
      headers: headers,
    }).then((res) => handlePromise(res));
  }

  return getModeInfo();
}
