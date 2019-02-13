<template>
  <div class="hamburger-wrapper">
    <button class="hamburger hamburger--elastic btn" type="button" 
            @click="switchShow" 
            :class="{isActive: isShow, opened: isShow}">
    <!-- <button class="hamburger hamburger--elastic btn" type="button" @click="switchFn()" :class="{isActive: show}"> -->
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
  import { eventBus } from '../../main.js';

  export default {
    props: {
      show: Boolean
      // switchFn: Function
    },
    data: function() {
      return {
        isShow: this.show
      }
    },
    created: function() {
      eventBus.$on('bodyClick', (show) => {
        this.isShow = show;
      });
    },
    methods: {
      switchShow: function() {
        this.isShow = !this.isShow;
        // this.$emit('burgerClick', this.show);
        // eventBus.$emit('burgerClick', this.show);
        eventBus.switchShow(this.isShow);
      }
    }
  }
</script>

<style lang="sass">
  .hamburger,
  .hamburger-box,
  .hamburger-wrapper
    width: 20px
    height: 18px
    padding: 0

  .hamburger 
    &:hover
      cursor: pointer
    &:active
      background-color: transparent
    &:focus
      box-shadow: none

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after 
    width: 20px
    height: 2px
    background-color: rgb(132, 198, 4)

  .hamburger--elastic .hamburger-inner 
    top: 0
    &::before
      top: 7px
    &::after 
      top: 14px

  .hamburger--elastic.isActive .hamburger-inner
    transform: translate3d(0, 7px, 0) rotate(135deg)
    background-color: rgb(174, 174, 174)
    &::after
      transform: translate3d(0, -14px, 0) rotate(-270deg)
      background-color: rgb(174, 174, 174)

  .opened
    z-index: 1
    position: absolute
    top: 25px
    left: 335px


  @media(max-width: 991px)
    .hamburger-wrapper
      margin-right: 55px
    

  @media(max-width: 575px)
    .hamburger-wrapper
      margin-right: 45px

    .opened
      left: auto
      right: 25px


</style>