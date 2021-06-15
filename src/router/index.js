import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ingsoc from "../views/Ingsoc.vue";
import Elenco from "../views/Elenco.vue";
import Mates from "../views/Mates.vue";
import Enemies from "../views/Enemies.vue";
import Data from "../views/Data.vue";
import Video from "../views/Video.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/ingsoc",
    component: Ingsoc,
  },
  {
    path: "/camaradas-del-partido",
    component: Mates,
  },
  {
    path: "/personas-en-investigacion",
    component: Elenco,
  },
  {
    path: "/enemigos-del-partido",
    component: Enemies,
  },
  {
    path: "/data",
    component: Data,
  },
  {
    path: "/video",
    component: Video,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
