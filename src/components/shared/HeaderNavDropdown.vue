<template>
  <ul class="dropdown row flex-column d-none">
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
    position: absolute
    width: 100%
    background-color: rgb(255, 255, 255)
    list-style: none

  .dropdown__item
    border: 1px solid red

</style>