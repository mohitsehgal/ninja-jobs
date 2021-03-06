import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import redirects from './redirects.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "Jobs" */ '../views/jobs/Jobs.vue'),
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import(/* webpackChunkName: "JobDetails" */ '../views/jobs/JobDetails.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes, ...redirects],
})

export default router
