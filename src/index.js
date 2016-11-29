import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './routes'
import './assets/style/style.css'

//开启debug模式
Vue.use(VueRouter)
Vue.use(VueResource)

router.afterEach(function (transition) {
  console.log(transition.name)
  if(transition.name){
    document.title = transition.name
  }
})
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
})
app.$mount('#root')