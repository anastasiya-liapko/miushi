<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <p class="text-center">Hello World!</p>
      <app-footer></app-footer>
    </div>
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
    font-family: 'Roboto', Arial, sans-serif
    color: black
    background-color: white
</style>
