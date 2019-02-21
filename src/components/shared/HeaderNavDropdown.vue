<template>
  <ul class="dropdown row flex-column flex-nowrap">
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
    width: 100%
    background-color: rgb(255, 255, 255)
    list-style: none
    box-shadow: 0 7px 20px 5px rgba(0, 0, 0, 0.2)
    overflow: hidden

  .dropdown__item
    border-bottom: 1px solid rgb(242, 242, 242)
    &:last-child
      border: none


  @media(max-width: 991px)
    .dropdown
      position: static
      padding-left: 25px
      box-shadow: none
    .dropdown__item
      border-bottom: none


</style>