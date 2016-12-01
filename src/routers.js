import VueRouter from 'vue-router'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: require('./views/index')
    }
    
  ]
})
export default router
