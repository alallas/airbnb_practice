import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err);
    })
  };

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

}

export default new HYRequest(BASE_URL, TIME_OUT)