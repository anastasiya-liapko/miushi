<template>
  <div class="product">
    <button @click="navigateToMain">Вернуться назад</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToMain() {
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="sass">

</style>