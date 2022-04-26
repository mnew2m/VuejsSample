import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import LayoutView from '../views/LayoutView.vue'
import TransferView from '../views/TransferView.vue'
import DeviceView from '../views/DeviceView.vue'
import FunctionView from '../views/FunctionView.vue'
import HistoryView from '../views/HistoryView.vue'
import LogView from '../views/LogView.vue'
import SystemView from '../views/SystemView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoriteView
  },
  {
    path: '/layout',
    name: 'layout',
    component: LayoutView
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: TransferView
  },
  {
    path: '/device',
    name: 'device',
    component: DeviceView
  },
  {
    path: '/function',
    name: 'function',
    component: FunctionView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/log',
    name: 'log',
    component: LogView
  },
  {
    path: '/system',
    name: 'system',
    component: SystemView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
