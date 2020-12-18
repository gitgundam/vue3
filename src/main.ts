import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Gundam  from './components/Gundam.vue'
import Router from './components/Router.vue';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Gundam},
    {path: '/router', component: Router}
  ]
})

  const app = createApp(App)
  app.use(router)
  app.mount('#app')
