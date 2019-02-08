<template>
  <div>
    <button class="btn btn_green row flex-nowrap" type="button">
      <span>Обратный звонок</span>
      <!-- <i class="icomoon"></i> -->
    </button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  .btn
    width: auto
    height: 40px
    text-transform: uppercase
    border-radius: 5px

  .btn_green
    width: 170px
    height: 40px
    font-size: 0.8125rem
    color: rgb(31, 186, 10)
    background-color: rgb(255, 255, 255)
    border: 1px solid rgb(31, 186, 10)

  .btn_red
    width: 250px
    height: 55px
    background-color: rgb(253, 79, 16)

  .btn_add_to_cart
    width: 100%
    height: 40px
</style>