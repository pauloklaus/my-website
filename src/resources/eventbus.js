import Vue from "vue";
const eventbus = new Vue();

Vue.use({
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $eventbus: {
        get() {
          return eventbus;
        }
      }
    });
  }
});
