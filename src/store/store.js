import Vue from 'vue';
// npm install vuex
import Vuex from 'vuex';
import * as actions from './actions.js';
// import quantity from './modules/quantity.js';
import products from './modules/products.js';
import cart from './modules/cart.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        products,
        cart
    }
});