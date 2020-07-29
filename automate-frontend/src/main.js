import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/css/app.css';

// Vuex Store
// import store from './store/store'

// Vue Router
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
