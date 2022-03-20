import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import auth from '../main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {authRequired: true}
  },
  {
    path: '/login',
    name: 'LogIn',
    // route level code-splitting
    // this generates a separate chunk (LogIn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "LogIn" */ '../views/LogIn.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (SignIn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SignIn" */ '../views/SignIn.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { currentUser } = auth
  const { meta: { authRequired } } = to

  if (currentUser && authRequired) next()
  else if (!currentUser && authRequired) next("/login")
  else if (currentUser && !authRequired) next("/signin")
  else next()
})

export default router
