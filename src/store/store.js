import Vue from 'vue';
// npm install --save vuex
import Vuex from 'vuex';
import * as actions from './actions.js';
import counter from './modules/counter.js';


Vue.use(Vuex);


export const store = new Vuex.Store({
  actions,
  modules: {
    counter
  }
});