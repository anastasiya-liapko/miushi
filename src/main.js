import Vue from 'vue'
import App from './App.vue'
import './assets/css/fonts.css'

// npm install hamburger
import 'hamburgers/dist/hamburgers.css'

// npm i bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);


export const eventBus = new Vue({
  data: {
    // data is an object, not a function
  },
  methods: {
    switchShow(show) {
      this.$emit('burgerClick', show);
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})


