import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Ajustes from '../views/Ajustes.vue'
import NuevaCarta from '../views/NuevaCarta.vue'
import NuevoMazo from '../views/NuevoMazo.vue'
import RepasoCartas from '../views/RepasoCartas.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Ajustes',
    name: 'Ajustes',
    component: Ajustes
  },
  {
    path: '/NuevaCarta',
    name: 'Nueva carta',
    component: NuevaCarta  
  },
  {
    path: '/NuevoMazo',
    name: 'Nuevo mazo',
    component: NuevoMazo
  },
  {
    path: '/RepasoCartas',
    name: 'Repaso',
    component: RepasoCartas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
