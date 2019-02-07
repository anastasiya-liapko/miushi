<template>
  <div id="app">
    <app-header></app-header>
    <p class="text-center">Hello World!</p>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
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

  .container
    padding: 0

  .row,
  .col,
  p
    margin: 0
    padding: 0

  .iconmoon
    width: 30px
    height: 30px
    border: 1px solid green
</style>
