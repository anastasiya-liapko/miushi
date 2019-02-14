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
              <app-select :options="arrayOfObjects" 
                          :selected="object" 
                          v-on:updateOption="methodToRunOnSelect" 
                          :placeholder="'Select an Item'">
              </app-select>

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
  import Select from '../global/Select.vue';


  export default {
    data() {
      return {
        arrayOfObjects: [{name: 'Самовывоз'}, {name: 'Курьер'}],
        object: {
          name: '',
        }
      }
    },

    components: {
        'app-select': Select,
    },

    methods: {
      methodToRunOnSelect(payload) {
        this.object = payload;
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

</style>