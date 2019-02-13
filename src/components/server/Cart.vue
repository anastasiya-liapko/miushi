<template>
  <div class="cart">
    <div class="container">
      <form id="js-cart" class="cart__form">

        <div class="cart__items">

        </div><!-- cart__items -->
        
        <div class="cart__delivery row flex-column">
          <div class="row">
            <div div class="row flex-column col-6">
              <!-- <select class="select" name="delivery">
                <option name="pickup"></option>
                <option name="courier"></option>
              </select> -->
              <v-select :options="[{label: 'Самовывоз', value: 'pickup'},{label: 'Курьер', value: 'courier'}]">
              
                
              </v-select>

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

  .v-select
    margin-bottom: 25px
    .dropdown-toggle
      height: 40px
      padding: 0
    .dropdown-toggle::after,
    .clear
      display: none
    &.single .selected-tag
      display: inline-block
      width: 100%
      height: 40px
      margin: 0
      padding: 0
      line-height: 40px
      &:hover
        cursor: pointer
    &.single.open .selected-tag
      position: static
      width: 100%
      opacity: 1
    input[type="search"],
    input[type="search"]:focus
      height: 0
      width: 0
      margin: 0
      padding: 0
      border: none
    .vs__actions
      display: flex
      justify-content: center
      align-items: center
      width: 40px
      height: 40px
      padding: 0
    .open-indicator
      width: 15px
      height: 15px
    .open-indicator::before
      border-width: 2px 2px 0 0
    &.open .open-indicator::before
      transform: rotate(360deg)


</style>