import Vue from "vue";
import VueRouter from "vue-router";

import WebShell from "@/views/WebShell";
import Playground from "@/views/Playground";

Vue.use(VueRouter)

const routes = [
  {
    path: "/webshell",
    name: "webshell",
    component: WebShell,
    meta: {
      title: "webshell space"
    }
  },
  {
    path: "/playground",
    name: "playground",
    component: Playground,
    meta: {
      title: "playground area"
    }
  },
  {
    path: "*",
    redirect: { name: "webshell" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to) => {
  to.meta.path = to.path.endsWith("/") ? to.path.substr(0, to.path.length - 1) : to.path;

  Vue.nextTick(() => {
    document.title = process.env.VUE_APP_NAME;

    if (to.meta.title)
      document.title += " / " + to.meta.title;
  });
});

export default router;
