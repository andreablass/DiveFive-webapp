import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router.js'
import './assets/tailwind.css'

import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es, fr }
})

createApp(App).use(router).use(i18n).mount('#app')
