import Vue from 'vue'
import VueRouter from "vue-router";
import {Factory} from "../Services/Api/Factory"

const Student = Factory.get('Student')
const Teacher = Factory.get('Teacher')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // Student layout
        {
            beforeEnter: (to, from, next) => {
                Student.getStudent()
                    .then((res) => {
                        if (!res.data.role) {
                            next()
                        } else {
                            next(false)
                        }
                    })
                    .catch((err) => {
                        next({name: 'login'})
                    })
            },
            path: '/webapp',
            name: 'student',
            component: () => import('../App/Layout/student'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../App/Pages/Student/Schedule')
                },
                {
                    name: 'messages',
                    path: 'notices',
                    component: () => import('../App/Pages/Student/Reminder')
                },
            ]
        },
        // Teacher layout
        {
            name: 'teacher',
            path: '/teacher',
            component: () => import('../App/Layout/teacher'),
            beforeEnter: (to, from, next) => {
                Teacher.getTeacher()
                    .then((res) => {
                        if (res.data.role) {
                            next()
                        } else {
                            next(false)
                        }
                    })
                    .catch((err) => {
                        next({name: 'login'})
                    })
            },
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
                {
                    path: 'group/:id',
                    name: 'group',
                    component: () => import('../App/Pages/Teacher/Groups/group')
                }
            ]
        },

        // Login layout
        {
            path: '/',
            name: 'login',
            component: () => import('../App/Layout/login')
        }
    ]
});


// Checks if user is logged in before entering path
router.beforeEach((to, from, next) => {
    if (to.path !== '/' && localStorage.getItem('token') == null) {
        next({path: '/'})
    } else {
        next()
    }
})

export default router
