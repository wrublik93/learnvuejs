import Vue from 'vue'
import Router from 'vue-router'
import Authorization from '@/components/Authorization'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Authorization',
      component: Authorization
    }
  ]
})
