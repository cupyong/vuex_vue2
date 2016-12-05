import VueRouter from 'vue-router'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: require('./views/index')
    },
    {
      path: '/list',
      name:'111',
      component:  require('./views/list')
    },
    {
      path: '/detail/:id',
      name:'222',
      component:  require('./components/Article/detail.vue')
    }
  ]
})
export default router
