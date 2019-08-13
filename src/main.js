import Vue from 'vue'
import FaIcon from 'comps/base/FaIcon'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import customConfig from '@/config/index'
import './plugins/element.js'

import 'font-awesome/css/font-awesome.css'
import 'assets/styles/index.styl'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line 
  require('../mock')
}

Vue.config.productionTip = false
Vue.prototype.customConfig = customConfig // 自定义的配置参数

Vue.component('fa-icon', FaIcon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
