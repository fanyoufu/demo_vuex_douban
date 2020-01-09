import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入了vuex
import store from './store'

// 引入样式
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
