import * as VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const Config = () => import("../views/Config/index.vue");
const BattleshipBoard = () => import("../views/BattleshipBoard.vue");

const routes: VueRouter.RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Config",
    path: "/configuration",
    component: Config,
  },
  {
    name: "BattleshipBoard",
    path: "/battleship",
    component: BattleshipBoard,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
