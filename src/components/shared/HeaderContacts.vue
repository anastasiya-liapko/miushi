<template>
  <div class="contacts row flex-nowrap flex-column flex-lg-row flex-grow-1 justify-content-between align-items-start align-items-lg-center">

    <p class="contacts__address address row align-items-center order-3 order-lg-1">
      <span>г.Курск, ул.Ленина, д.3</span>
    </p>

    <p class="contacts__mail mail row align-items-center order-4 order-lg-2">
      <span>78003332222@yandex.ru</span>
    </p>

    <p class="contacts__phone phone row flex-column order-1 order-lg-3">
      <span>+7 (800) 333 2 222</span>
      <span>Работаем с 11.00 до 23.00</span>
    </p>

    <router-link :to="{ hash: '#callback' }" tag="p" class="contacts__call call order-2 order-lg-4">
      <app-btn class="btn_border btn_green" @btnClick="value = $event">{{ 'Обратный звонок' }}</app-btn>
    </router-link>

  </div>
</template>

<script>
  import Btn from '../global/Btn.vue';

  export default {
    data: function() {
      return {
        value: false
      }
    },
    methods: {

    },
    components: {
      'app-btn': Btn
    }
  }
</script>

<style lang="sass">
  .contacts__phone
    span:first-child
      font-size: 1.125rem
      font-weight: 700
    span:last-child
      font-size: 0.625rem

  .address,
  .mail
    span
      position: relative
      padding-left: 20px
      &::before
        content: ""
        position: absolute
        top: 50%
        left: 0
        background-position: center
        background-size: cover
        background-repeat: no-repeat

  .address
    span::before
      width: 11px
      height: 16px
      margin-top: -8px
      background-image: url(../../assets/img/maps-and-flags.png)

  .mail
    span::before
      width: 12px
      height: 9px
      margin-top: -4px
      background-image: url(../../assets/img/envelope.png)


  @media(max-width: 991px)
    .contacts__call
      margin: 30px 0

    .contacts__address
      margin-bottom: 20px
    
</style>