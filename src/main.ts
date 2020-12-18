import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home  from './views/Home.vue'
import Doc  from './views/Doc.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/router', component: Doc}
  ]
})

  const app = createApp(App)
  app.use(router)
  app.mount('#app')
