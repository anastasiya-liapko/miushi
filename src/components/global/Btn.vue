<template>
  <button class="btn row flex-nowrap" type="button" @click="btnClick">
    <span><slot></slot></span>
    <!-- <i class="icomoon"></i> -->
  </button>
</template>

<script>
  export default {
    data: function() {
      return {
        btnValue: false
      }
    },
    methods: {
      btnClick: function() {
        this.btnValue = !this.btnValue;
        this.$emit('btnClick', this.btnValue);
      }
    }
  }
</script>

<style lang="sass">
  .btn
    width: auto
    height: 40px
    text-transform: uppercase
    border-radius: 5px
    &:focus
      box-shadow: none

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
    color: rgb(255, 255, 255)
    background-color: rgb(253, 79, 16)

  .btn_add_to_cart
    width: 100%
    height: 40px


  @media(max-width: 575px)
    .btn
      width: 100%
</style>