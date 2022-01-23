import Vue from "vue";
import axios from "axios";

const http = axios.create({
  withCredentials: false,
  timeout: 60 * 1000,
});

Vue.use({
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $http: {
        get() {
          return http;
        }
      }
    });
  }
});
