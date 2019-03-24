import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
const Create = () => import("./views/Create");
const Play = () => import("./views/Play");
const Lobby = () => import("./views/Lobby");
const Action = () => import("./views/Action");
const Help = () => import("./views/Help/Help");
const Privacy = () => import("./views/Privacy/Privacy");
const Terms = () => import("./views/Terms/Terms");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/play",
      name: "play",
      component: Play
    },
    {
      path: "/lobby/:code",
      name: "lobby",
      component: Lobby
    },
    {
      path: "/action/:code",
      name: "action",
      component: Action
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/privacy-policy",
      name: "privacyPolicy",
      component: Privacy
    },
    {
      path: "/terms-of-service",
      name: "termsOfService",
      component: Terms
    }
  ]
});
