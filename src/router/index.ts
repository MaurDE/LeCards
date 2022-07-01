import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Ajustes from '../views/Ajustes.vue'
import MazosView from '../views/MazosView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/Ajustes',
    name: 'Ajustes',
    component: Ajustes
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'ListsView',
        component: () => import('@/views/ListsView.vue')
      },
      {
        path: 'MazosView',
        component: () => import('@/views/MazosView.vue'),
        name: 'MazosView',
      },
      {
        path: 'MazosViewa',
        component: () => import('@/views/MazosViewa.vue'),
        name: 'MazosViewa',
      },
      {
        path: 'MazosViews',
        component: () => import('@/views/MazosViews.vue'),
        name: 'MazosViews',
      },
      {
        path: 'MazosViewd',
        component: () => import('@/views/MazosViewd.vue'),
        name: 'MazosViewd',
      },
      {
        path: 'CCarta',
        component: () => import('@/views/CrearCarta.vue')
      },
      {
        path: 'Ajustes',
        component: () => import('@/views/Ajustes.vue')
      },
      {
        path: 'CMazo',
        component: () => import('@/views/CrearMazo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
