<template>
  <div class="header__bottom">
    <div class="container">
      <div class="row flex-nowrap">
        <app-header-nav></app-header-nav>
        <app-header-user></app-header-user>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from './HeaderNav.vue';
  import HeaderUser from './HeaderUser.vue';

  export default {
    components: {
      'app-header-nav': HeaderNav,
      'app-header-user': HeaderUser
    }
  }
</script>

<style lang="sass" scoped>
  .header__bottom
    margin-top: 20px
    border-top: 1px solid rgb(242, 242, 242)
</style>