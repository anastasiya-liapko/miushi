<template>
  <div class="contacts row flex-nowrap flex-grow-1 justify-content-between align-items-center">

    <p class="contacts__address address row align-items-center">
      <span>г.Курск, ул.Ленина, д.3</span>
    </p>

    <p class="contacts__mail mail row align-items-center">
      <span>78003332222@yandex.ru</span>
    </p>

    <p class="contacts__phone phone row flex-column">
      <span>+7 (800) 333 2 222</span>
      <span>Работаем с 11.00 до 23.00</span>
    </p>

    <p class="contacts__call call">
      <app-btn></app-btn>
    </p>

  </div>
</template>

<script>
  import Btn from '../global/Btn.vue';

  export default {
    components: {
      'app-btn': Btn
    }
  }
</script>

<style lang="sass">
  .contacts
    border: 1px solid red
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
    span::before
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

</style>