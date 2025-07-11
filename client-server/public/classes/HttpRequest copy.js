class HttpRequest {
  static get(url, params = {}) {
    return HttpRequest.request("GET", url, params);
  }

  static delete(url, params = {}) {
    return HttpRequest.request("DELETE", url, params);
  }

  static put(url, params = {}) {
    return HttpRequest.request("PUT", url, params);
  }

  static post(url, params = {}) {
    return HttpRequest.request("POST", url, params);
  }

  static request(method, url, params = {}) {
    return new Promise((resolve, reject) => {
      let ajax = new XMLHttpRequest();

      ajax.open(method.toUpperCase(), url, true);

      ajax.onerror = (e) => {
        reject(e);
      };

      ajax.onload = () => {
        let obj = {};

        try {
          obj = JSON.parse(ajax.responseText);
        } catch (e) {
          console.error("Erro ao fazer o parse do JSON:", e);
          resolve(e);
        }

        resolve(obj);
      };

      if (method === "POST" || method === "PUT") {
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(params));
      } else {
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(params));
      }
    });
  }
}
