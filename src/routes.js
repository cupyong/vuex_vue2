import VueRouter from 'vue-router'
import Index from './components/Home/index.vue'
import List from './components/Article/index.vue'
import Detail from './components/Detail/index.vue'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/list',
      name:'111',
      component: List
    },
    {
      path: '/detail/:id',
      name:'222',
      component: Detail
    }
  ]
})
export default router