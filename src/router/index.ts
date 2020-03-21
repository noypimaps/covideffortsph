import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HospitalMap from "../views/HospitalMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hospitalmap",
    name: "HospitalMap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/HospitalMap.vue")
    component: HospitalMap
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
