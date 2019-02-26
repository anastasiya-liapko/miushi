<template>
  <div class="cart">
    <div class="container">
      <form id="js-cart" class="cart__form">


        <div class="cart__items row flex-column align-items-center">
          <!-- <h2 class="title">Ваш заказ</h2> -->
          <app-title>{{ 'Ваш заказ' }}</app-title>
          <div v-for="item in items">
              <app-item-order class="item_cart" :item="item"></app-item-order>
          </div>

          <br>

          <p>{{ total }}</p>
        </div>


        <div class="cart__delivery row flex-column pb-5">
          <!-- <h2 class="title title_without-pics" v-highlight:color.delayed="'red'">Получатель и адрес доставки</h2> -->
          <!-- <h2 class="title title_without-pics">Получатель и адрес доставки</h2> -->
          <app-title class="title_without-pics">{{ 'Получатель и адрес доставки' }}</app-title>

          <div class="row flex-column flex-md-row justify-content-between w-100">
            <div div class="row flex-column justify-content-start col-md-6 pr-md-4">
              <input id="cartName"
                     class="input input_green"
                     :class="{invalid: $v.userData.name.$error}"
                     name="name"
                     placeholder="ФИО"
                     @blur="$v.userData.name.$touch()"
                     v-model="userData.name">
              <!-- <p v-if="!$v.userData.name.required">This field must not be empty</p> -->

              <input id="cartPhone"
                     class="input input_green"
                     :class="{invalid: $v.userData.phone.$error}"
                     type="text"
                     name="phone"
                     placeholder="Телефон"
                     @blur="$v.userData.phone.$touch()"
                     v-model.number="userData.phone">
              <p v-if="!$v.userData.phone.required">This field must not be empty</p>

              <input id="cartEmail"
                     class="input input_green"
                     :class="{invalid: $v.userData.email.$error}"
                     type="text"
                     name="email"
                     placeholder="Email"
                     @blur="$v.userData.email.$touch()"
                     v-model="userData.email">
              <!-- <p v-if="!$v.userData.email.email">Please provide a valid email</p> -->
              <p v-if="!$v.userData.email.required">This field must not be empty</p>

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
                   :class="{invalid: !$v.userData.mailing.$model}"
                   color="success-o"
                   value="userData.mailing"
                   @change="$v.userData.mailing.$touch()"
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
              <app-btn class="btn_border btn_red" @btnClick="submit" :disabled="$v.$invalid">{{ 'Оформить заказ' }}</app-btn>
            </div>
          </div>

          <div class="row justify-content-center col-md-12 mt-3">
            <app-btn class="btn_border btn_red" @btnClick="fetch">{{ 'Получить данные' }}</app-btn>
          </div>
        </div>

        <ul class="list-group">
          <li class="list-group-item">{{ getUserData }}</li>
        </ul>

        <!-- <div v-if="isSubmitted">
          <p>Name: {{ userData.name }}</p>
          <p>Phone: {{ userData.phone }}</p>
          <p>Email: {{ userData.email }}</p>
          <p>Date: {{ userData.date }}</p>
          <p>Delivery: {{ userData.delivery }}</p>
          <p>Address: {{ userData.address }}</p>
          <p style="white-space: pre">Comment: {{ userData.comment }}</p>
          <p>Mailing: {{ userData.mailing }}</p>
          <p>Gender: {{ userData.gender }}</p>
        </div> -->

      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Select from '../global/Select.vue';
  import Btn from '../global/Btn.vue';
  import Title from '../global/Title.vue';
  import ItemOrder from '../global/ItemOrder.vue';
  import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators';
  import axios from 'axios';


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
                mailing: false,
                gender: 'Male'
            },
        // getUserData: [],
            getUserData: {},
            arrayOfObjects: [ {name: 'Самовывоз'}, {name: 'Курьер'} ],
            object: { name: 'Самовывоз' },
            isSubmitted: false
        }
    },
    validations: {
      userData: {
        name: {
          // sameAs: sameAs(vm => {
          //   return vm.email;
          // })
        },
        email: {
          required: required,
          email: email,
          unique: val => {
            if (val === '') return true
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(val !== 'test@test.com')
              }, 1000)
            })
            // return axious.get('/users.json?orderBy="email"&equalTo="' + val + '"')
            //   .then(res => {
            //     console.log(res);
            //     return Object.keys(res.data).length === 0
            //   })
          }
        },
        phone: {
          required
          // numeric,
          // minVal: minValue(18)
        },
        mailing: {
          required: requiredUnless(vm => {
            return true
          })
        }
      }
    },
    computed: {
        ...mapGetters({
            items: 'order',
            total: 'total'
        }),
        delivery: function() {
            return this.userData.delivery = this.object.name;
        }
    },
    methods: {
      methodToRunOnSelect: function(payload) {
        this.object = payload;
      },
      submit: function() {
        const data = {
            total: this.$store.getters.total,
            order: this.$store.getters.order,
            user: this.userData
        }
        this.isSubmitted = true;
        // this.$http.post('/upload.php', data)
        //     .then(response => {
        //       console.log('post-ok');
        //       console.log(response);
        //     }, error => {
        //       console.log('post-error');
        //       console.log(error);
        //     });
        axios.post('/upload.php', data)
          .then(res => console.log(res))
          .catch(error => console.log(error))
      },
      fetch: function() {
        // this.$http.get('/upload.php')
        //     .then(response => {
        //       console.log('get-ok');
        //       console.log(response);
        //       return response.json();
        //     }, error => {
        //       console.log('get-error');
        //       console.log(error);
        //     })
        //     .then(data => {
        //       console.log(data);
        //       // const resultArray = [];
        //       // for (let key in data) {
        //       //   resultArray.push(data[key]);
        //       // }
        //       // this.getUserData = resultArray;
        //       this.getUserData = data;
        //     });
        axios.get('/upload.php')
          .then(res => {
            console.log(res);
            const data = res.data;
            // const users = [];
            // for (let key in data) {
            //   const user = data[key];
            //   user.id = key;
            //   users.push(user);
            // }
            console.log(data);
          })
          .catch(error => console.log(error))
      }
    },
    components: {
        'app-select': Select,
        'app-btn': Btn,
        'app-title': Title,
        'app-item-order': ItemOrder
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
