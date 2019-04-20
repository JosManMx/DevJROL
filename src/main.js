import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ProgressBar from 'vuejs-progress-bar'

Vue.use(ProgressBar)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})