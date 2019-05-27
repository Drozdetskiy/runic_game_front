import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game/:hash_url',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      props: true
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      props: true
    }
    // {
    //   path: '/game_history',
    //   name: ''
    // }
  ]
})
