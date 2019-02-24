import Main from './components/server/Main.vue';
import Cart from './components/server/Cart.vue';
import Cabinet from './components/server/Cabinet.vue';
import Product from './components/server/Product.vue';
import Item from './components/global/Item.vue';


export const routes = [
  { path: '', component: Main, children: [
    // {path: 'product', component: Product},
    // {path: 'product:id', component: Item}
  ] }, 
  { path: '/product', component: Product, children: [
    {path: ':id', component: Item}
  ] },   
  { path: '/cart', component: Cart },
  { path: '/cabinet', component: Cabinet }  
  // { path: '/cabinet/:id/details', component: Cabinet }  
];