<template>
  <div id="app">
    <!-- <div class="overlay" v-if="show"></div> -->

    <app-header></app-header>

    <router-view>

    <!-- <transition-group name="slide-page" mode="in-out"> -->
    <!-- <keep-alive> -->
      <!-- <component :is="selectedPage" :key="selectedPage"> -->
      <component :is="selectedPage">
      </component>
    <!-- </keep-alive> -->
    <!-- </transition-group> -->

    </router-view>

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
    data: function() {
      return {
        selectedPage: 'app-main'
        // show: false
      }
    },
    created: function() {
      eventBus.$on('selectPage', (page) => {
        this.selectedPage = page;
      });
      // eventBus.$on('changeShow', (show) => {
      //   this.show = show;
      // });
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
    position: relative
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
  div[class^='col-'],
  p
    margin: 0
    padding: 0

  .overlay
    z-index: 20
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, 0.4)

  .title
    position: relative
    margin: 50px 0
    padding: 0 140px
    font-family: 'Marck Script', cursive
    font-size: 40px
    line-height: 1
    font-weight: 400
    text-align: center
    color: rgb(50, 80, 90)
    &::before,
    &::after
      content: ''
      position: absolute
      top: 50%
      width: 109px
      height: 40px
      margin-top: -20px
      background-repeat: no-repeat
      background-position: center
      background-size: cover
    &::before
      left: 0
      background-image: url('./assets/img/title-left-pic.png')
    &::after
      right: 0
      background-image: url('./assets/img/title-right-pic.png')

  .icomoon
    width: 30px
    height: 30px
    border: 1px solid green

  .input
    width: 100%
    height: 40px
    padding-left: 15px
    font-size: 14px
    line-height: 24px
    font-weight: 400
    color: rgb(0, 0, 0)
    opacity: 1
    border: none
    transition: all 0.2s ease
    &:focus
      outline: none
    &::-ms-clear 
      display: none
    &::-ms-reveal
      display: none
  .input::-webkit-input-placeholder
    color: rgb(0, 0, 0)
    -webkit-transition: all 0.2s ease
    -moz-transition: all 0.2s ease
    -o-transition: all 0.2s ease
    transition: all 0.2s ease
    animation: all 0.2s ease
  .input::-moz-placeholder
    color: rgb(0, 0, 0)
    opacity: 1
    -webkit-transition: all 0.2s ease
    -moz-transition: all 0.2s ease
    -o-transition: all 0.2s ease
    transition: all 0.2s ease
    animation: all 0.2s ease
  .input::-ms-input-placeholder
    color: rgb(0, 0, 0)
    -webkit-transition: all 0.2s ease
    -moz-transition: all 0.2s ease
    -o-transition: all 0.2s ease
    transition: all 0.2s ease
    animation: all 0.2s ease
  .input::placeholder
    color: rgb(0, 0, 0)
    -webkit-transition: all 0.2s ease
    -moz-transition: all 0.2s ease
    -o-transition: all 0.2s ease
    transition: all 0.2s ease
    animation: all 0.2s ease
  .input:focus::-webkit-input-placeholder
    color: transparent
  .input:focus::-moz-placeholder
    color: transparent
  .input:focus::-ms-input-placeholder
    color: transparent
  .input:focus::placeholder
    color: transparent

  .input_green
    border-bottom: 1px solid rgb(132, 198, 4)

  .input_white
    border-bottom: 1px solid rgb(255, 255, 255)

  .textarea
    width: 100%
    height: 150px
    padding: 15px
    transition: all 0.2s ease
    &:focus
      outline: none
  .textarea::-webkit-input-placeholder
    color: rgb(0, 0, 0)
    transition: all 0.2s ease
  .textarea::-moz-placeholder
    color: rgb(0, 0, 0)
    opacity: 1
    transition: all 0.2s ease
  .textarea:-ms-input-placeholder
    color: rgb(0, 0, 0)
    transition: all 0.2s ease
  .textarea::placeholder
    color: rgb(0, 0, 0)
    transition: all 0.2s ease
  .textarea:focus::-webkit-input-placeholder
    color: transparent
  .textarea:focus::-moz-placeholder
    color: transparent
  .textarea:focus::-ms-input-placeholder
    color: transparent
  .textarea:focus::placeholder
    color: transparent

  .textarea_green
    border: 1px solid rgb(132, 198, 4)


  // slide down/up
  .slide-enter

  .slide-enter-active
    transform-origin: top
    animation: slide-in 0.2s linear forwards

  .slide-leave
    
  .slide-leave-active
    // position: absolute
    transform-origin: top
    animation: slide-out 0.2s linear forwards

  .slide-move
    transition: transform 5s linear

  @keyframes slide-in
    from
      transform: rotateX(-90deg)
    to
      transform: rotateX(0deg)

  @keyframes slide-out
    from
      transform: rotateX(0deg)
    to
      transform: rotateX(-90deg)


  // slide down/up for components with same height
  .slide-page-enter

  .slide-page-enter-active
    transform-origin: top
    animation: slide-page-in 0.2s linear forwards

  .slide-page-leave
    
  .slide-page-leave-active
    position: absolute
    transform-origin: bottom
    animation: slide-page-out 0.2s linear forwards

  @keyframes slide-page-in
    from
      transform: rotateX(-90deg)
    to
      transform: rotateX(0deg)

  @keyframes slide-page-out
    from
      transform: rotateX(0deg)
    to
      transform: rotateX(-90deg)


  // slide left/right
  .slide-left-enter

  .slide-left-enter-active
    transform-origin: right
    animation: slide-left-in 0.2s linear forwards

  .slide-left-leave
    
  .slide-left-leave-active
    transform-origin: right
    animation: slide-left-out 0.2s linear forwards

  @keyframes slide-left-in
    from
      transform: rotateY(-90deg)
    to
      transform: rotateY(0deg)

  @keyframes slide-left-out
    from
      transform: rotateY(0deg)
    to
      transform: rotateY(-90deg)


  // slide height
  .max-height-enter

  .max-height-enter-active
    animation: max-height-in 0.6s ease-in-out

  .max-height-leave
    
  .max-height-leave-active
    animation: max-height-out 0.5s ease-in-out

  @keyframes max-height-in
    from
      max-height: 0
    to
      max-height: 500px

  @keyframes max-height-out
    from
      max-height: 500px
    to
      max-height: 0

  // hover for round button
  // .btn_green
  //   border-radius: 50%
  //   position: relative
  //   width: 50px
  //   height: 50px
  //   font-size: 0.8125rem
  //   color: rgb(31, 186, 10)
  //   background-color: rgb(255, 255, 255)
  //   box-shadow: 0 0 0 4px rgba(31, 186, 10, 1)
  //   &::after
  //     content: ''
  //     position: absolute
  //     top: -5px
  //     left: -5px
  //     right: -5px
  //     bottom: -5px
  //     border: 4px dashed rgba(31, 186, 10, 1)
  //     border-radius: 50%
  //     pointer-events: none
  //   &:hover
  //     box-shadow: 0 0 0 4px rgba(31, 186, 10, 0)
  //     color: rgba(31, 186, 10, 1)
  //     -webkit-transition: box-shadow 0.2s
  //     -moz-transition: box-shadow 0.2s
  //     transition: box-shadow 0.2s
  //   &:hover::after
  //     -webkit-animation: spinAround 9s linear infinite
  //     -moz-animation: spinAround 9s linear infinite
  //     animation: spinAround 9s linear infinite

  // @-webkit-keyframes spinAround 
  //     from 
  //         -webkit-transform: rotate(0deg)
  //     to 
  //         -webkit-transform: rotate(360deg)

  // @-moz-keyframes spinAround 
  //     from 
  //         -moz-transform: rotate(0deg)
  //     to 
  //         -moz-transform: rotate(360deg)
    
  // @keyframes spinAround 
  //     from 
  //         transform: rotate(0deg)
  //     to 
  //         transform: rotate(360deg)

  
  @media(max-width: 767px)
    .title 
      font-size: 30px
      padding: 0 65px
      &::before,
      &::after  
        width: 55px 
        height: 20px
        margin-top: -10px
    .title_without-pics
      padding: 0
      &::before,
      &::after
        display: none


</style>
