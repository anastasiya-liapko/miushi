<template>
  <div class="cart">
    <div class="container">
      <form id="js-cart" class="cart__form">
        
        <div class="cart__items row flex-column align-items-center">
          <h2 class="title">Ваш заказ</h2>

        </div><!-- cart__items -->
        
        
        <div class="cart__delivery row flex-column align-items-center">
          <h2 class="title">Получатель и адрес доставки</h2>
          <div class="row">
            <div div class="row flex-column col-6">
              <!-- <v-select v-model="selected" :options="[{label: 'Самовывоз', value: 'pickup'},{label: 'Курьер', value: 'courier'}]"></v-select> -->

              <input class="input input_green" type="text" name="name" placeholder="ФИО">

              <input class="input input_green" type="text" name="address" placeholder="Адрес">

              <input class="input input_green" type="text" name="phone" placeholder="Телефон">

              <input class="input input_green" type="text" name="email" placeholder="Email">
            </div>

            <div class="row justify-content-center col-6">
              <div class="calendar"></div>
            </div>
          </div>

          <textarea class="textarea textarea_green" name="comment"></textarea>

          <div class="submit row justify-content-center align-items-center">
              <div class="submit__captcha captcha"></div>

              <button class="submit__btn btn btn_red" type="submit" name="cart">Оформить заказ</button>
          </div>
        </div><!-- cart__delivery -->

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        selected: 'Самовывоз'
      }
    }
  }
</script>

<style lang="sass">

  .container
    width: 100%
    height: auto
    border: 1px solid red

  .cart__delivery
    border: 1px solid green
    .submit
      margin: 25px 0

  .cart
    .input,
    .select
      margin-bottom: 25px
    .calendar
      width: 250px
      height: 250px
      background-color: yellow
    .captcha
      margin-right: 50px

  .captcha
    width: 250px
    height: 75px
    border: 1px solid green

  // .v-select
  //   margin-bottom: 25px
  //   border-bottom: 1px solid rgb(132, 198, 4)
  //   .dropdown-toggle
  //     padding: 0
  //     border: none
  //     border-radius: 0
  //     &::after
  //       display: none
  //     &:hover
  //       background-color: rgb(132, 198, 4)
  //     &:hover .selected-tag
  //       color: rgb(255, 255, 255)
  //     &:hover .vs__actions .open-indicator::before,
  //     &:hover .vs__actions .open-indicator::after
  //       background-color: rgb(255, 255, 255)
  //   .vs__selected-options
  //     flex-wrap: nowrap
  //     flex-grow: 1
  //     padding: 0
  //     input[type="search"]
  //       width: 0
  //       height: 0
  //       margin: 0
  //       padding: 0
  //       border: none
  //   .selected-tag
  //     display: inline-block
  //     width: 100%
  //     height: 40px
  //     margin: 0
  //     padding: 0
  //     padding-left: 15px
  //     font-size: 14px
  //     line-height: 40px
  //     &:hover
  //       cursor: pointer
  //   &.single.open .selected-tag
  //     opacity: 1
  //   .vs__actions
  //     padding: 0
  //     width: 40px
  //     height: 40px
  //     .clear
  //       display: none
  //     .open-indicator
  //       position: relative
  //       width: 100%
  //       height: 100%
  //       transition: all 0.2s ease
  //       &::before,
  //       &::after
  //         content: ''
  //         position: absolute
  //         top: 50%
  //         left: 50%
  //         width: 8px
  //         height: 2px
  //         margin-top: -1px
  //         background-color: rgb(132, 198, 4)
  //         border: none
  //         transition: all 0.2s ease
  //       &::before
  //         margin-left: -4px
  //         transform: rotate(45deg)
  //       &::after
  //         margin-right: -4px
  //         transform: rotate(-45deg)
  //   &.open 
  //     .vs__actions
  //       .open-indicator::before
  //         transform: rotate(-45deg)
  //       .open-indicator::after
  //         transform: rotate(45deg) 
  //   .dropdown-menu
  //     padding: 0
  //     border-radius: 0
  //     border: 1px solid rgb(132, 198, 4)
  //     overflow-y: visible
  //     li a
  //       height: 40px
  //       padding-left: 15px
  //       font-size: 14px
  //       line-height: 40px
  //       &:hover
  //         color: rgb(255, 255, 255)
  //         background-color: rgb(132, 198, 4)
  //     .active > a
  //       background-color: rgba(132, 198, 4, 0.2)
  //     &>.highlight>a
  //       color: rgb(0, 0, 0)
  //       background-color: rgb(255, 255, 255)


</style>