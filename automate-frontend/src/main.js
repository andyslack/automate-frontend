import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import VueCookie from 'vue-cookie';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/css/app.css';

// Vuex Store
// import store from './store/store'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

Vue.config.productionTip = false

Vue.use(
  Vuesax,
  VueCookie, {
  // options here
})

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
