import * as VueRouter from "vue-router";

const Home = () => import("../views/Home/index.vue");
const Config = () => import("../views/Config/index.vue");
const BattleshipBoard = () => import("../views/BattleshipBoard/index.vue");
const GameOver = () => import("../views/GameOver/index.vue");
const GameHistory = () => import("../views/GameHistory/index.vue");

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
  {
    name: "GameOver",
    path: "/gameover",
    component: GameOver,
  },
  {
    name: "GameHistory",
    path: "/game-history",
    component: GameHistory,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
