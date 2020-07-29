import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            children: [
                {
                    path: '/',
                    redirect: 'login'
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/auth/Login.vue')
        },
        {
            path: '/install',
            name: 'install',
            component: () => import('./views/install.vue')
        },
        {
            path: '*',
            name: '404',
            component: () => import('./views/404.vue')
        }
    ]
})

export default router
