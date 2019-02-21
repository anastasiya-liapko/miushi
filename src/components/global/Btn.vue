<template>
  <button class="btn row flex-nowrap" type="button" @click="btnClick">
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" rx="5" ry="5"/>
    </svg>
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
    text-transform: uppercase
    border-radius: 5px
    &:focus
      box-shadow: none

  .btn_border
    position: relative
    font-weight: 400
    border-radius: 5px
    transition: all 0.2s linear
    rect 
      fill: none
      stroke-width: 2
      stroke-dasharray: 422, 0
      transition: all 0.35s linear
      // pointer-events: none
    &:hover
      font-weight: 900
      letter-spacing: 1px
    &:hover
      rect
        stroke-width: 2
        stroke-dasharray: 15, 310
        stroke-dashoffset: 48
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1)

  svg 
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

  .btn_green
    width: 170px
    height: 40px
    font-size: 0.8125rem
    color: rgb(31, 186, 10)
    background-color: rgb(255, 255, 255)
    // border: 1px solid rgb(31, 186, 10)
    rect
      stroke: rgb(31, 186, 10)
    &:hover
      color: rgb(31, 186, 10)

  .btn_red
    width: 250px
    height: 55px
    color: rgb(255, 255, 255)
    background-color: rgb(253, 79, 16)
    rect
      stroke: rgb(253, 79, 16)
    &:hover
      color: rgb(253, 79, 16)
      background-color: rgb(255, 255, 255)
    &:hover
      rect
        stroke-dasharray: 40, 400
        stroke-dashoffset: 485

  .btn_add_to_cart
    width: 100%
    height: 40px


  @media(max-width: 575px)
    .btn
      width: 100%

    .btn_green
      width: 170px  
</style>