import Vue from 'vue'
import App from './App.vue'

// npm i bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// npm install vue-resize 
// import 'vue-resize/dist/vue-resize.css'
// import VueResize from 'vue-resize'

Vue.use(BootstrapVue);
// Vue.use(VueResize);

new Vue({
  el: '#app',
  render: h => h(App)
})
