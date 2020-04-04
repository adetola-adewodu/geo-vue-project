import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// pages..
import Address from "./pages/Address";
import Circles from "./pages/Circles";
import Points from "./pages/Points";

Vue.use(VueRouter);

Vue.config.productionTip = false;

// define the routes we are using
const routes = [
  { path: "/address", component: Address },
  { path: "/circles", component: Circles },
  { path: "/points", component: Points },
  { path: "/", redirect: '/points' }
];

// create router instance
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");