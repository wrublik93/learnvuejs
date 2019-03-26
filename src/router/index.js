import Vue from 'vue'
import Router from 'vue-router'
import Authorization from '../components/Authorization'
import Main from '../components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Authorization',
      component: Authorization
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
