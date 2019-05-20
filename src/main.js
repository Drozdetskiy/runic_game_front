import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueSocketio, io('http://localhost:8081/game'))
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
