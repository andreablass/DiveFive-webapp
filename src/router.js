import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Features from './pages/Features.vue'
import Faq from './pages/Faq.vue'
import Privacy from './pages/Privacy.vue'
import PressKit from './pages/PressKit.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/features', component: Features },
    { path: '/faq', component: Faq },
    { path: '/privacy', component: Privacy },
    { path: '/press-kit', component: PressKit },
  ],
})
