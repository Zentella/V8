import Vue from 'vue'
import App from './App.vue'
import router from './router' // router con minúsculas

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
