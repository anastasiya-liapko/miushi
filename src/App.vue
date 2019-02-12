<template>
  <div id="app">
    <app-header></app-header>

    <keep-alive>
      <component :is="selectedPage">
      </component>
    </keep-alive>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';

  import Main from './components/server/Main.vue';
  import Cart from './components/server/Cart.vue';
  import Cabinet from './components/server/Cabinet.vue';

  import { eventBus } from './main.js';


  export default {
    data: function () {
      return {
        selectedPage: 'app-main'
      }
    },
    created() {
      eventBus.$on('selectPage', (page) => {
        this.selectedPage = page;
      });
    },
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-main': Main,
      'app-cart': Cart,
      'app-cabinet': Cabinet
    }
  }
</script>

<style lang="sass">
  #app 
    font-family: 'Open Sans', sans-serif
    font-size: 0.875rem
    font-weight: 400
    line-height: normal
    color: rgb(0, 0, 0)
    background-color: rgb(255, 255, 255)
  
  a
    font-size: 0.875rem
    font-weight: 400
    line-height: normal
    color: rgb(0, 0, 0)

  img
    width: 100%
    height: auto

  .row,
  .col,
  p
    margin: 0
    padding: 0

  .icomoon
    width: 30px
    height: 30px
    border: 1px solid green

</style>
