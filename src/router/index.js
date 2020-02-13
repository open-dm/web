import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/monsters/list',
    name: 'Monster List',
    component: () => import(/* webpackChunkName: "Monsters" */ '../views/monsters/list/ListMonsters.vue'),
  },
  {
    path: '/monsters/view/:id',
    name: 'Monster List',
    component: () => import(/* webpackChunkName: "Monsters" */ '../views/monsters/view/ViewMonster.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
