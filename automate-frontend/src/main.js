import Vue from 'vue';
import App from './App.vue';
import Vuesax from 'vuesax';
import VueCookie from 'vue-cookie';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import './assets/css/app.css';
import 'feather-icons'

// Globally Registered Components
import './custom.js'
// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuesax, {});
Vue.use(VueCookie);

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
