<template>
  <ul class="nav row flex-column flex-lg-row col-12 col-lg-8">
    <li class="nav__item flex-grow-1" 
        :class="{isOpened: navItems[i].isShown}"
        v-for="(navItem, i) in navItems" 
        @click="dropdown(i)">

      <!-- <transition-group name="slide"> -->
      <a href="#" :class="{isOpened: navItems[i].isShown}">
        <span :class="{icon_down: navItem[1], isOpened: navItems[i].isShown}">{{ navItem[0] }}</span>
      </a>
      
      <!-- <transition enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"> -->
      <transition name="max-height">
        <app-header-nav-dropdown :dropdownItems="navItem[1]" 
                                 v-show="navItems[i].isShown && navItem[1]"></app-header-nav-dropdown>
      </transition>
      <!-- </transition-group> -->
      

    </li>
  </ul>
</template>

<script>
  import HeaderNavDropdown from './HeaderNavDropdown.vue';

  import { hideMixin } from '../../hideMixin.js';


  export default {
    data: function() {
      return {
        navItems: [
          {
            0: 'меню',
            1: ['сеты', 'роллы', 'вок', 'пицца'],
            'isShown':  false
          },
          {
            0: 'акции и скидки',
            'isShown':  false
          },
          {
            0: 'доставка и оплата',
            1: ['сеты', 'роллы', 'вок', 'пицца'],
            'isShown':  false
          },
          {
            0: 'новости',
            'isShown':  false
          },
          {
            0: 'контакты',
            'isShown':  false
          }
        ]
      }
    },
    methods: {
      dropdown: function(i) {
        this.navItems[i].isShown = !this.navItems[i].isShown;
        // document.querySelector('.dropdown').style.height = this.navItems[i].isShown ? '500px': '0px';
        // document.querySelector('.dropdown').style.transition = 'height 5s linear';
      },
      hide: function(e) {
        var openedNavItem = document.querySelectorAll('.nav__item');
        var openedDropdown = document.querySelectorAll('.dropdown');

        for (var i = 0; i < openedDropdown.length; i++) {
          if (this.navItems[i].isShown === true
             && !openedDropdown[i].contains(e.target)
             && !openedNavItem[i].contains(e.target)) {
            this.navItems[i].isShown = false;
          }
        };
      }
    },
    mixins: [hideMixin],
    components: {
      'app-header-nav-dropdown': HeaderNavDropdown
    }
  }

</script>

<style lang="sass">
  .nav__item
    position: relative
    list-style: none
    a
      display: inline-block
      width: 100%
      line-height: 50px
      text-align: center
      text-transform: uppercase
      transition: all 0.3s ease
      &:hover,
      &.isOpened
        color: rgb(255, 255, 255)
        background-color: rgb(132, 198, 4)
        text-decoration: none
      &:hover .icon_down::before,
      &:hover .icon_down::after,
      &.isOpened .icon_down::before,
      &.isOpened .icon_down::after
        background-color: rgb(255, 255, 255)
    a.isActive
      color: rgb(255, 255, 255)
      background-color: rgb(132, 198, 4)
      text-decoration: none

  .icon_down
    position: relative
    padding-right: 15px
    &::before
      content: ""
      position: absolute
      top: 50%
      right: 0
      width: 8px
      height: 1px
      margin-top: -1px
      background-color: rgb(0, 0, 0)
      transform: rotate(45deg)
      transition: transform 0.2s ease
    &::after
      content: ""
      position: absolute
      top: 50%
      right: 0
      width: 8px
      height: 1px
      margin-top: -1px
      margin-right: -5px
      background-color: rgb(0, 0, 0)
      transform: rotate(-45deg)
      transition: transform 0.2s ease
    &.isOpened::before
      transform: rotate(-45deg)
    &.isOpened::after
      transform: rotate(45deg)


  @media(max-width: 991px)
    .nav__item
      a
        position: relative
        text-align: left
        &::before
          content: ''
          position: absolute
          left: 0
          bottom: 0
          height: 1px
          width: 0
          background-color: rgb(0, 0, 0)
          transition: all 0.3s ease
        &:hover::before,
        &.isOpened::before
          width: 100%
        &:hover,
        &.isOpened
          color: rgb(0, 0, 0)
          background-color: rgb(255, 255, 255)

        &:hover .icon_down::before,
        &:hover .icon_down::after,
        &.isOpened .icon_down::before,
        &.isOpened .icon_down::after
          background-color: rgb(0, 0, 0)
    
</style>