import Vue from 'vue'
import VueFire from 'vuefire'
import VueBlu from 'vue-blu'
import App from './App.vue'

Vue.use(VueFire)
Vue.use(VueBlu)

new Vue({
  el: '#app',
  render: h => h(App)
})
