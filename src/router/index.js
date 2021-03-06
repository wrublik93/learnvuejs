import Vue from 'vue'
import Router from 'vue-router'
import Authorization from '../components/Authorization'
import Main from '../components/Main'
import App from "../App";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('roles') === 'admin' || localStorage.getItem('roles') === 'user') {
                    next({path: 'main'})
                } else {
                    next({path: 'login'})
                }
            },
        },
        {
            name: 'main',
            path: '/main',
            component: Main,
        },
        {
            name: 'Authorization',
            path: '/login',
            component: Authorization
        },
    ]
})






