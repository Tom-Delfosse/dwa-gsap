import { createRouter, createWebHistory } from 'vue-router'
import Base from '../views/Base.vue'

const routes = [
  { path: '/', redirect: { name: 'Base', params: { id: 1 } } },
  {
    path: '/steps/:id',
    name: 'Base',
    component: Base,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
