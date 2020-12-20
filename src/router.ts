import {createRouter, createWebHashHistory} from 'vue-router';
import Home  from './views/Home.vue'
import Doc  from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Tabs from './components/Tabs.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import DocDemo from './components/DocDemo.vue'



export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children:[
        {path:'',component: DocDemo},
        {path:'switch',component: Switch},
        {path:'Tabs',component: Tabs},
        {path:'Button',component: Button},
        {path:'Dialog',component: Dialog}
      ]}
  ]
})
