<template>
  <ul class="nav row flex-column flex-lg-row col-12 col-lg-8">
    <li class="nav__item flex-grow-1" v-for="(navItem, i) in navItems" :key="i" @click="dropdown">
      <a href="#">
        <span :class="{icon_down: navItem.length > 0}">{{ navItem[0] }}</span>
      </a>
      <app-header-nav-dropdown :dropdownItems="navItem[1]"></app-header-nav-dropdown>
    </li>
  </ul>
</template>

<script>
  import HeaderNavDropdown from './HeaderNavDropdown.vue';


  export default {
    data: function() {
      return {
        show: false,
        drop: false,
        navItems: [
          {
            0: 'меню',
            1: ['сеты', 'роллы', 'вок', 'пицца']
          },
          {
            0: 'акции и скидки'
          },
          {
            0: 'доставка и оплата',
            1: ['сеты', 'роллы', 'вок', 'пицца']
          },
          {
            0: 'новости'
          },
          {
            0: 'контакты'
          }
        ]

      }
    },
    methods: {
      dropdown(e) {
        var element = e.target;
  
        while (!element.classList.contains('nav__item')) {
          element = element.parentNode;
        }

        var dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(function (item, key) {
          item.classList.add('d-none');
        });

        element.querySelector('.dropdown').classList.remove('d-none');
        
      }
    },
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