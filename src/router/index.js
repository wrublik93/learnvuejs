import Vue from 'vue'
import Router from 'vue-router'
import Authorization from '../components/Authorization'
import Mainpage from '../components/Mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Authorization',
    //   component: Authorization
    // },
    {
      path: '/',
      name: 'Mainpage',
      component: Mainpage
    }
  ]
})
