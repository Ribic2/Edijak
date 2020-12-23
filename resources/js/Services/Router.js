import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        // Student layout
        {
            path: '/webapp',
            component: ()=> import('../App/Layout/student'),
            children:[
                {
                    path: '',
                    component: ()=> import('../App/Pages/Schedule/View')
                },
                {
                    path: 'reminder',
                    component: ()=>import('../App/Pages/Reminder/view')
                },
                {
                    path: 'notices',
                    component: ()=>import('../App/Pages/Reminder/view')
                },
                {
                    path: 'schedule',
                    component: ()=>import('../App/Pages/Schedule/View')
                }
            ]
        },
        // Teacher layout
        {
          path: '/teacher',
          component: ()=>import('../App/Layout/teacher'),
            children: [
                {
                    path: '',
                    component: ()=>import('../App/Pages/Teacher/test')
                }
            ]
        },

        // Login layout
        {
            path: '/',
            component: ()=> import('../App/Layout/login')
        }
    ]
});

export default router
