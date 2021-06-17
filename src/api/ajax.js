import axios from "axios";
import { error } from "shelljs";
// ajax函数返回一个Promise对象  异步返回的数据为(response.data)
export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function(resolve, reject) {
    let promise;
    if (type === "GET") {
      let dataStr = "";
      // 进行参数的拼接
      // Object.keys(data).forEach(key => {
      //   dataStr += key + "=" + data[key] + "&";
      // });
      // if (dataStr !== " ") {
      //   dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
      //   url = url + "?" + dataStr;
      // }
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then(Response => {
        resolve(Response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
