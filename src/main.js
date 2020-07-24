import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.use(Meta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
