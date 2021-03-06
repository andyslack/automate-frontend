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
            path: '/home',
            name: 'home',
            component: () => import('./views/dashboard/home.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import("./views/dashboard/search.vue")
        },
        {
            path: '/email',
            name: '',
            component: () => import("./views/dashboard/blank.vue"),
            children: [
                {
                    path: '',
                    name: 'email',
                    component: () => import("./views/dashboard/email/email.vue"),
                },
                {
                    path: "docs",
                    name: "email/docs",
                    component: () => import("./views/dashboard/email/email-doc.vue")
                },
                {
                    path: "logs",
                    name: "email/logs",
                    component: () => import("./views/dashboard/email/email-logs.vue")
                },
                {
                    path: "stats",
                    name: "email/stats",
                    component: () => import("./views/dashboard/email/email-stats.vue")
                }
            ]
        },
        {
            path: '/reports',
            name: '',
            component: () => import("./views/dashboard/blank.vue"),
            children: [
                {
                    path: '',
                    name: 'reports',
                    component: () => import("./views/dashboard/reports/reports.vue"),
                },
                {
                    path: 'finance',
                    name: 'report/finance',
                    component: () => import("./views/dashboard/reports/finance.vue")
                }
            ]
        },
        {
            path: '/account',
            name: '',
            component: () => import("./views/dashboard/blank.vue"),
            children: [
                {
                    path: '',
                    name: 'account',
                    component: () => import("./views/dashboard/account/overview.vue")
                },
                {
                    path: 'websites',
                    name: 'websites',
                    component: () => import("./views/dashboard/blank.vue"),
                    children: [{
                        path: 'creds/:website_id',
                        name: 'creds',
                        component: () => import("./views/dashboard/account/websites/credsWordpress.vue")
                    }]
                },
                {
                    path: 'users',
                    name: 'users',
                    component: () => import("./views/dashboard/account/users.vue")
                },
                {
                    path: 'billing',
                    name: 'billing',
                    component: () => import("./views/dashboard/blank.vue"),
                    children: [
                        {
                            path: '',
                            name: 'account-billing',
                            component: () => import("./views/dashboard/account/billing.vue")
                        },
                        {
                            path: 'transaction/:transaction_id',
                            name: 'transaction',
                            component: () => import("./views/dashboard/account/transaction.vue")
                        }
                    ]
                }
            ]
        },
        {
            path: "/subscription/:subscription_id",
            name: "subscription",
            component: () => import("./views/dashboard/subscription/subscription-detail.vue")
        },
        {
            path: "/task/:task_id",
            name: "task",
            component: () => import("./views/dashboard/tasks/task-detail.vue")
        },
        {
            path: '*',
            name: '404',
            component: () => import('./views/404.vue')
        }
    ]
})

export default router
