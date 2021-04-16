import { createRouter, createWebHistory } from 'vue-router'
import Kanban from './views/kanban/index.vue'

const routes = [{ path: '/', component: Kanban }]

export const history = createWebHistory()

export default createRouter({
  history,
  routes,
})
