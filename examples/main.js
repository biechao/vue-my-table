import Vue from 'vue'
import App from './App.vue'
import colDetail from './../packages/col-detail/index'
import comments from './../packages/comments/index'

Vue.component('col-detail', colDetail)
Vue.component('comments', comments)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
