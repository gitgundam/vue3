import {createRouter, createWebHashHistory} from 'vue-router';
import Home  from './views/Home.vue'
import Doc  from './views/Doc.vue'
import SwitchDoc from './components/SwitchDoc.vue'
import Tabs from './components/Tabs.vue'
import ButtonDoc from './components/ButtonDoc.vue'
import Dialog from './components/DialogDoc.vue'
import DocDemo from './components/DocDemo.vue'



export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children:[
        {path:'',component: DocDemo},
        {path:'switch',component: SwitchDoc},
        {path:'Tabs',component: Tabs},
        {path:'Button',component: ButtonDoc},
        {path:'Dialog',component: Dialog}
      ]}
  ]
})
