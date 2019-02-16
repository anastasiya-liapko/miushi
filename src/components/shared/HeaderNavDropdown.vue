<template>
  <ul class="dropdown row flex-column">
    <li class="dropdown__item" v-for="dropdownItem in dropdownItems">
      <a href="#">{{ dropdownItem }}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['dropdownItems']
  }

</script>

<style lang="sass" scoped>
  .dropdown
    z-index: 10
    position: absolute
    display: none
    width: 100%
    background-color: rgb(255, 255, 255)
    list-style: none

  .dropdown__item
    border: 1px solid red


  @media(max-width: 991px)
    .dropdown
      position: static

</style>