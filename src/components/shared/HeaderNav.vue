<template>
  <ul class="nav row col-12 col-lg-8">
    <li class="flex-grow-1" v-for="item in navItems">
      <a href="#">
        <span>{{ item }}</span>
        <i class="iconmoon"></i>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data: function() {
      return {
        navItems: ['меню', 'акции и скидки', 'доставка и оплата', 'новости', 'контакты']
      }
    }
  }

</script>

<style lang="sass" scoped>
  .nav
    border: 1px solid blue
    li
      height: 50px
      list-style: none
      border: 1px solid red
      a
        display: inline-block
        width: 100%
        line-height: 50px
        text-align: center
        text-transform: uppercase
        border: 1px solid green
      a:hover
        color: rgb(255, 255, 255)
        background-color: rgb(132, 198, 4)
        text-decoration: none
</style>