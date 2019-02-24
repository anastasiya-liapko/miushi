import Vue from 'vue';
import App from './App.vue';
import './assets/css/fonts.css';

// npm install hamburger
import 'hamburgers/dist/hamburgers.css';

// npm i bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// npm install vuelidate
import Vuelidate from 'vuelidate';

// npm install vue-dropdowns // (select)

// npm i pretty-checkbox-vue
import 'pretty-checkbox/dist/pretty-checkbox.css';
import 'pretty-checkbox-vue/dist/pretty-checkbox-vue.js';
import PrettyCheckbox from 'pretty-checkbox-vue';

// npm install animate.css
import 'animate.css/animate.min.css';

// npm install vue-resource
import VueResource from 'vue-resource';

// npm install vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

// npm install vue-router
import VueRouter from 'vue-router';
import { routes } from './routes.js';

import { store } from './store/store.js';

// npm install --save-dev babel-preset-stage-3
// in '.babelrc' {
//                 "presets": [
//                   ["env", { "modules": false }],
//                   "stage-3"
//                 ]
//               }


Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(PrettyCheckbox);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);


Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});


export const eventBus = new Vue({
  data: {
    // data is an object, not a function
  },
  methods: {
    switchShow(show) {
      this.$emit('changeShow', show);
    },
    switchPage(selectedPage) {
      this.$emit('selectPage', selectedPage);
    }
  }
});

const router = new VueRouter({
  routes, // routes: routes
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});


new Vue({
  el: '#app',
  store, // store: store
  router, // router: router
  render: h => h(App)
})


Vue.http.options.emulateJSON = true; // without $ ($ is used when accessing from vue instance)
Vue.http.options.emulateHTTP = true; // without $ ($ is used when accessing from vue instance)





