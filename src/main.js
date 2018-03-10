import Vue from 'vue'
import VueFire from 'vuefire'
import VueBlu from 'vue-blu'
import App from './App.vue'
import { store } from './store/store.js' 

Vue.use(VueFire);
Vue.use(VueBlu);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
