import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home"
import User from '@/views/user'
import Main from '@/views/Main'

const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'home',
                component: Home
            },
            {
                path: 'user',
                component: User
            }
        ]

    }
]
const router = new VueRouter({
    routes
})


// 将router 暴漏
export default router



Vue.use(VueRouter)