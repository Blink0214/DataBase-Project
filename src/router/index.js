import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/backstage',
    name: 'backstage',
    component: () => import('../views/BackstageView.vue'),
    children:[
      {
        path: 'userManagement',
        name: 'userManagement',
        component: () => import('../views/Backstage/UserManagement.vue')
      },
    ]
  },
  {
    path: '/mainmenu',
    name: 'mainmenu',
    component: () => import('../views/MainmenuView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
