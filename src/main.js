import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$center = new Vue()
//声明page为全局组件
import Page from '@/components/common/Page.vue'
Vue.component('Page',Page)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
