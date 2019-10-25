import Vue from 'vue'
import App from './App.vue'
import colDetail from './../packages/col-detail/index'

Vue.component('col-detail', colDetail)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
