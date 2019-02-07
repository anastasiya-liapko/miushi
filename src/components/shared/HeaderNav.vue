<template>
  <ul class="nav row col-12 col-lg-8">
    <li class="nav__item flex-grow-1" v-for="(item, i) in navItems">
      <a href="#">
        <span :class="{icon_down: item === 'меню'}">{{ item }}</span>
      </a>
      <ul class="dropdown row flex-column" v-show="show" v-for="n in 5">
        <li class="dropdown__item">
          <a href="#">{{ n }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    data: function() {
      return {
        show: false,
        navItems: ['меню', 'акции и скидки', 'доставка и оплата', 'новости', 'контакты']
      }
    }
  }

</script>

<style lang="sass" scoped>
  .nav
    border: 1px solid blue
    .nav__item
      height: 50px
      list-style: none
      border: 1px solid red
      a
        display: inline-block
        width: 100%
        line-height: 50px
        text-align: center
        text-transform: uppercase
      a:hover
        color: rgb(255, 255, 255)
        background-color: rgb(132, 198, 4)
        text-decoration: none
      a:hover .icon_down::before,
      a:hover .icon_down::after
        background-color: rgb(255, 255, 255)

  .icon_down
    position: relative
    padding-right: 15px
  .icon_down::before
    content: ""
    position: absolute
    top: 50%
    right: 0
    width: 8px
    height: 1px
    margin-top: -1px
    // margin-right: -5px
    background-color: rgb(0, 0, 0)
    transform: rotate(45deg)

  .icon_down::after
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


</style>