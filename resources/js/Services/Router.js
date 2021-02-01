import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // Student layout
        {
            path: '/webapp',
            name: 'student',
            component: () => import('../App/Layout/student'),
            children: [
                {
                    path: '',
                    component: () => import('../App/Pages/Student/Schedule')
                },
                {
                    path: 'reminder',
                    component: () => import('../App/Pages/Student/Reminder')
                },
                {
                    path: 'notices',
                    component: () => import('../App/Pages/Student/Reminder')
                },
                {
                    path: 'schedule',
                    component: () => import('../App/Pages/Student/Schedule')
                }
            ]
        },
        // Teacher layout
        {
            name: 'teacher',
            path: '/teacher',
            component: () => import('../App/Layout/teacher'),
            children: [
                {
                    path: '',
                    name: 'teacherHome',
                    component: () => import('../App/Pages/Teacher/Home/index')
                },
                {
                    path: 'live',
                    name: 'teacherLive',
                    component: () => import('../App/Pages/Teacher/CurrentHour/index')
                },
                {
                    path: 'groups',
                    name: 'groups',
                    component: () => import('../App/Pages/Teacher/Groups/index')
                },
            ]
        },

        // Login layout
        {
            path: '/',
            component: () => import('../App/Layout/login')
        }
    ]
});

export default router
