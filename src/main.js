import Vue from 'vue'
import App from './App.vue'
import './assets/css/fonts.css'

// npm install hamburger
import 'hamburgers/dist/hamburgers.css'

// npm i bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// npm install vuelidate
import Vuelidate from 'vuelidate'

// npm install vue-select
import vSelect from 'vue-select'


Vue.use(BootstrapVue);
Vue.use(Vuelidate);


Vue.component('v-select', vSelect);


export const eventBus = new Vue({
  data: {
    // data is an object, not a function
  },
  methods: {
    bodyClick: function(show) {
      this.$emit('bodyClick', show);
    },
    switchShow: function(show) {
      this.$emit('burgerClick', show);
    },
    switchPage: function(selectedPage) {
      this.$emit('selectPage', selectedPage);
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})


