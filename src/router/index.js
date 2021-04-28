import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/pocetna.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: Pocetna
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import('../views/registracija.vue')
  },
  {
    path: '/galerija',
    name: 'galerija',
    component: () => import('../views/galerija.vue')
  },
  {
    path: '/dogadaji',
    name: 'dogadaji',
    component: () => import('../views/dogadaji.vue')
  },
  {
    path: '/figurice',
    name: 'figurice',
    component: () => import('../views/figurice.vue')
  },
  {
    path: '/catan',
    name: 'catan',
    component: () => import('../views/catan.vue')
  },
  {
    path: '/d&d',
    name: 'd&d',
    component: () => import('../views/d&d.vue')
  },
  {
    path: '/7wonders',
    name: '7wonders',
    component: () => import('../views/7wonders.vue')
  },
  {
    path: '/mtg',
    name: 'mtg',
    component: () => import('../views/mtg.vue')
  },
  {
    path: '/yugioh',
    name: 'yugioh',
    component: () => import('../views/yugioh.vue')
  },
  {
    path: '/risk',
    name: 'risk',
    component: () => import('../views/risk.vue')
  },
  {
    path: '/uno',
    name: 'uno',
    component: () => import('../views/uno.vue')
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../views/pokemon.vue')
  },
  {
    path: '/lostcity',
    name: 'lostcity',
    component: () => import('../views/lostcities.vue')
  },
  {
    path: '/arkhamhorror',
    name: 'arkhamhorror',
    component: () => import('../views/arkhamhorror.vue')
  },
  {
    path: '/splendor',
    name: 'splendor',
    component: () => import('../views/splendor.vue')
  },
  {
    path: '/bloodrage',
    name: 'bloodrage',
    component: () => import('../views/bloodrage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next)=>{
  next();
})



export default router