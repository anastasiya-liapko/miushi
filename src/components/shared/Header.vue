<template>
  <div class="header">

    <transition name="slide" appear>
      <div id="js-headerMenu" class="header__desktop d-lg-flex flex-column" v-show="show">
        <div class="header__top order-2 order-lg-1">
          <div class="container">
            <div class="row flex-nowrap justify-content-between">
              <app-header-logo></app-header-logo>
              <app-header-contacts></app-header-contacts>
            </div>
          </div>
        </div>

        <div class="header__bottom order-1 order-lg-2">
          <div class="container">
            <div class="row flex-nowrap">
              <app-header-nav></app-header-nav>
              <app-header-user></app-header-user>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- <transition enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp">
      <div id="js-headerMenu" class="header__desktop d-lg-flex flex-column animated" v-show="show">
        <div class="header__top order-2 order-lg-1">
          <div class="container">
            <div class="row flex-nowrap justify-content-between">
              <app-header-logo></app-header-logo>
              <app-header-contacts></app-header-contacts>
            </div>
          </div>
        </div>

        <div class="header__bottom order-1 order-lg-2">
          <div class="container">
            <div class="row flex-nowrap">
              <app-header-nav></app-header-nav>
              <app-header-user></app-header-user>
            </div>
          </div>
        </div>
      </div>
    </transition> -->

    <div class="header__mobile d-lg-none">
      <div class="container">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <app-header-burger id="js-burger" :show="show" @changeShow="show = $event"></app-header-burger>
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
  import { hideMixin } from '../../hideMixin.js';


  export default {
    data: function() {
      return {
        show: false
      }
    },
    // methods: {
    //   switchShow: function() {
    //     this.show = !this.show;
    //   }
    // },
    created: function() {
      eventBus.$on('changeShow', (show) => {
        this.show = show;
      });
    },
    methods: {
      hide: function(e) {
        var menu = document.querySelector('#js-headerMenu');
        var burger = document.querySelector('#js-burger');

        if (!menu.contains(e.target) && !burger.contains(e.target)){
          this.show = false;
          eventBus.switchShow(this.show);
        }
      }
    },
    mixins: [hideMixin],
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
    height: 50px
    margin-top: 20px
    border-top: 1px solid rgb(242, 242, 242)

  // animation
  .fade-enter
    opacity: 0

  .fade-enter-active
    transition: opacity 1s

  .fade-leave
    // opacity: 1

  .fade-leave-active
    transition: opacity 1s
    opacity: 0

  .slide-enter
    // transform: translateX(20px)

  .slide-enter-active
    animation: slide-in 0.5s ease-out forwards

  .slide-leave

  .slide-leave-active
    animation: slide-out 0.5s ease-out forwards

  @keyframes slide-in
    from
      transform: translateY(-100%)
    to
      transform: translateY(0)

  @keyframes slide-out
    from
      transform: translateY(0)
    to
      transform: translateY(-100%)


  @media(max-width: 991px)
    .header
      position: relative
      padding-top: 15px
      padding-bottom: 15px

    .header__desktop
      z-index: 30
      position: absolute
      top: 0
      left: 0
      display: flex
      flex-direction: column
      width: 380px
      height: auto
      background-color: rgb(255, 255, 255)
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2)
      .container
        padding: 25px
      .logo,
      .user
        display: none

    .header__bottom
      height: auto
      margin-top: 40px
      margin-bottom: 40px
      border: none


  @media(max-width: 575px)
    .header 
      padding-top: 5px
      padding-bottom: 5px

    .header__desktop
      width: 100%
      height: auto

  
</style>