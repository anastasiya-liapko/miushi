<template>
  <div class="header">

    <div class="header__desktop d-lg-flex flex-column" v-show="show">
      <div class="header__top order-2 order-lg-1">
        <div class="container">
          <div class="row flex-nowrap justify-content-between">
            <app-header-logo></app-header-logo>
            <app-header-contacts></app-header-contacts>
          </div>
        </div>
      </div><!-- header__top -->

      <div class="header__bottom order-1 order-lg-2">
        <div class="container">
          <div class="row flex-nowrap">
            <app-header-nav></app-header-nav>
            <app-header-user></app-header-user>
          </div>
        </div>
      </div><!-- header__bottom -->
    </div><!-- header__desktop -->

    <div class="header__mobile d-lg-none">
      <div class="container">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <app-header-burger :show="show" @burgerClick="show = $event"></app-header-burger>
          <!-- <app-header-burger :switchFn="switchShow"></app-header-burger> -->
          <app-header-logo></app-header-logo>
          <app-header-user></app-header-user>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import HeaderLogo from './HeaderLogo.vue';
  import HeaderContacts from './HeaderContacts.vue';
  import HeaderNav from './HeaderNav.vue';
  import HeaderUser from './HeaderUser.vue';
  import HeaderBurger from '../global/Burger.vue';

  import { eventBus } from '../../main.js';


  export default {
    data: function () {
      return {
        show: false
      }
    },
    methods: {
      switchShow() {
        this.show = !this.show;
      }
    },
    created() {
      eventBus.$on('burgerClick', (show) => {
        this.show = show;
      });
    },
    components: {
      'app-header-logo': HeaderLogo,
      'app-header-contacts': HeaderContacts,
      'app-header-nav': HeaderNav,
      'app-header-user': HeaderUser,
      'app-header-burger': HeaderBurger
    }
  }
</script>

<style lang="sass" scoped>
  .header
    padding-top: 10px    

  .header__bottom
    margin-top: 20px
    border-top: 1px solid rgb(242, 242, 242)


  @media(max-width: 991px)
    .header
      position: relative
      padding-top: 15px
      padding-bottom: 15px

    .header__desktop
      z-index: 1
      position: absolute
      top: 0
      left: 0
      display: flex
      flex-direction: column
      width: 380px
      height: auto
      background-color: rgb(255, 255, 255)
      border: 1px solid red
      .container
        padding: 25px
      .logo,
      .user
        display: none

    .header__bottom
      margin-top: 40px
      margin-bottom: 40px
      border: none

    .hamburger
      z-index: 1
      margin-right: 55px


  @media(max-width: 575px)
    .header 
      padding-top: 5px
      padding-bottom: 5px

    .header__desktop
      width: 100%
      height: auto

    .hamburger
      margin-right: 45px
  
</style>