<template>
  <div class="logo" @click="switchPage('app-main')">
    <img 
        class="logo__desktop" 
        src="../../assets/img/miushi-logo-desktop.png" 
        alt="logo">
    <img 
        class="logo__mobile" 
        src="../../assets/img/miushi-logo-mobile.png" 
        alt="logo">
  </div>
</template>

<script>
  import { eventBus } from '../../main.js';


  export default {
    props: ['mobile'],
    methods: {
      switchPage(page) {
        eventBus.switchPage(page);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .logo
    width: 190px
    height: 70px
    margin-right: 55px
    &:hover
      cursor: pointer
  .logo__mobile
    display: none

  @media(max-width: 1199px) 
    .logo
      margin-right: 20px

  @media(max-width: 991px)
    .logo
      width: 150px
      height: 55px
      margin-right: 0
      
  @media(max-width: 575px)
    .logo 
      width: 55px
      height: 52px
    .logo__desktop
      display: none
    .logo__mobile
      display: block
</style>