import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vlCat from '../packages'
import '../vue-lib.css'

Vue.use(vlCat)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
