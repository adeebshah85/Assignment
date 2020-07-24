import Vue from "vue";
import VueRouter from "vue-router";
import Searchbar from "../views/Searchbar.vue";
import WelcomeMessage from "../views/WelcomeMessage.vue";
import NavBar from "../views/NavBar.vue";
import Right from "../views/Right.vue";
import ProfilePic from "../views/ProfilePic.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/searchbar",
    name: "Searchbar",
    component: Searchbar
  },
  {
    path: "/welcomemessage",
    name: "WelcomeMessage",
    component: WelcomeMessage
  },
  {
    path: "/navbar",
    name: "NavBar",
    component: NavBar
  },
  {
    path: "/right",
    name: "Right",
    component: Right
  },
  {
    path: "/profilepic",
    name: "ProfilePic",
    component: ProfilePic
  }
];

const router = new VueRouter({
  routes
});

export default router;
