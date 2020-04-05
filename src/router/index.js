import Vue from 'vue'
import VueRouter from 'vue-router'
import Hot from '../views/Hot.vue'
import Movie from '../views/Movie.vue'
import Top from '../views/Top.vue'
import Detail from '../views/Detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/hot'
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/top',
    name: 'top',
    component: Top
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
