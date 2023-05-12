import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YourTasks from '../views/YourTasks.vue'
import Login from '../views/Login.vue'
import Household from '../views/Household.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: YourTasks
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/household',
      name: 'household',
      component: Household
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})

export default router
