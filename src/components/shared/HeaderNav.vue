<template>
  <ul class="nav row flex-column flex-lg-row col-12 col-lg-8">
    <li class="nav__item flex-grow-1" v-for="(navItem, i) in navItems" @click="dropdown(i)">
    <!-- <li class="nav__item flex-grow-1" v-for="(navItem, i) in navItems"> -->
      <a href="#">
        <span :class="{icon_down: navItem[1]}">{{ navItem[0] }}</span>
      </a>
      <transition enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp">
        <app-header-nav-dropdown :dropdownItems="navItem[1]" v-show="navItems[i].isShown"></app-header-nav-dropdown>
      </transition>
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
      &:hover
        color: rgb(255, 255, 255)
        background-color: rgb(132, 198, 4)
        text-decoration: none
      &:hover .icon_down::before,
      &:hover .icon_down::after
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


  @media(max-width: 991px)
    .nav__item
      a
        text-align: left

</style>