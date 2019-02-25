<template>
  <!-- <router-link :to="{name: 'Item', params: { id: $route.params.id }}" tag="div" class="item"> -->
  <div class="item">
    <div class="item__image row justify-content-center align-items-center">
      <img :src="'dist/' + item.img" alt="">
    </div>
    <div class="item__info row flex-column">
      <p class="item__name">{{ item.name }}</p>
      <p class="item__descr">{{ item.amount }} шт. | {{ item.weight }} г. | {{ item.kkal }} kkal</p>
      <div class="item__pick row flex-nowrap justify-content-between">
        <p class="item__price row flex-nowrap">
          <span class="item__price-number align-self-end">{{ item.price }}</span>
          <span class="item__price-currency align-self-start"> руб.</span>
        </p>
        <div class="item__quantity">
          <!-- <button class="item__decrement" @click.prevent="decrement">-</button> -->
          <span>{{ quantity }}</span>
          <!-- <button class="item__increment" @click.prevent="increment">+</button> -->
        </div>
      </div>
      <app-btn class="item_cart-btn btn btn_border btn_red btn_add_to_cart" v-if="$route.path === '/cart'" @btnClick="removeFromCart" :disabled="item.quantity <= 0">{{ 'Удалить товар' }}</app-btn>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
  // import { mapGetters } from 'vuex';
  // import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
// import { eventBus } from '../../main.js';
// import * as types from '../../store/types.js';
import Btn from './Btn.vue';

export default {
    props: ['item'],
    data() {
      return {
        quantity: this.item.quantity
      }
    },
    methods: {
        ...mapActions([
            'delProduct'
        ]),
        removeFromCart() {
            console.log('remove from cart');
            const order = {
                id: this.item.id,
                price: this.item.price,
                quantity: this.quantity
            }
            console.log(order);
            this.delProduct(order);
            this.quantity = 0;
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity > 0 ) {
                this.quantity--;
            }
        }
      // increment() {
      //   this.$store.commit('increment');
      // },
      // decrement() {
      //   this.$store.commit('decrement');
      // },
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ])
      // ...mapActions([
      //   'asyncIncrement',
      //   'decrement'
      // ]),
      // increment(by) {
      //   this.$store.dispatch('increment', by);
      // }
    },
    components: {
        'app-btn': Btn
    }
}
</script>

<style lang="sass">
  .item
    background-color: rgb(255, 255, 255)
    border-radius: 10px
    box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.08)
 
  .item__name
    margin-bottom: 20px
    font-size: 20px
    line-height: 20px
    font-weight: 700

  .item__descr
    margin-bottom: 20px
    font-size: 12px
    line-height: 12px

  .item__pick
    margin-bottom: 20px

  .item__price-number
    font-size: 22px
    line-height: 22px
    font-weight: 700

  .item__price-currency
    font-size: 12px
    line-height: 12px
    font-weight: 700
    
  .item_main
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: stretch
    width: 100%
    height: 460px
    .item__image
      align-self: center
      width: 263px
      height: 228px
    .item__info
      align-items: center
      padding: 35px
    .item__pick
      width: 100%

  .rolls
    img
      width: 180px
      height: 180px


</style>