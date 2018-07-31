import Vue from 'vue'
import App from './App'
import router from './router'

Vue.prototype.$center = new Vue();

var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})