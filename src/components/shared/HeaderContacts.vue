<template>
  <div class="contacts row flex-nowrap flex-grow-1 justify-content-between align-items-center">

    <p class="contacts__address address row align-items-center">
      <i class="iconmoon"></i>
      <span>г.Курск, ул.Ленина, д.3</span>
    </p>

    <p class="contacts__mail mail row align-items-center">
      <i class="iconmoon"></i>
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
</style>