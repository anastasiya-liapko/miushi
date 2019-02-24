<template>
  <div class="product">
    <div class="container">
      <button @click="navigateToMain">Вернуться назад</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToMain() {
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style lang="sass">
  .product
    border-top: 1px solid rgb(242, 242, 242)

</style>