import Main from './components/server/Main.vue';


// const Cart = resolve => {
//   requier.ensure(['./components/server/Cart.vue'], () => {
//     resolve(require('./components/server/Cart.vue'));
//   });
// };

// const Cabinet = resolve => {
//   requier.ensure(['./components/server/Cabinet.vue'], () => {
//     resolve(require('./components/server/Cabinet.vue'));
//   });
// };

// const Product = resolve => {
//   requier.ensure(['./components/server/Product.vue'], () => {
//     resolve(require('./components/server/Product.vue'));
//   });
// };

// const Item = resolve => {
//   requier.ensure(['./components/global/Item.vue'], () => {
//     resolve(require('./components/global/Item.vue'));
//   });
// };


import Cart from './components/server/Cart.vue';
import Cabinet from './components/server/Cabinet.vue';
import Product from './components/server/Product.vue';
import Item from './components/global/Item.vue';


export const routes = [
  { path: '/', component: Main, name: 'Home', children: [
    // {path: 'product', component: Product},
    // {path: 'product:id', component: Item}
  ] }, 
  { path: '/product', component: Product, children: [
    {path: ':id', component: Item, name: 'Item'}
  ] },   
  { path: '/cart', component: Cart },
  { path: '/cabinet', component: Cabinet }, 
  { path: '*', redirect: '/' }
];