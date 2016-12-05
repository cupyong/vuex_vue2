// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import routerConfig from './routers'
import store from './vuex/store'
import FastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/style.css'
import router from './routers'

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
router.afterEach(function (transition) {
  if(transition.name){
    document.title = transition.name
  }
})
const app = new Vue({
  store,
  router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
})
app.$mount('#app')
// const router = new VueRouter({routes: routerConfig})
/* eslint-disable no-new */
// new Vue({
//   router,
//   el: '#app',
//   store,
//   render: h => h(App)
// })
