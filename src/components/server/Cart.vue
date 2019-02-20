<template>
  <div class="cart">
    <div class="container">
      <form id="js-cart" class="cart__form">
        

        <div class="cart__items row flex-column align-items-center">
          <h2 class="title">Ваш заказ</h2>
        </div>
        

        <div class="cart__delivery row flex-column pb-5">
          <h2 class="title title_without-pics" v-highlight:color.delayed="'red'">Получатель и адрес доставки</h2>

          <div class="row flex-column flex-md-row justify-content-between w-100">
            <div div class="row flex-column justify-content-start col-md-6 pr-md-4">
              <input id="cartName" 
                     class="input input_green" 
                     type="password" 
                     name="name" 
                     placeholder="ФИО" 
                     v-model="userData.name">

              <input id="cartPhone" 
                     class="input input_green" 
                     type="text" 
                     name="phone" 
                     placeholder="Телефон" 
                     v-model.number="userData.phone">

              <input id="cartEmail" 
                     class="input input_green" 
                     type="text" 
                     name="email" 
                     placeholder="Email" 
                     v-model="userData.email">
            </div>

            <div class="row flex-column justify-content-start col-md-6 pl-md-4">
              <input id="cartDate" 
                     class="input input_green" 
                     type="text" 
                     name="date" 
                     placeholder="Дата доставки"
                     v-model="userData.date">

              <app-select id="cartDelivery"
                          class="select" 
                          :options="arrayOfObjects" 
                          :selected="object" 
                          v-on:updateOption="methodToRunOnSelect" 
                          :placeholder="'Select an Item'"
                          v-model="delivery">
              </app-select>
              <!-- :selected not working if there is v-model -->

              <input id="cartAddress" 
                     class="input input_green" 
                     type="text" 
                     name="address" 
                     placeholder="Адрес"
                     v-model="userData.address">
            </div>
          </div>

          <textarea id="cartComment" 
                    class="textarea textarea_green" 
                    name="comment" 
                    placeholder="Комментарий" 
                    v-model.lazy="userData.comment">
          </textarea>

          <div class="mb-3">
            <p-radio id="cartMale"
                     class="p-default p-round p-smooth" 
                     name="gender" 
                     color="success-o" 
                     value="Male"
                     v-model="userData.gender">
                     Male
            </p-radio>
            <p-radio id="cartFemale"
                     class="p-default p-round p-smooth"
                     name="gender" 
                     color="success-o"
                     value="Female"
                     v-model="userData.gender">
                     Female
            </p-radio>
            <p-input id="cartSpecial"
                     class="p-default p-round p-smooth"
                     type="radio" 
                     name="gender" 
                     color="success-o"
                     value="Special"
                     v-model="userData.gender">
                     Special
            </p-input>
          </div>

          <p-check id="cartMailing"
                   class="checkbox p-default p-thich p-smooth" 
                   color="success-o" 
                   value="userData.mailing"
                   v-model="userData.mailing">
                   Подписаться на новости и скидки
          </p-check>

          <div class="row flex-column flex-md-row align-items-center w-100">
            <div class="row justify-content-center col-md-6 mb-5 mb-md-0">
              <div class="captcha"></div>
            </div>

            <div class="row justify-content-center col-md-6">
              <!-- <button class="btn btn_red" 
                      name="cart"
                      @click.prevent="submitted">
                      Оформить заказ
              </button> -->
              <app-btn class="btn_red" @btnClick="isSubmitted = true">{{ 'Оформить заказ' }}</app-btn>
            </div>
          </div>
        </div>


        <div v-if="isSubmitted">
          <p>Name: {{ userData.name }}</p>
          <p>Phone: {{ userData.phone }}</p>
          <p>Email: {{ userData.email }}</p>
          <p>Date: {{ userData.date }}</p>
          <p>Delivery: {{ userData.delivery }}</p>
          <p>Address: {{ userData.address }}</p>
          <p style="white-space: pre">Comment: {{ userData.comment }}</p>
          <p>Mailing: {{ userData.mailing }}</p>
          <p>Gender: {{ userData.gender }}</p>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
  import Select from '../global/Select.vue';
  import Btn from '../global/Btn.vue';


  export default {
    data() {
      return {
        userData: {
          name: '',
          phone: '',
          email: '',
          date: '',
          delivery: 'Самовывоз',
          address: '',
          comment: '',
          mailing: true,
          gender: 'Male'
        },
        arrayOfObjects: 
        [
          {name: 'Самовывоз'},
          {name: 'Курьер'}
        ],
        object: 
        {
          name: 'Самовывоз',
        },
        isSubmitted: false
      }
    },
    computed: {
      delivery: function() {
        return this.userData.delivery = this.object.name;
      }
    },
    methods: {
      methodToRunOnSelect: function(payload) {
        this.object = payload;
      }
    },
    components: {
        'app-select': Select,
        'app-btn': Btn
    }
  }
</script>

<style lang="sass">
  .cart
    width: 100%
    background-color: rgb(255, 255, 255)
    border-top: 1px solid rgb(242, 242, 242)

  .container
    width: 100%
    height: auto

  .cart__delivery
    border: 1px solid green

  .cart
    .input,
    .select,
    .checkbox
      margin-bottom: 25px
    .calendar
      width: 250px
      height: 250px
      background-color: yellow
    .textarea
      margin: 25px 0
    .checkbox
      margin-bottom: 50px

  .captcha
    width: 250px
    height: 75px
    border: 1px solid green

</style>