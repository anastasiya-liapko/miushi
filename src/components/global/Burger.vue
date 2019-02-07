<template>
  <button class="burger btn" type="button" @click="show = !show">
    <span class="burger__icon" :class="{animate: show}"></span>
  </button>
</template>

<script>
  export default {
    props: ['show']
  }
</script>

<style lang="sass">
  .burger
    width: 20px
    height: 20px
    padding: 0
  .burger:hover
    cursor: pointer
  .burger:active
    background-color: transparent
  .burger:focus
    box-shadow: none

  .burger__icon
    position: relative
    display: block
    width: 20px
    height: 2px
    background: rgb(132, 198, 4)
    transition: all 0ms 300ms

  .burger__icon:before, 
  .burger__icon:after 
    content: ""
    position: absolute
    left: 0
    width: 20px
    height: 2px
    background: rgb(132, 198, 4)

  .burger__icon:before 
    bottom: 7px
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1)

  .burger__icon:after 
    top: 7px
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms cubic-bezier(0.23, 1, 0.32, 1)

  .burger__icon.animate 
    background: rgba(0, 0, 0, 0)
    
  .burger__icon.animate:before
    bottom: 0
    -webkit-transform: rotate(-45deg)
            transform: rotate(-45deg)
    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)

  .burger__icon.animate:after 
    top: 0
    -webkit-transform: rotate(45deg)
            transform: rotate(45deg)
    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)
    transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1)

</style>