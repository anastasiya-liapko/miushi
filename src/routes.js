import Main from './components/server/Main.vue';
import Cart from './components/server/Cart.vue';
import Cabinet from './components/server/Cabinet.vue';
// import Item from './components/server/Item.vue';


export const routes = [
  { path: '', component: Main, children: [
    // {path: '', component: Item}
  ] }, 
  { path: '/cart', component: Cart },
  { path: '/cabinet', component: Cabinet }  
  // { path: '/cabinet/:id/details', component: Cabinet }  
];